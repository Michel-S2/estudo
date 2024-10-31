const grid = document.querySelector('.grid');
let spanPlayer = document.querySelector('.player');
let spanTimer = document.querySelector('.timer');

const characters = [
    'beth',
    'jerry',
    'jessica',
    'meeseeks',
    'morty',
    'pessoa-passaro',
    'rick',
    'scroopy',
    'summer',
    'pickle-rick'
]


//variaveis que armazenarão as cartas para fazermos a logica se podemos jogar ou não
let firstCard = '';
let secondCard = '';


function checkEndGame() {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length === 20) {
        clearInterval(this.loop);
        alert(`Parabens, ${spanPlayer.innerHTML}. Seu tempo foi ${spanTimer.innerHTML}`)
    }
}


//função para checar se tem 2 cartas iguais
function checkCard() {

//pegamos os atributos dos card
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');


//se o atributo da primeira carta for igual o da segunda significa que acertamos
    if(firstCharacter === secondCharacter) {

//adicionamos a classe disabled no primeiro filho do elemento card para mostrar como se tivesse desabilitado
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');


//resetamos as variaveis da primeira e segunda carta para conseguirmos jogar novamente
        firstCard = '';
        secondCard = '';

        checkEndGame();
    } else {

//se errarmos executará esse timer em meio segundo e removerá as classes virando as cartas novamente
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

//novamente resetamos as variaveis
            firstCard = '';
            secondCard = '';
        }, 500)

    }
}


//função para sabermos em qual card clicamos
function revealCard(event) {


//faz uma verificação para ver se a carta clicada já possui essa classe, no caso se o usuario clicar numa carta virada não irá bugar nada
    if(event.target.parentNode.className.includes('reveal-card')) {
        return;
    }


//essa verificação é para ver se a variavel de primeira carta já foi revelada para salvarmos a carta dentro dela
    if(firstCard === '') {

//pegamos o evento de clique e selecionamos o pai do elemento em que clicamos no caso o card e add uma classe que rotacionará a imagem
        event.target.parentNode.classList.add('reveal-card');
        firstCard = event.target.parentNode;//armazenamos a carta dentro da variavel

//verificação pra ver se a segunda carta já foi preenchida
    } else if(secondCard === '') {
        event.target.parentNode.classList.add('reveal-card');
        secondCard = event.target.parentNode;//armazenamos a carta dentro da variavel

        checkCard();
    }

}


//função responsável por criar elementos e colocar classe nesses elementos
function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}


function createCard(character) {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

//adicionamos as imagens em forma dinamica
    front.style.backgroundImage = `url(../images/${character}.png)`;

    card.appendChild(front);
    card.appendChild(back);

//evento de clique em todos os card
    card.addEventListener('click', revealCard);

//colocamos o atributo 'data-character' com o parametro character para ser dinamico
    card.setAttribute('data-character', character);

    return card;
}


//função que carrega o jogo na tela
function loadGame() {


//criamos um  novo array e duplicamos o primeiro array de personagens 2 vezes
    const duplicateCharacters = [...characters, ...characters];

//criamos um array com o metodo sort para embaralhar o array, o parametro dele aceita apenas função
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

//fizemos um looping no array e executamos a função de criar card
    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    })
}


function timer() {
    this.loop = setInterval(() => {
        const currentTime = +spanTimer.innerHTML;
        spanTimer.innerHTML = currentTime + 1;

    }, 1000)
}


window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('Player');
    timer();
    loadGame();
}
