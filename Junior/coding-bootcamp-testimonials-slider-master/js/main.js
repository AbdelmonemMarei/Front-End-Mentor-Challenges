const forwardCard = document.querySelector(".forward-card");
const bacwardCard = document.querySelector(".bacward-card");

const sliderArrows = document.querySelectorAll(".slider a");


sliderArrows.forEach(el => {
    el.addEventListener("click",() => {
        forwardCard.classList.toggle("hidden");
        bacwardCard.classList.toggle("hidden");
    })
})