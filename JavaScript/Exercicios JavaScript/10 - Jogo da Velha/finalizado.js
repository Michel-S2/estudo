//DADOS INICIAIS

let jogo = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};

let jogadorDaVez = '';

let aviso = '';

let jogoStart = false;
resetar();

//EVENTOS DE CLIQUE

document.querySelector('.reset').addEventListener('click', resetar);
document.querySelector('div[data-item=a1]').addEventListener('click', itemClicado);
document.querySelector('div[data-item=a2]').addEventListener('click', itemClicado);
document.querySelector('div[data-item=a3]').addEventListener('click', itemClicado);
document.querySelector('div[data-item=b1]').addEventListener('click', itemClicado);
document.querySelector('div[data-item=b2]').addEventListener('click', itemClicado);
document.querySelector('div[data-item=b3]').addEventListener('click', itemClicado);
document.querySelector('div[data-item=c1]').addEventListener('click', itemClicado);
document.querySelector('div[data-item=c2]').addEventListener('click', itemClicado);
document.querySelector('div[data-item=c3]').addEventListener('click', itemClicado);


//FUNÇÕES

function resetar() {
    aviso = '';

    let random = Math.floor(Math.random() * 2);
    jogadorDaVez = (random === 0) ? 'x' : 'o';

    for(let i in jogo) {
        jogo[i] = '';
    }

    jogoStart = true;

    renderInfo();
    renderJogo();
}


function renderJogo() {
    for(let i in jogo) {
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = jogo[i];
    }

    checarGanhador();
};

function renderInfo() {
    document.querySelector('.vez').innerHTML = jogadorDaVez;
    document.querySelector('.resultado').innerHTML = aviso;
};

function itemClicado(event) {
    let item = event.target.getAttribute('data-item');
    if(jogoStart && jogo[item] == '') {
        jogo[item] = jogadorDaVez;
        renderJogo();
        togglePlayer();
    }
    console.log(item);
}

function togglePlayer() {
    jogadorDaVez = (jogadorDaVez === 'x') ? 'o' : 'x';
    renderInfo();
}

function checarGanhador() {
    if(checkWinnerFor('x')) {
        aviso = 'O "X" ganhou!';
        jogoStart = false;
    } else if(checkWinnerFor('o')) {
        aviso = 'O "o" ganhou!';
        jogoStart = false;
    } else if(isFull()) {
        aviso = 'Deu empate!'
        jogoStart = false;
    }
}


function checkWinnerFor(player) {
    let possibilidades = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'
    ];

    for(i in possibilidades) {
        let posArray = possibilidades[i].split(',')
        let venceu = posArray.every(option => jogo[option] === player);

        if(venceu) {
            return true;
        }
    }

    return false;
}

function isFull() {
    for(let i in jogo) {
        if(jogo[i] === '') {
            return false;
        }
    }
    return true;
}