//PROFILE PAGE SCRIPT

//FAVORITE FEATURE

let favIconAnimal = document.querySelector('.filled-heart-animal');
let favIconSpecies = document.querySelector('.filled-heart-species');

function locateHeartAnimal() {
    let targetFavIconAnimal = favIconAnimal.closest('img');
    console.log(targetFavIconAnimal);
    if (targetFavIconAnimal) {
        ToggleHeart(targetFavIconAnimal);
    }
}

function locateHeartSpecies() {
    let targetFavIconSpecies = favIconAnimal.closest('img');
    console.log(targetFavIconSpecies);
    if (targetFavIconSpecies) {
        ToggleHeart2(targetFavIconSpecies);
    }
}

function ToggleHeart(targetFavIconAnimal) {
    let decoded = targetFavIconAnimal.getAttribute('src');
    console.log(decoded);
    if (decoded == '../images/heart (1).png') {
        targetFavIconAnimal.src = '../images/heart.png';
    } else {
        targetFavIconAnimal.src = '../images/heart (1).png';
    }
}

function ToggleHeart2(targetFavIconSpecies) {
    if (targetFavIconSpecies.src.match('../images/heart (1).png')) {
        targetFavIconSpecies.src = '../images/heart.png';
    } else {
        targetFavIconSpecies.src = '../images/heart (1).png';
    }
}
