const shareIcon = document.querySelector(".share-icon")

shareIcon.addEventListener("click",()=>{
    shareIcon.classList.toggle("active");// not use event.target to avoid click on img child of shar-icon
    shareIcon.nextElementSibling.classList.toggle("active");
})
