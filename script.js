const btnNumber = document.querySelectorAll('[data-number]');
const btnOperator = document.querySelectorAll('[data-operator]');
const btnEquals = document.querySelector('[data-equals]');
const btnClear = document.querySelector('[data-clear]');
const txtPreviousOperand = document.querySelector('[data-previous_operand]');
const txtCurrentOperand = document.querySelector('[data-current_operand]');



class Calculator{
    constructor(txtPreviousOperand, txtCurrentOperand) {
        this.txtPreviousOperand = txtPreviousOperand;
        this.txtCurrentOperand = txtCurrentOperand;
        this.clear();
    }

    appendSum(number){
        this.currentOperand = number;
    }

    setOperator(operator){

    }

    calculate(){

    }

    updateDisplay(){
        this.txtCurrentOperand.innerText = this.currentOperand;
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operator = undefined;
    }
}

const calculator = new Calculator(txtCurrentOperand, txtPreviousOperand)

btnNumber.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendSum(button.innerText);
        calculator.updateDisplay;
        console.log("clicked");
    })
})
