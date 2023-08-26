//PERSONAL INFORMATION

function showPassword() {
    console.log('huh');
    var x = document.getElementsByClassName('myPassword');
    console.log(x);
    for (item in x) {
        console.log(x[item]);
        if (x[item].type === 'password') {
            x[item].type = 'text';
        } else {
            x[item].type = 'password';
        }
    }
}
