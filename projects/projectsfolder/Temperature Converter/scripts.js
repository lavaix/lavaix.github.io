const tempinputid = document.getElementById("tempinputid");
const ctofradio = document.getElementById("ctofradio");
const ftocradio = document.getElementById("ftocradio");
const buttonid = document.getElementById("buttonid");
const temptype = document.getElementById("temptype");
const tempresult = document.getElementById("tempresult");

buttonid.onclick = function(){
    if(ctofradio.checked){
        temptype.textContent = "(F°)";
        tempresult.textContent = Number((((tempinputid.value * 9) / 5) + 32).toFixed(1));
    }
    else if(ftocradio.checked){
        temptype.textContent = "(C°)";
        tempresult.textContent = Number(((tempinputid.value - 32) * 5 / 9).toFixed(1));
    }
    else {
        alert("Please select a valid conversion type.")
    }
}