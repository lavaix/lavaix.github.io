
const upperCaseCheck = document.getElementById("upperCaseCheck");
const lowerCaseCheck = document.getElementById("lowerCaseCheck");
const numbersCheck = document.getElementById("numbersCheck");
const symbolsCheck = document.getElementById("symbolsCheck");
const generateButton = document.getElementById("generateButton");
const resultId = document.getElementById("resultId");

const upperCaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseCharset = "abcdefghijklmnopqrstuvwxyz";
const numbersCharset = "0123456789";
const symbolsCharset = "!@#$%^&*_+-=?|";

function generatePassword() {
    let allowedCharset = "";
    let password = "";
    const passwordLength = "12";

    if(upperCaseCheck.checked){allowedCharset += upperCaseCharset};
    if(lowerCaseCheck.checked){allowedCharset += lowerCaseCharset};
    if(numbersCheck.checked){allowedCharset += numbersCharset};
    if(symbolsCheck.checked){allowedCharset += symbolsCharset};

    if(allowedCharset === ""){
        alert("Please select an option to continue!");
        return;
    }

    for(let i = 0; i < 12; i++){
        const randomIndex = Math.floor(Math.random()*allowedCharset.length);
        password += allowedCharset[randomIndex];
    }

    resultId.textContent = password;
}

generateButton.onclick = generatePassword;