var buttonSignUp = document.getElementById('button-sign-up');
var curtain = document.getElementById('curtain');
var signUp = document.getElementById('sign-up');
var iconLeft = document.getElementById('icon-left');
var formListTwo = document.getElementById('sign-up-form-two');
var iconRight = document.getElementById('icon-right');

var deleteWindow = function() {
    curtain.classList.add('display-none');
    signUp.classList.add('display-none');
}
var resetCurtainDelete = function() {
    curtain.classList.remove('curtain-delete');
    signUp.classList.remove('signUp-delete');
}
var deleteForm = function() {
    formListTwo.classList.add('display-none');
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
iconLeft.onclick = function(){
    formListTwo.classList.remove('display-none');
    formListTwo.classList.add('seeformtwo');
    formListTwo.classList.remove('noseeformtwo');
}
iconRight.onclick = function() {
    formListTwo.classList.add('noseeformtwo');
    setTimeout(deleteForm,500);
    formListTwo.classList.remove('seeformtwo');
}