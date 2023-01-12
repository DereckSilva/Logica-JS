import { text, button, verificaInput } from '../index.js'
const conteudoPai = document.querySelector('.novoConteudo')

function palavraAgrup(palavra){
    let palavras = palavra.filter((letra) => letra != ' ')
    let newPalavra = palavras.join('')
    return newPalavra
}

function palavraContraria(palavra){
    let palavras = palavra.filter((letra) => letra != ' ')
    let palavraContr = palavras.reverse().join('')

    return palavraContr
}

function palindromo(text, conteudoPai){
    
    conteudoPai.innerText = ''
    const palavra = text.value.split('')
    let palavraAgr = palavraAgrup(palavra)

    let palavraContr = palavraContraria(palavra)

    const palavrasIguais = document.createElement('p')
    palavrasIguais.innerText = 'É um palíndromo'

    const palavrasDiferentes = document.createElement('p')
    palavrasDiferentes.setAttribute('class', 'naoPalindromo')
    palavrasDiferentes.innerText = 'Não é um palíndromo'
    
    if(palavraAgr.toLowerCase() === palavraContr.toLowerCase()){
        conteudoPai.appendChild(palavrasIguais)
    }else{
        conteudoPai.appendChild(palavrasDiferentes)
    }
}

button.addEventListener('click', function(){
    palindromo(text, conteudoPai)
})

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter') return palindromo(text, conteudoPai)
})