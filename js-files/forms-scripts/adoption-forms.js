// ADOPTION FORMS JAVASCRIPT FILES

var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 = document.getElementById('form3');
var form4 = document.getElementById('form4');
var form5 = document.getElementById('form5');

var nextFirstPage = document.getElementById('next-first-page');
var nextSecondPage = document.getElementById('next-second-page');
var nextThirdPage = document.getElementById('next-third-page');
var nextFourthPage = document.getElementById('next-fourth-page');
var backSecondPage = document.getElementById('back-second-page');
var backThirdPage = document.getElementById('back-third-page');
var backFourthPage = document.getElementById('back-fourth-page');
var backFifthPage = document.getElementById('back-fifth-page');

nextFirstPage.onclick = function () {
    form1.style.left = '-750px';
    form2.style.left = '0px';
};

nextSecondPage.onclick = function () {
    form2.style.left = '-750px';
    form3.style.left = '0px';
};

nextThirdPage.onclick = function () {
    form3.style.left = '-750px';
    form4.style.left = '0px';
};

nextFourthPage.onclick = function () {
    form4.style.left = '-750px';
    form5.style.left = '0px';
};

backSecondPage.onclick = function () {
    form1.style.left = '0px';
    form2.style.left = '750px';
};

backThirdPage.onclick = function () {
    form2.style.left = '0px';
    form3.style.left = '750px';
};

backFourthPage.onclick = function () {
    form3.style.left = '0px';
    form4.style.left = '750px';
};

backFifthPage.onclick = function () {
    form4.style.left = '0px';
    form5.style.left = '750px';
};
