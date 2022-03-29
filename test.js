var css = document.querySelector("h3")
var helo = document.getElementById("helo")
var hello = document.getElementById("hello")
var body = document.getElementById("gradient")

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + helo.value
    + ", "
    + hello.value
    + ")";
    css.textContent = body.style.background + ";";
}

css.textContent = body.style.background + ";";

// helo.addEventListener("input", setGradient);
// hello.addEventListener("input", setGradient);
 

