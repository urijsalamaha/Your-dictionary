let start_button = document.getElementById('start_button');
let registration_form = document.getElementById('registration_form');
let registration = document.getElementById('registration');
let button_sign_in = document.getElementById('button_sign_in');
let button_sign_up = document.getElementById('button_sign_up');
let nav_sign_in = document.getElementById('nav_sign_in');
let nav_sign_up = document.getElementById('nav_sign_up');
let form = document.getElementById('form');

start_button.onclick = function () {
    registration_form.classList.remove('none');
}
button_sign_in.onclick = function () {
    document.location.href = '../layouts/dictionary.html';
}
nav_sign_up.onclick = function () {
    nav_sign_in.classList.remove('active');
    nav_sign_up.classList.add('active');
    registration.classList.remove('none');
    form.classList.add('align_form');
}
button_sign_up.onclick = function () {
    document.location.href = '../layouts/dictionary.html';
}