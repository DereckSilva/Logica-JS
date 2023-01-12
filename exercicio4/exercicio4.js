import { text, button, verificaInput } from '../index.js'
const conteudoPai = document.querySelector('.novoConteudo')

function criaElemento(elemento, conteudo){
    const p = document.createElement(elemento)
    p.innerText = conteudo

    return p
}

function listandoNum(text, conteudoPai){

    conteudoPai.innerText = ''

    if(text.value <= 0) return alert('O número precisa ser maior do que 0')

    for(let i = 1; i <= text.value; i++){
        if(i % 3 == 0 && i % 5 == 0) {
            const p = criaElemento('p', 'Hello World')
            conteudoPai.appendChild(p)
        }else if(i % 5 == 0){
            const p = criaElemento('p', 'World')
            conteudoPai.appendChild(p)
        }else if (i % 3 == 0) {
            const p = criaElemento('p', 'Hello')
            conteudoPai.appendChild(p)
        }else{
            const p = criaElemento('p', i)
            conteudoPai.appendChild(p)
        }
    }
}

button.addEventListener('click', function(){
    listandoNum(text, conteudoPai)
})

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter') return listandoNum(text, conteudoPai)
})