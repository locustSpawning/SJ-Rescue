//ANIMAL PROFILE JS //

//IMAGE CAROUSEL //

// const track = document.querySelector('.carousel__track');
// const slides = Array.from(track.children);
// const nextButton = document.querySelector('.carousel-button--right');
// const prevButton = document.querySelector('.carousel-button--left');
// const dotsNav = document.querySelector('.carousel__nav');
// const dots = Array.from(dotsNav.children);

// const slideSize = slides[0].getBoundingClientRect();
// const slideWidth = slideSize.width;

// //arrange the slides next to one another

// const setSlidePosition = (slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// };

// slides.forEach(setSlidePosition);

// const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//     currentSlide.classList.remove('current-slide');
//     targetSlide.classList.add('current-slide');
// };

// const updateDots = (currentDot, targetDot) => {
//     currentDot.classList.remove('current-slide');
//     targetDot.classList.add('current-slide');
// };

// const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
//     if (targetIndex === 0) {
//         prevButton.classList.add('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     } else if (targetIndex === slides.length - 1) {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.add('is-hidden');
//     } else {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     }
// };

// //when I click left, move slides to the left

// prevButton.addEventListener('click', (e) => {
//     const currentSlide = track.querySelector('.current-slide');
//     const prevSlide = currentSlide.previousElementSibling;
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const prevDot = currentDot.previousElementSibling;
//     const prevtIndex = slides.findIndex((slide) => slide === prevSlide);

//     moveToSlide(track, currentSlide, prevSlide);
//     updateDots(currentDot, prevDot);
//     hideShowArrows(slides, prevButton, nextButton, prevtIndex);
// });

// //when I click right, move slides to the right
// nextButton.addEventListener('click', (e) => {
//     const currentSlide = track.querySelector('.current-slide');
//     const nextSlide = currentSlide.nextElementSibling;
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const nextDot = currentDot.nextElementSibling;
//     const nextIndex = slides.findIndex((slide) => slide === nextSlide);

//     moveToSlide(track, currentSlide, nextSlide);
//     updateDots(currentDot, nextDot);
//     hideShowArrows(slides, prevButton, nextButton, nextIndex);
// });

// //when I click the nav indicators, move to that slide
// dotsNav.addEventListener('click', (e) => {
//     //what indicator was clicked?
//     const targetDot = e.target.closest('button');

//     if (!targetDot) return;

//     const currentSlide = track.querySelector('.current-slide');
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const targetIndex = dots.findIndex((dot) => dot === targetDot);
//     const targetSlide = slides[targetIndex];

//     moveToSlide(track, currentSlide, targetSlide);
//     updateDots(currentDot, targetDot);
//     hideShowArrows(slides, prevButton, nextButton, targetIndex);
// });

// //FAVORITE FEATURE

// var favIconAnimal = document.getElementById('blank-heart-animal');

// var favIconSpecies = document.getElementById('blank-heart-species');

// function ToggleHeart() {
//     if (favIconAnimal.src.match('images/heart.png')) {
//         favIconAnimal.src = 'images/heart (1).png';
//     } else {
//         favIconAnimal.src = 'images/heart.png';
//     }
// }

// function ToggleHeart2() {
//     if (favIconSpecies.src.match('images/heart.png')) {
//         favIconSpecies.src = 'images/heart (1).png';
//     } else {
//         favIconSpecies.src = 'images/heart.png';
//     }
// }

//Populate Animal

function getAnimalFromBackEnd(rescueID) {
    animalProfileParameters = new URLSearchParams({
        keyRescueID: rescueID,
    });
    fetch('/animalProfile?' + animalProfileParameters.toString(), {
        method: 'GET',
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            animalElement = createAnimalElement(
                data.images[0],
                data.name,
                data.favoritedAnimal,
                data.favoritedSpecies,
                data.status,
                data.species,
                data.gender,
                data.breed,
                data.current_age,
                data.bio,
                data.rescue_id
            );
            animalDivContainer = $('#pet-info');
            animalDivContainer.append(animalElement);
        });
}

