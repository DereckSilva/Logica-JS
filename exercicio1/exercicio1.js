import { text, button, paragrafo } from '../index.js'

function removeVogais(text, paragrafo){
    paragrafo.innerText = ''

    if(text.value === '') return alert('Insira um texto no campo.')
    const vogais = 'aeiou'

    const palavra = text.value.split('')
    const nova_palavra = palavra.filter((letra) => {
        if(!vogais.includes(letra)) return letra
    })

    for(let letra of nova_palavra){
        paragrafo.innerText += letra
    }
}

button.addEventListener('click', function(){
    removeVogais(text,paragrafo)
})

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter') removeVogais(text, paragrafo)
})