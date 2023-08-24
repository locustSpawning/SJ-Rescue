//PROFILE PAGE SCRIPT

//FAVORITE FEATURE

let favIconAnimal = document.querySelectorAll('.filled-heart-animal');
let favIconSpecies = document.querySelectorAll('.filled-heart-species');
console.log(favIconAnimal);
console.log(favIconSpecies);

function locateHeartAnimal(favIconAnimal) {
    let targetFavIconAnimal = favIconAnimal.closest('img');
    // console.log(targetFavIconAnimal);
    if (targetFavIconAnimal) {
        ToggleHeart(targetFavIconAnimal);
    }
}

function locateHeartSpecies(favIconSpecies) {
    let targetFavIconSpecies = favIconSpecies.closest('img');
    // console.log(targetFavIconSpecies);
    if (targetFavIconSpecies) {
        ToggleHeart2(targetFavIconSpecies);
    }
}

function ToggleHeart(targetFavIconAnimal) {
    let decoded = targetFavIconAnimal.getAttribute('src');
    // console.log(decoded);
    if (decoded == '../images/heart (1).png') {
        targetFavIconAnimal.src = '../images/heart.png';
    } else {
        targetFavIconAnimal.src = '../images/heart (1).png';
    }
}

function ToggleHeart2(targetFavIconSpecies) {
    let decoded = targetFavIconSpecies.getAttribute('src');
    if (decoded == '../images/heart (1).png') {
        targetFavIconSpecies.src = '../images/heart.png';
    } else {
        targetFavIconSpecies.src = '../images/heart (1).png';
    }
}
