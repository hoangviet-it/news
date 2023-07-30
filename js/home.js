const body = document.querySelector('body');
const container = document.querySelector('.container');
const inputSearch = document.querySelector('#search');
const btnSearch = document.querySelector('.btn-search');
const searchTablet = document.querySelector('.search-tablet');
const btnClose = document.querySelector('.btn-close');
const btnSearchTablet = document.querySelector('.btn-search-tablet');
const menu = document.querySelector('.menu-mobile');
const btnMenu = document.querySelector('.btn-menu');
const btncloseMenu = document.querySelector('.btn-closeMenu');

const showInput = ()=> {
    searchTablet.style = "display: block";
    searchTablet.style.animation = "ShowInput .3s linear";
    btnClose.style = "display: block";
    btnSearchTablet.style = "display: block";
}
const closeInput = ()=> {
    searchTablet.style.animation = "HiddenInput .3s linear";
    setTimeout(() => {
        btnClose.style = "display: none";
        btnSearch.style = "display: block";
        searchTablet.style = "display: none";
    }, 260);
}
const showmenu = ()=> {
    menu.style = "display: block";
    menu.style.animation = "ShowInput .2s linear";
    btncloseMenu.style = "display: block";
    container.classList.add('bg-opacity');
}
const closeMenu = ()=> {
    menu.style.animation = "HiddenInput .2s linear";
    setTimeout(() => {
        container.classList.remove('bg-opacity'); 
        menu.style = "display: none";
        btncloseMenu.style = "display: none";    
    }, 200);

}