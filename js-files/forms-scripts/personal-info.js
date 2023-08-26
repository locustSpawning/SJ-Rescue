//PERSONAL INFORMATION

//SHOW PASSWORDS
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

//CHECK PASSWORDS MATCH
function check() {
    var input = document.getElementById('password_confirm');
    if (input.value != document.getElementById('password').value) {
        input.setCustomValidity('Password Must be Matching.');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
}
