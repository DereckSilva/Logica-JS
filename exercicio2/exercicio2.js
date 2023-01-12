import { text, button, paragrafo } from '../index.js'

function retornaMaiorPalavra(text, paragrafo){

    paragrafo.innerText = ''

    if(text.value === '') return alert('Insira um texto no campo.')

    const palavras = text.value.split(' ')
    const valores = palavras.map((palavra) => palavra.length)

    const maiorValor = valores.map(Number).reduce((number1, number2) => Math.max(number1, number2))

    const maiorPalavra = palavras.filter((palavra) => {
        if (palavra.length === maiorValor) return palavra
    })

    paragrafo.innerText = maiorPalavra[0]
}

button.addEventListener('click', function(){
    retornaMaiorPalavra(text, paragrafo)
})

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter') retornaMaiorPalavra(text, paragrafo)
})