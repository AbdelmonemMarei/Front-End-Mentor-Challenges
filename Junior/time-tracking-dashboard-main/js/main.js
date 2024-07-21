// Selecting buttons for periods of time activity
// --buttons to choose time 
const btns = document.querySelectorAll(".options p");

// function to getData from JSON file using fetchAPI and put data into paragraphs 
const  changeData =  function(time){
btns.forEach(btn=>btn.classList.remove('active'));//remove other selected buttons

//fetch data from json file and then add to HTML elements
fetch("data.json")
.then(data => data.json())
.then(data => {
        for(const obj in data)
        {
            let currentPara = document.querySelector(`.stats .${data[obj]["title"].toLowerCase()} .activity .current`);
            let previousPara = document.querySelector(`.stats .${data[obj]["title"].toLowerCase()} .activity .previous`);
            currentPara.innerText = `${data[obj]["timeframes"][time]["current"]}hrs`;
            previousPara.innerText = `Last Week - ${data[obj]["timeframes"][time]["previous"]}hrs`;
        }
    })
}

// When click on time tracker button excute changeData function
btns.forEach(btn => {
    btn.addEventListener("click",eve => {changeData(eve.target.className);eve.target.classList.add('active')});
})
