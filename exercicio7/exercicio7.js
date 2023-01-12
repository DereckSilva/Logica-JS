import { paragrafo, button } from '../index.js'

const primeiroNumero = document.getElementById('primeiro')
const segundoNumero = document.getElementById('segundo')

function retornaSoma(num1, num2, paragrafo){

    paragrafo.innerText = ''
    
    if(num1 == '' || num2 == '' ) return alert('É necessário inserir um valor nos campos.')
    
    if(!Number(num1) || !Number(num2)) return alert('Necessário inserir valores numéricos')
    
    num1 = Number(num1)
    num2 = Number(num2)

    if(num2 < num1){
        paragrafo.innerText = 0
    }else if(num1 === num2){
        paragrafo.innerText = num1
    }else{
        let soma = 0
        for(let i = num1; i <= num2; i++){
            soma += i
        }
        paragrafo.innerText = soma
    }
}

button.addEventListener('click', function(){
    retornaSoma(primeiroNumero.value, segundoNumero.value, paragrafo)
})

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter') retornaSoma(primeiroNumero.value, segundoNumero.value, paragrafo)
})