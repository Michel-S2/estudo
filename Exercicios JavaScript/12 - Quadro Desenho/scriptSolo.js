            //DADOS INICIAIS
//VARIAVEL PARA PEGAR O ELEMENTO CANVA NO HTML
let tela = document.querySelector('#tela');

//VARIAVEL QUE FICARÁ RESPONSAVEL PELA CONFIGURAÇÃO DO NOSSO DESENHO
let contexto = tela.getContext('2d');

//VARIÁVEL QUE DEIXARÁ A GENTE DESENHAR OU NÃO
let desenhoStart = false;

//VARIAVEL PELA COR ATUA DO PINCEL
let corAtual = 'blck';

//VARIAVEL PARA PEGAR A POSIÇÃO DO MOUSE X
let mouseX = 0;

//VARIAVEL PARA PEGAR A POSIÇÃO DO MOUSE Y
let mouseY = 0;


//-----------------------------------------------------EVENTOS DE CLIQUE------------------------------------------------------------------------------------------


//EVENTO DE CLIQUE EM TODOS OS ELEMENTOS 
document.querySelectorAll('.colorArea .color').forEach(elementos => {
    elementos.addEventListener('click', elementosClicados);
})

document.querySelector('.clear').addEventListener('click', limparTela);

//EVENTO DE APERTAR NO MOUSE NO ELEMENTO CANVA DO HTML
tela.addEventListener('mousedown', mouseDown);

//EVENTO DE MOVER O MOUSE NO ELEMENTO CANVA DO HTML
tela.addEventListener('mousemove', mouseMove);

//EVENTO DE SOLTAR O BOTÃO DO MOUSE NO ELEMENTO CANVA DO HTML
tela.addEventListener('mouseup', mouseUp);


//--------------------------------------------------------FUNÇÕES------------------------------------------------------------------------------------------------------


//FUNÇÃO RESPONSAVEL PELO CLIQUE NOS ELEMENTOS COM A CLASSE COLOR
function elementosClicados(eventoClique) {

//VARIAVEL QUE RECEBERÁ A PROPRIEDADE (DATA-COLOR) DO HTML COM AS CORES QUE O USUARIO CLICOU
    corClicada = eventoClique.target.getAttribute('data-color');

//COR ATUAL RECEBERÁ A COR QUE O USUÁRIO CLICOU NO HTML
    corAtual = corClicada;

//REMOVEMOS A CLASSE ACTIVE DO ELEMENTO QUE TEM A CLASSE (COLOR) E (ACTIVE)
    document.querySelector('.color.active').classList.remove('active');

//ADICIONAMOS UMA CLASSE (ACTIVE) NO ELEMENTO QUE O USUARIO CLICOU
    eventoClique.target.classList.add('active');
}


//FUNÇÃO DE CLICAR NO MOUSE
function mouseDown(evento) {

//QUANDO CLICAMOS NO MOUSE PARA DESENHAR ATIVA A VARIAVEL QUE NOS PERMITE DESENHAR
    desenhoStart = true;

//PEGAMOS A VARIÁVEL PARA CAPTURAR O MOUSE X
    mouseX = evento.pageX - tela.offsetLeft;

//PEGAMOS A VARIÁVEL PARA CAPTURAR O MOUSE Y
    mouseY = evento.pageY - tela.offsetTop;

}


//FUNÇÃO DE MOVER O MOUSE
function mouseMove(eventoMover) {

//SE O DESENHO START FOR TRUE ENTRARÁ NESSE LAÇO
    if(desenhoStart) {

//FUNÇÃO PARA REALIZAR O DESENHO COM OS PARAMETRO PAGEX E PAGEY EM RELAÇÃO A PAGINA
        desenhar(eventoMover.pageX, eventoMover.pageY);
    }

}


//FUNÇÃO DE SOLTAR O BOTÃO DO MOUSE
function mouseUp() {

//VARIAVEL DESENHO START PARARÁ O DESENHO
    desenhoStart = false;
}


//FUNÇÃO PARA REALIZAR O DESENHO
function desenhar(x, y) {

//VARIAVEL PARA SABER O PONTO X DA PAGINA EM RELAÇÃO A DIV DO HTML
    let pointX = x - tela.offsetLeft;

//VARIAVEL PARA SABER O PONTO Y DA PAGINA EM RELAÇÃO A DIV DO HTML
    let pointY = y - tela.offsetTop;


//COMANDOS PARA COMEÇAR A DESENHAR A LINHA
    contexto.beginPath()

//GROSSURA DA LINHA
    contexto.lineWidth = 5;

//FORMATO DA LINHA, FARÁ A LINHA COM BORDAS ARREDONDADAS
    contexto.lineJoin = 'round';

//MOVER O CURSOR
    contexto.moveTo(mouseX, mouseY);

//MOVA A LINHA 
    contexto.lineTo(pointX, pointY);

//FINALIZAMOS NOSSA LINHA
    contexto.closePath();

//COLORIMOS NOSSA COR DA LINHA
    contexto.strokeStyle = corAtual;

//FINALIZAMOS
    contexto.stroke()


//SERVIRÁ PARA SEMPRE SABER A POSIÇÃO ANTERIOR DO MOUSE, ASSIM FARÁ UM DESENHO CONTINUO
    mouseX = pointX;
    mouseY = pointY;
}

function limparTela() {
    contexto.setTransform(1, 0, 0, 1, 0, 0);
    contexto.clearRect(0, 0, contexto.canvas.width, contexto.canvas.height )
}