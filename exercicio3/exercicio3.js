import { text, button, paragrafo } from '../index.js'

function retornaSoma(text, paragrafo){
    paragrafo.innerText = ''

    if(text.value === '') return alert('Insira um texto no campo.')
    if(Number(text.value) <= 0 && text.value != '') return alert('Digite valores maiores do que 0')
    if(!Number(text.value) && text.value != '') return alert('É preciso digitar um número.')
    
    const valores = text.value.split('')
    const soma = valores.reduce((acc, value) => Number(acc) + Number(value))
    
    paragrafo.innerText = soma
}

button.addEventListener('click', function(){
    retornaSoma(text, paragrafo)
})

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter') retornaSoma(text, paragrafo)
})