var numero1 = 0, numero2 = 0, result = 0
var simbolo = ''

function zerar(){
    numero1 = 0, numero2 = 0, result = 0
    simbolo = ''
}

function numeros(numero){
    document.getElementById('input').value += numero
}

function limpar(){
    document.getElementById('input').value = ''
}

function limpar_tudo(){
    document.getElementById('input').value = ''
    document.getElementById('texto').style.visibility = 'hidden'
    zerar()
}

function operacao(botao){
    var input = document.getElementById('input')
    numero1 = parseFloat(input.value, 10) 
    input.value = ''
    simbolo = botao
    var texto = document.getElementById('texto')
    texto.innerText = `${numero1} ${simbolo}`
    texto.style.visibility = 'visible'
}

function printar_resultado(){
    var input = document.getElementById('input')
    numero2 = parseFloat(input.value, 10) 
    var texto = document.getElementById('texto')
    texto.innerText = `${numero1} ${simbolo} ${numero2} = `

    switch(simbolo){
        case '+':
            result = numero1 + numero2
        break

        case '-':
            result = numero1 - numero2
        break

        case 'x':
            result = numero1 * numero2
        break

        case '/':
            if(numero2 == 0){
                texto.innerText = 'ERRO - voce digitou 0 como divisor'
            }
            else{
                result = numero1 / numero2
            }  
        break
    }

    input.value = result 
    result = 0
}