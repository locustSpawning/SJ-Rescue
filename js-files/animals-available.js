let numberOfAnimalsPerPage = 6;

$(document).ready(function () {
    setAnimalGrid(0, numberOfAnimalsPerPage);
});

function setAnimalGrid(start, stop, filter = null) {
    animalQueryParameters = new URLSearchParams({
        start: start,
        stop: stop,
    });
    if (filter != null) {
        animalQueryParameters.append('kind', filter);
    }
    animalGrid = $('#animal-grid');
    fetch('/animalQuery?' + animalQueryParameters.toString(), {
        method: 'GET',
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            animalGrid.empty();
            for (i in data) {
                animalGrid.append(
                    createAnimalSynopsisElement(
                        data[i].images[0],
                        data[i].name,
                        data[i].species,
                        data[i].gender,
                        data[i].breed,
                        data[i].rescue_id
                    )
                );
            }
        })
        .catch((err) => {
            console.log('error caught 🐛');
        });
}

//Populate Animal

function createAnimalSynopsisElement(
    imageSource,
    Name,
    Species,
    Gender,
    Breed,
    rescueID
) {
    animalImage = $('<img></img>');
    animalImage.attr('src', imageSource);
    animalImage.addClass('animal');
    imageDiv = $('<div></div>').append($('<a></a>').append(animalImage));
    imageDiv.addClass('animal-block ');
    animalName = $('<p></p>').append(Name);
    animalName.addClass('text-main-bold-400');
    animalName.addClass('animal-name');
    animalSpecies = $('<p></p>').append(Species + ' - ' + Gender);
    animalSpecies.addClass('text-main-400');
    animalBreed = $('<p></p>').append(Breed);
    animalBreed.addClass('text-main-400');
    mainDiv = $('<div></div>');
    mainDiv.append(imageDiv);
    mainDiv.append(animalName);
    mainDiv.append(animalSpecies);
    mainDiv.append(animalBreed);
    mainDiv.addClass('grid-section');
    mainDiv.on('click', (e) => {
        // console.log(rescueID);
        //url animal-profile + rescueID
        animalUrlParameters = new URLSearchParams({
            rescueID: rescueID,
        });
        thisURL = '/animal-profile.html?' + animalUrlParameters.toString();
        // console.log(thisURL);
        window.location.href = thisURL;
    });
    return mainDiv;
}

//PAGINATION//

//Populate Page Numbers//

async function getNumberOfAnimals() {
    return fetch('/countAnimals', {
        method: 'GET',
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data;
        });
}

// getNumberOfAnimals().then((result) => {
//     console.log(result);
// });

function setAnimalSynopsisStage(pagenum) {
    // this function will take a page number and populate the grid with animals
    //exclusive
    start = pagenum * numberOfAnimalsPerPage;
    stop = start + numberOfAnimalsPerPage;
    filter = $('#animal-select').get(0).value;
    console.log(filter);
    // clear the stage first
    $('#animal-grid').innerHTML = '';
    setAnimalGrid(start, stop, filter);
}

var currentPageEle = null;
var currentPage = 0;
var pageEles = [];

function generatePageNumbers(NumberOfAnimals) {
    //loop through numberOfAnimalsPerPage and create a page for each iteration
    let i = 0;
    let numberOfPages = Math.ceil(NumberOfAnimals / numberOfAnimalsPerPage);
    mainList = $('<ul></ul>');
    pageEles = [];
    while (i < numberOfPages) {
        pageNumberEle = $('<li></li>');
        pageNumberEle.addClass('link');
        if (i == currentPage) {
            currentPageEle = pageNumberEle;
            pageNumberEle.addClass('active');
        }
        pageNumberEle.addClass('text-main-400');
        pageNumberEle.value = i;
        pageNumberEle.html(i + 1);
        pageNumberEle.on('click', pageNumberEleClicked);
        mainList.append(pageNumberEle);
        pageEles.push(pageNumberEle.get(0));
        i++;
    }
    mainList.insertBefore('.btn2');
    return mainList;
    //Each page will have a value to keep tarck of page + paginaton display
}

getNumberOfAnimals().then((result) => {
    generatePageNumbers(result);
});

function getCurrentPageNumFromEle() {
    return parseInt(currentPageEle.innerHTML) - 1;
}

function pageNumberEleClicked(e) {
    console.log('huu');
    if (currentPageEle != null) {
        $(currentPageEle).removeClass('active');
    }

    currentPageEle = e.target;
    currentPageEle.classList.add('active');
    currentPage = getCurrentPageNumFromEle();
    setAnimalSynopsisStage(currentPage);
}

button1 = $('.btn1');
button1.on('click', backBtnClicked);

smButton1 = $('#small-back-button');
smButton1.on('click', backBtnClicked);

function backBtnClicked(e) {
    if (currentPage === 0) {
        return;
    } else {
        currentPage--;
        setAnimalSynopsisStage(currentPage);
        if (currentPageEle != null) {
            $(currentPageEle).removeClass('active');
        }
        currentPageEle = pageEles[currentPage];
        currentPageEle.classList.add('active');
        setAnimalSynopsisStage(currentPage);
    }
}

button2 = $('.btn2');
button2.on('click', nextBtnClicked);

smButton2 = $('#small-next-button');
smButton2.on('click', nextBtnClicked);

function nextBtnClicked(e) {
    currentPage++;
    if (currentPage == pageEles.length) {
        currentPage--;
        return;
    }
    setAnimalSynopsisStage(currentPage);
    if (currentPageEle != null) {
        $(currentPageEle).removeClass('active');
    }
    currentPageEle = pageEles[currentPage];
    currentPageEle.classList.add('active');
    setAnimalSynopsisStage(currentPage);
}
