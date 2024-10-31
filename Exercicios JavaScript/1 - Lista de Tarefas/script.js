// ?

function clicou() {
    const body = document.querySelector('body');
    const botao = document.querySelector('.botao');


    if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'light')
        botao.innerHTML = 'Modo Escuro';
    } else {
        body.classList.replace('light', 'dark')
        botao.innerHTML = 'Modo Claro';

    }
    
}


const input = document.querySelector('input');
input.addEventListener('keyup', enter)

const ul = document.querySelector('ul');

function enter(e) {
    const li = document.createElement('li');
    li.innerHTML = input.value;

    if (e.key == 'Enter' && input.value == '') {
        console.log('apertou')

    } else if (e.key == 'Enter'){
        ul.appendChild(li);
        input.value = '';
    }
}

