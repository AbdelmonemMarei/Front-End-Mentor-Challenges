// Selecting form divs
const frontForm = document.querySelector(".form-front");
const validateForm = document.querySelector(".form-validate");

// Selecting inputs
const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#number");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const cvcInput = document.querySelector("#cvc");

// Selecting text paragraphs
const cardNumberPara = document.querySelector(".card-number");
const personNamePara = document.querySelector(".person-name");
const personDatePara = document.querySelector(".person-date");
const cvcPara = document.querySelector(".cvc");

// Selecting Error paragraphs
const nameError = document.querySelector(".name-text");
const numberError = document.querySelector(".number-text");
const dateError = document.querySelector(".date-text");
const cvcError = document.querySelector(".cvc-text");
const errorParas = document.querySelectorAll(".error-text");

// Selecting Buttons
const frontBtn = document.querySelector("button.front");
const validateBtn = document.querySelector("button.validate");

// Validations 
let nameValidate = false;
let numberValidate = false;
let dateValidate = false;
let cvcValidate = false;


// Name Input Logic
nameInput.addEventListener("blur",(event)=>{
    if(event.target.value.trim() == ""){
        nameError.classList.add("active");
        nameError.textContent="Can't be blank";
        personNamePara.textContent = event.target.dataset.default;
    }
    else if(!(/^[a-zA-Z]+\s?[a-zA-Z]+$/.test(event.target.value))){
        nameError.classList.add("active");
        nameError.textContent="Please, Choose formal name";
    }
    else{
        personNamePara.textContent = event.target.value
        nameError.classList.remove("active");
        nameError.textContent=""
        nameValidate = true;
    }
})
// Number Input Logic
numberInput.addEventListener("blur",(event)=>{
    if(event.target.value.trim() == ""){
        numberError.classList.add("active");
        numberError.textContent="Can't be blank";
        cardNumberPara.textContent = event.target.dataset.default;
    }
    else if(event.target.value.split("").filter(el=>el!=" ").join("").length != 16){
        numberError.classList.add("active");
        numberError.textContent="Should be 16 number";
    }
    else if(!(/^\d+\s?$/.test(event.target.value.split("").filter(el=>el!=" ").join("")))){
        numberError.classList.add("active");
        numberError.textContent="Wrong format, numbers only";
    }
    else{
        let cardText = ""
        for(let i=0; i<=16; i+=4){
            cardText += event.target.value.split("").filter(el=>el!=" ").slice(i,i+4).join("") + " ";
        }
        numberError.classList.remove("active");
        cardNumberPara.textContent = cardText
        numberError.textContent=""
        numberValidate = true;
    }
})
// Month Input Logic
monthInput.addEventListener("blur",(event)=>{
    if(event.target.value.trim() == ""){
        dateError.classList.add("active");
        dateError.textContent="Can't be blank";
    }
    else if(parseInt(event.target.value) < 1 || parseInt(event.target.value) > 12 ){
        dateError.classList.add("active");
        dateError.textContent="Should be number of month";
    }
    else {
        personDatePara.textContent = `${(event.target.value).padStart(2,"0")}/${yearInput.value }`;
        dateError.classList.remove("active");
        dateError.textContent="";
        dateValidate = true;
    }
})

yearInput.addEventListener("blur",(event)=>{
    const date = new Date();
    
    if(event.target.value.trim() == ""){
        dateError.classList.add("active");
        dateError.textContent="Can't be blank";
        console.log(date.getFullYear())
    }
    else if(parseInt(event.target.value) < (date.getFullYear() - 2000) || parseInt(event.target.value) > (date.getFullYear() - 2000 + 5)  ){
        dateError.classList.add("active");
        dateError.textContent="Incorrect Year Format or range";
    }
    else {
        personDatePara.textContent = `${monthInput.value.padStart(2,"0") }/${event.target.value}`;
        dateError.classList.remove("active");
        dateValidate = true;    
    }
})

cvcInput.addEventListener("blur",(event)=>{
    if(event.target.value.trim() == ""){
        cvcError.classList.add("active");
        cvcError.textContent="Can't be blank";
        cvcPara.textContent = event.target.dataset.default;
    }
    else if(!(/^\d{3}$/.test(event.target.value.split("").filter(el=>el!=" ").join("")))){
        cvcError.classList.add("active");
        cvcError.textContent="Please Enter 3 Number";
    }
    else
    {
        cvcPara.textContent = event.target.value.split("").filter(el=>el!=" ").join("");
        cvcError.classList.remove("active");
        cvcValidate = true;
    }
})

// Btns logic
function btnsOnClick(Event){
    Event.preventDefault();
    frontForm.classList.toggle("none");
    validateForm.classList.toggle("none");
}
frontBtn.addEventListener("click",(event)=>{
    if(nameValidate && numberValidate && dateValidate && cvcValidate){
        btnsOnClick(event);
        console.log(nameValidate ,numberValidate , dateValidate, cvcValidate)
    }else{
        event.preventDefault()
        console.log(nameValidate ,numberValidate , dateValidate, cvcValidate)
    }
})
validateBtn.addEventListener("click",(event)=>{
    btnsOnClick(event);
})
