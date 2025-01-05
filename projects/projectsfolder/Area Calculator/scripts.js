let base;
let height;
let area;

document.getElementById("buttonid").onclick = function(){
    base = parseFloat(document.getElementById("baseinputid").value);
    height = parseFloat(document.getElementById("heightinputid").value);
    area = (base * height)/2;
    document.getElementById("resultheading").textContent = `Area = ${area}`;
}