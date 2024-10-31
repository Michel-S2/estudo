//DADOS INICIAIS
let currentColor = 'black';
let screen = document.querySelector('#tela');
let contexto = screen.getContext('2d');
let canDraw = false
let mouseX = false;
let mouseY = false;



//EVENTOS DE CLIQUES
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', itemClicado)
})

screen.addEventListener('mousedown', mouseDown);
screen.addEventListener('mousemove', mouseMove);
screen.addEventListener('mouseup', mouseUp);





//FUNÇÕES
function itemClicado(e) {
    let corClicada = e.target.getAttribute('data-color');
    currentColor = corClicada;

    document.querySelector('.color.active').classList.remove('active');

    e.target.classList.add('active');
    console.log(`Clicou na cor: ${corClicada}`)
}

function mouseDown(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMove(e) {
    
    if(canDraw) {
        draw(e.pageX, e.pageY)
    }
}

function mouseUp() {
    canDraw = false;

}

function draw(x, y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    contexto.beginPath();
    contexto.lineWidth = 5;
    contexto.lineJoin = 'round';
    contexto.moveTo(mouseX, mouseY);
    contexto.lineTo(pointX, pointY);
    contexto.closePath();
    contexto.strokeStyle = currentColor;
    contexto.stroke();

    mouseX = pointX;
    mouseY = pointY;
}