let buttonNext = document.querySelector('.next');
let buttonPrev = document.querySelector('.prev');
let contador = 0
let itens = document.querySelectorAll('.area-item .item');
let totalItens = document.querySelectorAll('.area-item .item').length;
let proximo = 0;
let anterior = document.querySelectorAll('.area-item .item').length - 1;

buttonNext.addEventListener('click', next);
buttonPrev.addEventListener('click', prev)
buttonPrev.setAttribute('disabled', true)

console.log('CONTADOR:', contador)
console.log('PROXIMO:', proximo)

function next() {
    contador++
    console.log('CONTADOR:', contador)
    console.log('PROXIMO:', proximo)
    if(contador == (totalItens - 1)) {
        buttonNext.setAttribute('disabled', true);
    }
    
    if(contador <= (totalItens - 1)) {
        itens[proximo].classList.add('active');
        proximo++
        itens[proximo].classList.add('blue');
        buttonPrev.removeAttribute('disabled');
    }
    

}


function prev() {
    contador--
    console.log('CONTADOR:', contador)
    console.log('PROXIMO:', proximo)
    contador == 0 ? buttonPrev.setAttribute('disabled', true) : contador
    if(contador >= (totalItens - totalItens)) {
        buttonNext.removeAttribute('disabled')
        itens[proximo].classList.remove('blue');
        proximo--
        itens[proximo].classList.remove('active');
        
        
    }
}


