// FORMS JAVASCRIPT FILES

var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');

var nextFirstPage = document.getElementById('next-first-page');
var backSecondPage = document.getElementById('back-second-page');

nextFirstPage.onclick = function () {
    form1.style.left = '-750px';
    form2.style.left = '40px';
};

backSecondPage.onclick = function () {
    form1.style.left = '40px';
    form2.style.left = '750px';
};
