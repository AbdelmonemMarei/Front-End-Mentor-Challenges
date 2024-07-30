// Selecting divs
const billInput = document.querySelector(".currency .form input");
const tipBtns = document.querySelectorAll(".tips .tip-grid button");
const customTip = document.querySelector(".tips .tip-grid .custom");
const peopleInput = document.querySelector(".people .form input");
const tipAmount = document.querySelector(".person-tip");
const totalAmount = document.querySelector(".total-tip");
const resetBtn = document.querySelector(".user-output button")

let billValue = 0;
let tipValue = 0;
let customTipValue = 0;
let numberOfPeople = 1;



function ResetTips ( bill_value, tip_value, custom_tip_value, number_of_people ){
    let tipAmountValue =  custom_tip_value?(bill_value * ((custom_tip_value / (100 * number_of_people)))):((bill_value * (tip_value/ (100 * number_of_people))))
    let totalAmountValue =  ((bill_value / number_of_people) + tipAmountValue)

    tipAmount.textContent = `$${tipAmountValue.toPrecision(3)}`
    totalAmount.textContent = `$${totalAmountValue.toPrecision(4)}`

    resetBtn.classList.add('active');
}

// input 
billInput.addEventListener("blur",(eve)=> {
    let errorPara = document.querySelector(".user-interface .currency .bill-error")
    if(eve.target.value == "" || eve.target.value <= 0){
        errorPara.classList.add("active")
        eve.target.classList.add("error")
    }else{
        if(errorPara.classList.contains("active") || eve.target.classList.contains("error")){
            errorPara.classList.remove("active")
            eve.target.classList.remove("error")
        }
        
        billValue = eve.target.value;

        ResetTips(billValue,tipValue,customTipValue,numberOfPeople);
    }
})

tipBtns.forEach(button =>{
    button.addEventListener("click", eve =>{
        if(customTip.hasAttribute("value")){
            eve.preventDefault()
        }else{
            tipBtns.forEach(button =>{button.classList.remove("clicked")})
            eve.target.classList.add("clicked")
            tipValue = eve.target.value;
            customTipValue = 0;

            ResetTips(billValue,tipValue,customTipValue,numberOfPeople);

        }
    })
    
})

customTip.addEventListener("blur",(eve) =>{
    if(eve.target.value !="" && +eve.target.value > 0){
        tipBtns.forEach(button =>{button.classList.remove("clicked")})
        eve.target.setAttribute("value",eve.target.value)

        tipValue = 0;
        customTipValue = eve.target.value;

        ResetTips(billValue,tipValue,customTipValue,numberOfPeople);
        
    }else{
        eve.target.removeAttribute("value")
    }
})

peopleInput.addEventListener("blur",(eve)=> {
    let errorPara = document.querySelector("p.people-error")
    if(eve.target.value == "" || eve.target.value <= 0){
        errorPara.classList.add("active")
        eve.target.classList.add("error")
    }else{
        if(errorPara.classList.contains("active") || eve.target.classList.contains("error")){
            errorPara.classList.remove("active")
            eve.target.classList.remove("error")
        }
        numberOfPeople = eve.target.value;
        ResetTips(billValue,tipValue,customTipValue,numberOfPeople);

    }
})


resetBtn.addEventListener("click",()=>{
    ResetTips(0,0,0,1);
    resetBtn.classList.remove('active');
})
