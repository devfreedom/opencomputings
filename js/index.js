var menuVisibility = document.getElementById("header-menu-mobile");
var menuOpenBtnVisibility = document.getElementById("menu-open-btn");
var menuCloseBtnVisibility = document.getElementById("menu-close-btn");

function openMenu() {
    menuVisibility.removeAttribute('class');
    menuVisibility.setAttribute('class', 'z-30 fixed flex flex-col laptop:hidden justify-center items-center justify-around w-full h-96 mt-16 bg-white drop-shadow-xl py-10');
    menuOpenBtnVisibility.removeAttribute('class');
    menuOpenBtnVisibility.setAttribute('class', 'hidden laptop:hidden justify-center space-y-1.5 mx-2');
    menuCloseBtnVisibility.removeAttribute('class');
    menuCloseBtnVisibility.setAttribute('class', 'flex laptop:hidden justify-center items-center mx-2');
}

function closeMenu() {
    menuVisibility.removeAttribute('class');
    menuVisibility.setAttribute('class', 'z-30 fixed flex flex-col hidden laptop:hidden justify-center items-center justify-around w-full h-96 mt-16 bg-white drop-shadow-xl py-10');
    menuOpenBtnVisibility.removeAttribute('class');
    menuOpenBtnVisibility.setAttribute('class', 'flex flex-col laptop:hidden justify-center space-y-1.5 mx-2');
    menuCloseBtnVisibility.removeAttribute('class');
    menuCloseBtnVisibility.setAttribute('class', 'hidden justify-center items-center mx-2');
}