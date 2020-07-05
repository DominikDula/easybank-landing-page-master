

let ham = document.querySelector(".ham");
let closed = document.querySelector(".close");
let navigation = document.querySelector(".navigation");
console.log(ham,closed,navigation);


function isActive(){
    navigation.classList.add("active");
    ham.style= "display:none;";
    closed.style = "display:block;";
    document.body.classList.add("bactive");
    document.body.classList.remove("bclose");
   
}

function nonActive(){
    navigation.classList.remove("active");
    ham.style= "display:block;";
    closed.style = "display:none;";
    document.body.classList.remove("bactive");
    document.body.classList.add("bclose");
   
}

ham.addEventListener("click",isActive);
closed.addEventListener("click",nonActive);







