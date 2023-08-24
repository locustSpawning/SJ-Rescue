console.log('🐢');

//SCROLL TO TOP

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});

// MINI SCREEN MENU

const toggleButton = document.querySelector('.menu-button');
const menuDisplay = document.getElementById('drop-down-menu');

toggleButton.addEventListener('click', () => {
    if (menuDisplay.style.display == 'none') {
        menuDisplay.style.display = 'flex';
    } else {
        menuDisplay.style.display = 'none';
    }
});
