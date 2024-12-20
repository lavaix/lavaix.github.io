let age;

document.getElementById("buttonid").onclick = function(){
    age = parseFloat(document.getElementById("ageid").value);
    if(age >= 18){
        document.getElementById("resultid").textContent = "You are eligible to vote!";
    }
    else{
        document.getElementById("resultid").textContent = "You are NOT eligible to vote.";
    }
}