const slideMain = document.querySelector(".slide-main");
const slideItems = document.querySelectorAll(".image-control-slide");
const dotSlide = document.querySelectorAll(".num");
const slideItemWidth = slideItems[0].offsetWidth;  // width of item in slide
const slideLenght = slideItems.length; // length of slide

var translateX = 0;
var index = 0;

// handle for control right slide
const next= ()=> {
    index++;
    if(index >= slideLenght) {
        index=0;
        translateX = 0;
    } else {
        translateX-=slideItemWidth;
    }
    slideMain.style = `transform: translateX(${translateX}px); transition: linear .4s`;
    [ ...dotSlide].forEach((element)=>element.classList.remove("active"));
    dotSlide[index].classList.add("active");
}

// handle for dot slide
[ ...dotSlide].forEach((item)=>item.addEventListener("click", (e)=> {
    [ ...dotSlide].forEach((element)=>element.classList.remove("active"));
    e.target.classList.add("active");
    const slideIndex = parseInt(e.target.dataset.index);
    index = slideIndex;
    translateX = -1*index*slideItemWidth;
    slideMain.style = `transform: translateX(${translateX}px); transition: linear .4s`;
}));

setInterval(() => {
    next();
}, 3500);