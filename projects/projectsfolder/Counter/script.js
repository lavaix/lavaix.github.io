const decrease = document.getElementById("minusbutton");
const increase = document.getElementById("plusbutton");
const reset = document.getElementById("reset");
const counter = document.getElementById("displaytext");

let count = 0;

increase.onclick = function(){
    count++;
    counter.textContent = count;
}

decrease.onclick = function(){
    count--;
    counter.textContent = count;
}

reset.onclick = function(){
    count = 0;
    counter.textContent = count;
}