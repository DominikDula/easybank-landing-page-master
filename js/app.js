

let ham = document.querySelector(".ham");
let closed = document.querySelector(".close");
let navigation = document.querySelector(".navigation");


function isActive(){
    navigation.classList.add("active");
    ham.style= "display:none;";
    closed.style = "display:block;";
 
   
}

function nonActive(){
    navigation.classList.remove("active");
    ham.style= "display:block;";
    closed.style = "display:none;";

   
}

ham.addEventListener("click",isActive);
closed.addEventListener("click",nonActive);