function createAnimalElement(
    imageSource,
    Name,
    FavoritedAnimal,
    FavoritedSpecies,
    AnimalStatus,
    Species,
    Gender,
    Breed,
    Age,
    Bio,
    Id
) {
    //Animal Name Title
    nameSection = $('#pet-id');
    animalName = $('<h1></h1>').append(Name);
    animalName.addClass('text-main-title-500-reg');
    animalName.addClass('animal-name');
    nameSection.append(animalName);

    //Animal Images
    animalImage = $('<img></img>');
    animalImage.attr('src', imageSource);
    animalImage.addClass('carousel-image');
    imageDiv = $('<div></div>').append(animalImage);
    imageDiv.addClass('carousel__track-container');

    //Favorite Buttons
    favAnimalButtonDiv = $('<div></div');
    favAnimalButtonDiv.attr('id', 'fav-buttons');
    favAnimal = $('<button></button>');
    favSpecies = $('<button></button>');
    favAnimal.addClass('favorites-button');
    favSpecies.addClass('favorites-button');

    favAnimal.html('<img>' + Name);
    favSpecies.html('<img>' + Breed);

    favAnimalButtonDiv.append(favAnimal);
    favAnimalButtonDiv.append(favSpecies);

    if (FavoritedAnimal === false) {
        favAnimal.children().first().attr('src', 'images/heartBlank.png');
    } else {
        favAnimal.children().first().attr('src', 'images/heartPink.png');
    }

    if (FavoritedSpecies === false) {
        favSpecies.children().first().attr('src', 'images/heartBlank.png');
    } else {
        favSpecies.children().first().attr('src', 'images/heartPink.png');
    }

    //Animal Status
    animalStatus = $('<p>Status: Available for </p>').append(AnimalStatus);
    animalStatus.addClass('text-main-bold-400');

    //Pet Details Section
    animalSpecies = $('<p>Species: </p>').append(Species);
    animalSpecies.addClass('text-main-bold-400');
    animalGender = $('<p>Gender: </p>').append(Gender);
    animalGender.addClass('text-main-bold-400');
    animalBreed = $('<p>Breed: </p>').append(Breed);
    animalBreed.addClass('text-main-bold-400');
    rescueID = $('<p>Rescue ID: </p>').append(Id);
    rescueID.addClass('text-main-bold-400');

    yearInSec = 365 * 24 * 60 * 60;
    Age = Age.seconds;
    years = Math.floor(Age / yearInSec);
    days = Math.round((Age % yearInSec) / (60 * 60 * 24 * 30));

    animalAge = $('<p>Age: </p>').append(`${years} years. ${days} months`);
    animalAge.addClass('text-main-bold-400');

    //About Section
    aboutTitle = $('<h1>About: </h1>');
    aboutTitle.addClass('text-main-title-500-reg');
    aboutTitle.attr('id', 'about-title');
    animalBio = $('<p></p>').append(Bio);
    animalBio.addClass('text-main-400');
    animalBio.attr('id', 'animal-descriptive-paragraph');

    mainDiv = $('<div></div>');
    mainDiv.attr('id', 'pet-id');
    mainDiv.addClass('text-pet-info');

    mainDiv.append(imageDiv);

    mainDiv.append(`  <div id="looking-to-adopt">
                <p class="text-main-400">
                    Looking to adopt? <br />
                    Fill out a form
                    <a
                        class="text-highlight-bold-400"
                        href="Forms-html/adopt-form.html"
                        >here!</a
                    >
                </p>
            </div>`);

    mainDiv.append(favAnimalButtonDiv);

    mainDiv.append(animalStatus);
    mainDiv.append(animalSpecies);
    mainDiv.append(animalGender);
    mainDiv.append(animalBreed);
    mainDiv.append(rescueID);
    mainDiv.append(animalAge);
    mainDiv.append(aboutTitle);
    mainDiv.append(animalBio);

    return mainDiv;
}

window.addEventListener('load', () => {
    const thisURL = window.location.search;
    const animalIDParam = new URLSearchParams(thisURL);
    console.log(animalIDParam);
    getAnimalFromBackEnd(animalIDParam.get('rescueID'));
});
