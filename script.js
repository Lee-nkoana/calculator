let num1 = 0;
let num2 = 0;
const operator = "";
let displayValue = "";

function add(x,y){
    return x + y
}

function subtract(x,y){
    return x - y
}

function divide(x,y){
    return x / y
}

function multiply(x,y){
    return x * y
}


function operate(num1,operator,num2){
    if(operator == "+"){
        return add(num1,num2);
    }
    else if (operator == "-"){
        return subtract(num1,num2);
    }
    else if (operator == "*"){
        return multiply(num1,num2);
    }
    else if (operator == "/"){
        return divide(num1,num2);
    }
    else{
        return "Invalid operator";
    }

}

const result = operate(num1, operator, num2);
console.log(`${num1} ${operator} ${num2} = ${result}`);

function updateDisplay(){
    document.getElementById("display").value = displayValue;
}

function appendSum(number){
    displayValue += number;
    updateDisplay();
}

function setOperator(operator){
    displayValue += operator;
    updateDisplay();
}

//calculate the value of the user has typed in
function calculate(){
    let sum = document.getElementById("display").value;
    try {
        displayValue = Function("return " + sum)();
        console.log(result);
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

function clearDisplay(){
    displayValue = "";
    updateDisplay();
}
