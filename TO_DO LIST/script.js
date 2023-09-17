let to_do = document.querySelector("#to_do")
let submit = document.querySelector("#submit")
let form = document.querySelector("form")
let main = document.querySelector(".main")
get();
lt();
cancel();

form.addEventListener("submit", function (event) {

    event.preventDefault();


    let create = document.createElement("p")
    create.classList.add("text")

    create.innerText = to_do.value;

    main.append(create)

    to_do.value = "";
    save();
   
})



function save() {
    localStorage.setItem("to_do", main.innerHTML)
}

function get() {
    main.innerHTML = localStorage.getItem("to_do")
}

function lt() {
    let para = document.querySelectorAll("p")
    for (let u = 0; u < para.length; u++) {
        para[u].addEventListener("click", function () {
            para[u].classList.toggle("lt")
            save();
        })
    
    }
}

function cancel() {
    let para = document.querySelectorAll(".text")
    for (let u = 0; u < para.length; u++) {
        para[u].addEventListener("dblclick", function () {
         this.remove();    
   
        })
    
    }
}
