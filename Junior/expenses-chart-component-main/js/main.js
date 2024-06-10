// Getting data from JSON
const fetchingData = fetch("./data.json");

fetchingData.then(result =>{
    return result.json();
}).then(data=>{
    for(const property in data){
        let dayDiv = document.querySelector(`.${data[property]["day"]}`);
        dayDiv.setAttribute("data-amount",`${data[property]["amount"]}`)
        dayDiv.style.height = `${data[property]["amount"]}` / 100 * 250 +"px";
    }
}).catch(err => console.log(Error(err)))

// 
const charts = document.querySelectorAll(".ratings div");

charts.forEach(chart => {
    chart.addEventListener("click",event=>{
        charts.forEach(ele => ele.classList.remove("clicked"))
        event.target.classList.add("clicked")
    });
})