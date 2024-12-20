const buttonid = document.getElementById("buttonid");
const visainputid = document.getElementById("visainputid");
const mcinputid = document.getElementById("mcinputid");
const resulthead = document.getElementById("resulthead");

buttonid.onclick = function(){
    if(visainputid.checked){
        resulthead.textContent = "You have subscribed to VISA"
    }
    else if(mcinputid.checked){
        resulthead.textContent = "You have subscribed to MasterCard"
    }
    else {
        resulthead.textContent = "Please select a payment method"
    }

}