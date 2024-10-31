let personagem1 = new Pikachu();
let personagem2 = new Eevee();

let log = new Log(document.querySelector('.log'));

const cenario = new Cenario(
    personagem1,
    personagem2,
    document.querySelector('#personagem1'),
    document.querySelector('#personagem2'),
    log
);



cenario.start()