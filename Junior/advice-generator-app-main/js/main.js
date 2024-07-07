const idDiv = document.querySelector(".id");
const adviceDiv = document.querySelector(".advice");
const icon = document.querySelector(".icon");

// Fetching data and insert in divs
async function fetchingAdvice(){
    // load spinner
    icon.classList.add('fetching');
    
    fetch("https://api.adviceslip.com/advice")
    .then(data => data.json())
    .then(advice => {
        idDiv.textContent = `advice # ${advice.slip.id}`
        adviceDiv.textContent = ` ${advice.slip.advice} `
        icon.classList.remove('fetching');
    }).catch(error=> Error(error));
}


// To Fetch Advice using luck icon
icon.addEventListener("click",()=>{
    fetchingAdvice()
})