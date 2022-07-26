var numero1 = 0
var numero2 = 0
var simbolo = ''
var result = 0

function zerar(){
    numero1 = 0
    numero2 = 0
    simbolo = ''
    result = 0
}

function btn_click(numero){
    var input = document.getElementById('input')
    input.value += numero
}

function limpar_tudo(){
    document.getElementById('input').value = ''
    zerar()
}

function operacao(botao){
    var input = document.getElementById('input')
    numero1 = parseFloat(input.value, 10) 
    simbolo = botao
    input.value = ''
}

function printar_resultado(){
    var input = document.getElementById('input')
    numero2 = parseFloat(input.value, 10) 

    switch(simbolo){
        case '+':
            result = numero1 + numero2
        break

        case '-':
            result = numero1 - numero2
        break

        case '*':
            result = numero1 * numero2
        break

        case '/':
            result = numero1 / numero2
        break
    }

    input.value = result

    
}
