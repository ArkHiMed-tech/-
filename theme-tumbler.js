let page = document.querySelector('.theme-container');
let btn = document.querySelector('.theme-button');

btn.onclick = function () {
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
}
