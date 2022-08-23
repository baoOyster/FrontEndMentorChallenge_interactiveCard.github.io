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
const expireYear = document.getElementById('expire_year');
inputArray.push(expireYear);
const errorMessageExpire = document.createElement("p");
errorMessageArray.push(errorMessageExpire);
errorMessageArray.push(errorMessageExpire);
const parentNodeExpire = expireYear.parentNode;
parentNodeExpire.appendChild(errorMessageExpire);


const cvc = document.getElementById('cvc');
inputArray.push(cvc);
const errorMessageCvc = document.createElement("p");
errorMessageArray.push(errorMessageCvc);
const parentNodeCvc = cvc.parentNode;
parentNodeCvc.appendChild(errorMessageCvc);

function validateData(){
    function createErrorMessage(inputElement, errorMessage){
        const loopAction = () => {
            inputElement.style.border = "2px solid red";
            errorMessage.style.marginBottom = "16px";
        }
        if(inputElement.value === ""){
            loopAction();
            errorMessage.innerHTML = "*Information required*";
        }else if(inputElement === name){
            if(inputElement.value !== /[a-zA-z ]{1,21}/){
                loopAction();
                errorMessage.innerHTML = "*Name must contain only maximum 21 words*";
            }
        }else if(inputElement === number){
            if(inputElement.value !== /[\d]{15,16}/){
                loopAction();
                errorMessage.innerHTML = "*Number must contain only 15 to 16 numbers*";
            }   
        }else if(inputElement === expireMonth){
            if(inputElement.value > 12 || inputElement < 1){
                loopAction();
                errorMessage.innerHTML = "*Invalid months*";
            }
        }else if(inputElement === expireYear){
            if(inputElement.value !== /2\d{3}/){
                loopAction();
                errorMessage.innerHTML = "*Invalid years*";
            }
        }else if(inputElement === cvc){
            if(inputElement.value !== /\d{3,4}/){
                loopAction();
                errorMessage.innerMessage = "*Invalid cvc*";
            }
        }else{
            inputElement.style.border = "1px solid black";
            errorMessage.innerHTML = '';
            errorMessage.style.marginBottom = "0px";
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