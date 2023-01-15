var number1 = 0
var number2 = 0
var result = 0
var operation = ''
const input = document.getElementById('input')
const calculation = document.getElementById('calculation')

function addSymbol(number){
    input.value += number
}

function addOperation(botao){
    number1 = parseFloat(input.value, 10) 
    input.value = ''
    operation = botao
    calculation.innerText = `${number1} ${operation}`
    calculation.style.visibility = 'visible'
}

function printResult(){
    number2 = parseFloat(input.value, 10)  
    calculation.innerText = `${number1} ${operation} ${number2} = `
    input.value = calc() 
}

function calc(){
    switch(operation){
        case '+':
            result = number1 + number2
        break

        case '-':
            result = number1 - number2
        break

        case 'x':
            result = number1 * number2
        break

        case '/':
            if(number == 0){
                calculation.innerText = 'ERRO - voce digitou 0 como divisor'
            }
            else{
                result = number1 / number2
            }  
        break
    }
    return result
}

function clean(){
    input.value = ''
    calculation.style.visibility = 'hidden'
    number1 = 0 
    number2 = 0
    result = 0
    operation = ''
}

function cleanEntry(){
    input.value = ''
}

