const email = document.querySelector("input");

email.addEventListener("blur",(event)=>{
    let value = event.target.value

    if(!/\w+@\w+\.(com|net)/ig.test(value)){
        event.target.classList.add("error");
        event.target.nextElementSibling.classList.add("error");
    }else{
        event.target.classList.remove("error");
        event.target.nextElementSibling.classList.remove("error");
    }
})