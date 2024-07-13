// Fetching data and insert in divs
const slider = document.querySelector(".slider");
const container = document.querySelector(".container");


slider.addEventListener("click",(event)=>{
    event.target.classList.toggle("active");
    container.classList.toggle("dark");
})
