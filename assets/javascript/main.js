// Declaring Array to store the elements
const inputArray = [];
const errorMessageArray = [];

const name = document.getElementById('name');
inputArray.push(name);
const errorMessageName = document.createElement("p");
errorMessageArray.push(errorMessageName);
const parentNodeName = name.parentNode;
parentNodeName.appendChild(errorMessageName);


const number = document.getElementById('number');
inputArray.push(number);
const errorMessageNumber = document.createElement("p");
errorMessageArray.push(errorMessageNumber);
const parentNodeNumber = number.parentNode;
parentNodeNumber.appendChild(errorMessageNumber);


const expireMonth = document.getElementById('expire_month');
inputArray.push(expireMonth);
const errorMessageExpireMonth = document.createElement("p");
errorMessageArray.push(errorMessageExpireMonth);
const parentNodeExpireMonth = expireMonth.parentNode;
parentNodeExpireMonth.appendChild(errorMessageExpireMonth);

const expireYear = document.getElementById('expire_year');
inputArray.push(expireYear);
const errorMessageExpireYear = document.createElement("p");
errorMessageArray.push(errorMessageExpireYear);
const parentNodeExpireYear = expireYear.parentNode;
parentNodeExpireYear.appendChild(errorMessageExpireYear);


const cvc = document.getElementById('cvc');
inputArray.push(cvc);
const errorMessageCvc = document.createElement("p");
errorMessageArray.push(errorMessageCvc);
const parentNodeCvc = cvc.parentNode;
parentNodeCvc.appendChild(errorMessageCvc);

//Function Checking 
function checkName(name) {
    const regexName = /[a-zA-z ]{1,21}/;
    const matchVar = name.match(regexName);
    // console.log(matchVar);
    if(matchVar[0] === name) {
        return true;
    }
    return false;
}

function checkNumber(number) {
    const regexNumber = /[0-9]{15,16}/;
    const matchVar = number.match(regexNumber);
    // console.log(matchVar);
    if(matchVar !== null) {
        if(matchVar[0] == number) {
            return true;
        }
    }
    return false;
}

function checkMonth(month) {
    console.log(Math.floor(month));
    if(Math.floor(month) > 12 || Math.floor(month) < 1) {
        return false;
    }
    return true;
}

function checkYear(year) {
    const regexYear = /\d{2}/;
    const matchVar = year.match(regexYear);
    // console.log(matchVar);
    if(matchVar !== null) {
        if(matchVar[0] === year) {
            return true;
        }
    }
    return false;
}

function checkCvc(cvc) {
    const regexCvc = /\d{3,4}/;
    const matchVar = cvc.match(regexCvc);
    // console.log(matchVar);
    if(matchVar !== null) {
        if(matchVar[0] === cvc) {
            return true;
        }
    }
    return false;
}

//Validating data
function validateData(){
    function createErrorMessage(inputElement, errorMessage){
        const loopAction = () => {
            inputElement.style.border = "2px solid red";
            errorMessage.style.marginBottom = "16px";
        }
        const changeBack = () => {
            inputElement.style.border = "1px solid black";
            errorMessage.innerHTML = '';
            errorMessage.style.marginBottom = "0px";
        }
        if(inputElement.value === ""){
            loopAction();
            errorMessage.innerHTML = "*Information required*";
        }else if(inputElement === name){
            if(checkName(inputElement.value) === false){
                loopAction();
                errorMessage.innerHTML = "*Invalid Name*";
            }else{
                changeBack();
            }
        }else if(inputElement === number){
            if(checkNumber(inputElement.value) === false){
                loopAction();
                errorMessage.innerHTML = "*Invalid Number*";
            }else{
                changeBack();
            }
        }else if(inputElement === expireMonth){
            if(checkMonth(inputElement.value) === false){
                loopAction();
                errorMessage.innerHTML = "*Invalid Months*";
            }else{
                changeBack();
            }
        }else if(inputElement === expireYear){
            if(checkYear(inputElement.value) === false){
                loopAction();
                errorMessage.innerHTML = "*Invalid Year*";
            }else{
                changeBack();
            }
        }else if(inputElement === cvc){
            if(checkCvc(inputElement.value) === false){
                loopAction();
                errorMessage.innerHTML = "*Invalid CVC*";
            }else{
                changeBack();
            }
        }
        else{
            changeBack();
        }
    }
    
    
    for(let i = 0; i < inputArray.length; i++) { 
        errorMessageArray[i].style.color = "red";
        errorMessageArray[i].style.fontSize = "16px";
        createErrorMessage(inputArray[i], errorMessageArray[i]);
    }
}


function init() {
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', validateData);
}

window.onload = init;