// select components
const inputs = document.querySelectorAll("input:not(#mail)");
const mail = document.querySelector("#mail");

inputs.forEach(el => el.addEventListener('blur',()=>{
    if(!(/\w+/.test(el.value))){
        el.classList.add('error')
        el.nextElementSibling.classList.add('active')
    }else{
        el.nextElementSibling.classList.remove('active')
        el.classList.remove('error')
    }
}));

mail.addEventListener('blur',()=>{
    if((/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(mail.value)) ){
        mail.classList.remove('error')
        mail.nextElementSibling.classList.remove('active')
    }else{
        mail.classList.add('error')
        mail.nextElementSibling.classList.add('active')
    }
})

