import { text, button } from '../index.js'
const conteudoPai = document.querySelector('.novoConteudo')

const verificaPalin = (palavra) => {

    let texto = text.value.split('')
    let possivelPalindromo = false
    palavra = palavra.reverse()

    for(let letra in palavra){
        palavra.splice(letra, 1)
        let palavraAgr = palavraAgrup(palavra)
        let palavraCtr = palavraContraria(palavra)
        if(palavraAgr.toLowerCase() === palavraCtr.toLowerCase()){
            possivelPalindromo = true
        }
        palavra = texto.map((element)=> element)
    }
    return possivelPalindromo
}

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

function criaElemento(elemento, conteudo, classe){
    const el = document.createElement(elemento)
    if(classe != '') el.setAttribute('class', classe)
    el.innerText = conteudo
    return el
}

function palindromo(text, conteudoPai){
    
    conteudoPai.innerText = ''

    if(text.value === '') return alert('Insira um texto no campo.')

    const palavra = text.value.split('')
    let palavraAgr = palavraAgrup(palavra)

    let palavraContr = palavraContraria(palavra)

    const palavrasIguais = criaElemento('p', 'É um palíndromo', '')
    
    const palavrasDiferentes = criaElemento('p', 'Não é um palíndromo', 'naoPalindromo')

    const possivelPalin = criaElemento('p', 'Possível palíndromo', 'possivelPalindromo')

    if(palavraAgr.toLowerCase() == palavraContr.toLowerCase()){
        conteudoPai.appendChild(palavrasIguais)
    }else if(verificaPalin(palavra)){
        conteudoPai.appendChild(possivelPalin)
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