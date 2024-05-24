// Get elements
const ratingBtns = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".submit");
let selected =" "
ratingBtns.forEach(el => el.addEventListener("click",
(e)=>{
    ratingBtns.forEach(el => {
        el.classList.remove("active")
    });
    e.target.classList.add("active");
    selected = el.textContent;
    submitBtn.addEventListener("click",(e)=>{
        if(!selected){
            e.preventDefault;
        }
        document.querySelector(".selected").textContent =`You selected ${selected} out of 5`;
        document.querySelector(".card-backward").style.display="flex";
    })
}
))
