var buttonSignUp = document.getElementById('button-sign-up');
var curtain = document.getElementById('curtain');
var signUp = document.getElementById('sign-up');


buttonSignUp.onclick = function() {
    curtain.classList.remove('display-none');
    signUp.classList.remove('display-none');
}
