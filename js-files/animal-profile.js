//ANIMAL PROFILE JS //

var favIconAnimal = document.getElementById('blank-heart-animal');

var favIconSpecies = document.getElementById('blank-heart-species');

function ToggleHeart() {
    if (favIconAnimal.src.match('../images/heart.png')) {
        favIconAnimal.src = '../images/heart (1).png';
    } else {
        favIconAnimal.src = '../images/heart.png';
    }
}

function ToggleHeart2() {
    if (favIconSpecies.src.match('../images/heart.png')) {
        favIconSpecies.src = '../images/heart (1).png';
    } else {
        favIconSpecies.src = '../images/heart.png';
    }
}
