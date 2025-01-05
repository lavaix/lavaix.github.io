const number = Math.floor((Math.random()*100)+1);
const attemptcount = document.getElementById("attemptcount");
const buttonid = document.getElementById("buttonid");
const inputid = document.getElementById("inputid");
const resultid = document.getElementById("resultid");
let usernumber;
let attempts = 0;

buttonid.onclick = function(){
    usernumber = Number(inputid.value);
    if(usernumber < 1 || usernumber > 100){
        resultid.textContent = "Please enter a valid number"
    }
    else{
        attempts++;
        attemptcount.textContent = attempts;
        if(usernumber < number){
            resultid.textContent = "Too low!"
        }
        else if(usernumber > number){
            resultid.textContent = "Too high"
        }
        else{
            resultid.textContent = `You guessed the number!. It's ${number}`
        }
    }
}