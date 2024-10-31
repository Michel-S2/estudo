//DADOS INICIAIS (VARIAVEIS)
let jogo =  {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};

let jogador = '';
let mensagemAviso = '';
let gameStart = false;

resetar();

//EVENTOS DE CLIQUES
document.querySelector('.reset').addEventListener('click', resetar);

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClicado);
})





//FUNÇÕES
function resetar() {
    mensagemAviso = '';

    let numeroAleatorio = Math.floor(Math.random() *2);
    jogador = (numeroAleatorio === 1) ? 'x' : 'o';

    for(let posicao in jogo) {
        jogo[posicao] = '';
    };

    gameStart = true;

    renderizarJogo();
    renderizarInfo();
}


function renderizarJogo() {
    for(let posicao in jogo) {
        let item = document.querySelector(`div [data-item=${posicao}]`);
        item.innerHTML = jogo[posicao];
    }

    verificarJogo()
};


function renderizarInfo() {
    document.querySelector('.vez').innerHTML = jogador;
    document.querySelector('.resultado').innerHTML = mensagemAviso;
};


function itemClicado(event) {
    let item = event.target.getAttribute(`data-item`)
    console.log(`clicou no ${item}`)
    if(gameStart && jogo[item] === '') {
        jogo[item] = jogador;
        renderizarJogo();
        trocarJogador();
    }
}

function trocarJogador() {
    jogador = (jogador === 'x') ? 'o' : 'x';
    renderizarInfo()
}

function verificarJogo() {
    if(ganhadorFoi('x')) {
        mensagemAviso = '"x" foi o ganhador!!';
        gameStart = false;
    } else if(ganhadorFoi('o')) {
        mensagemAviso = '"o" foi o ganhador!!!';
        gameStart = false;
    } else if(tudoPreenchido()) {
        mensagemAviso = 'Empate!! Vcs são mt ruim...';
        gameStart = false
    }
}

function ganhadorFoi(jogador) {
    let possibilidades = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a3,b2,c1',
        'a1,b2,c3'
    ];

    for(let i in possibilidades) {
        let possibilidadesArray = possibilidades[i].split(',');
        let ganhou = possibilidadesArray.every((opcao) => {
            if (jogo[opcao] === jogador) {
                return true;
            } else {
                return false;
            }
        });

        if(ganhou) {
            return true;
        }
    }

    return false;
}


function tudoPreenchido() {
    for(let i in jogo) {
        if(jogo[i] === '') {
            return false;
        }
    }

    return true;
}