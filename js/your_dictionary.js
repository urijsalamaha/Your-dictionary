var buttonSignUp = document.getElementById('button-sign-up');
var curtain = document.getElementById('curtain');
var signUp = document.getElementById('sign-up');

var deleteWindow = function() {
    curtain.classList.add('display-none');
    signUp.classList.add('display-none');
}
var resetCurtainDelete = function() {
    curtain.classList.remove('curtain-delete');
    signUp.classList.remove('signUp-delete');
}

buttonSignUp.onclick = function() {
    curtain.classList.remove('display-none');
    signUp.classList.remove('display-none');
}
curtain.onclick = function(){
    this.classList.add('curtain-delete');
    signUp.classList.add('signUp-delete');
    setTimeout(deleteWindow, 500);
    setTimeout(resetCurtainDelete, 500);
}