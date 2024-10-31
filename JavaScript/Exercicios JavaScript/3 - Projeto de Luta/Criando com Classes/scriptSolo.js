const personagem1 = new Pikachu();
const personagem2 = new Eevee();
const log = new Log(document.querySelector('.log'));

const cenario = new Cenario(
    personagem1,
    personagem2,
    document.querySelector('#personagem1'),
    document.querySelector('#personagem2'),
    log
);

cenario.start();