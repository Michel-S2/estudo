let buttonNao = document.querySelector('.nao button');
let divNao = document.querySelector('.nao');
let buttonSim = document.querySelector('.sim button');
let divSim = document.querySelector('.sim');
let containerPai = document.querySelector('.pai');
let h2 = document.querySelector('h2');
let h1 = document.querySelector('h1');


function passouNao() {
    clicouNao();
}

function clicouNao() {
    let top = Math.floor((Math.random() * 550));
    let right = Math.floor((Math.random() * 290));
    buttonNao.classList.add ('position-absolute');
    buttonNao.style.top = `${top}px`;
    buttonNao.style.right = `${right}px`;
}



function clicouSim() {
    containerPai.classList.add('clicou-pai');
    divSim.classList.add('display-none');
    divNao.classList.add('display-none');
    h2.classList.remove('display-none');
    h1.classList.add('display-none');
}