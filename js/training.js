let settings_page = document.getElementById('settings_page');
let settings_page_button = document.getElementById('settings_page_button');
let settings_window = document.getElementById('settings_window');


settings_page.onclick = function () {
    settings_window.classList.remove('hidden');
    settings_window.classList.remove('none')
}
settings_page_button.onclick = function () {
    settings_window.classList.add('hidden');
    settings_window.classList.add('none');
}