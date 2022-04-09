var menuVisibility = document.getElementById("header-menu-mobile");
var menuOpenBtnVisibility = document.getElementById("menu-open-btn");
var menuCloseBtnVisibility = document.getElementById("menu-close-btn");

function openMenu() {
    menuVisibility.removeAttribute('class');
    menuVisibility.setAttribute('class', 'z-20 absolute flex laptop:hidden w-full h-96 bg-white drop-shadow-xl flex flex-col justify-center items-center justify-around py-10');
    menuOpenBtnVisibility.removeAttribute('class');
    menuOpenBtnVisibility.setAttribute('class', 'hidden laptop:hidden justify-center space-y-1.5 mx-2');
    menuCloseBtnVisibility.removeAttribute('class');
    menuCloseBtnVisibility.setAttribute('class', 'flex laptop:hidden justify-center items-center mx-2');
}

function closeMenu() {
    menuVisibility.removeAttribute('class');
    menuVisibility.setAttribute('class', 'z-20 absolute hidden laptop:hidden w-full h-96 bg-white drop-shadow-xl flex flex-col justify-center items-center justify-around py-10');
    menuOpenBtnVisibility.removeAttribute('class');
    menuOpenBtnVisibility.setAttribute('class', 'flex flex-col laptop:hidden justify-center space-y-1.5 mx-2');
    menuCloseBtnVisibility.removeAttribute('class');
    menuCloseBtnVisibility.setAttribute('class', 'hidden justify-center items-center mx-2');
}