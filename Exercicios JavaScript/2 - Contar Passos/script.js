class Person {
    passos = 0;

    constructor (nome) {
        this.name = nome;
    }

    darUmPasso() {
        this.passos++
    }
}

const botaoRigby = document.querySelector('.botaoRigby');
const botaoBenson = document.querySelector('.botaoBenson');
const botaoMordecai = document.querySelector('.botaoMordecai');
const textRigby = document.querySelector('#textRigby');
const textBenson = document.querySelector('#textBenson');
const textMordecai = document.querySelector('#textMordecai');

p1 = new Person ('Rigby');
document.querySelector('.botaoRigby').addEventListener('click', () => {
    p1.darUmPasso()
    textRigby.innerText = `${p1.name} deu ${p1.passos} passos!`
    textRigby.setAttribute('class', 'resultado')
    botaoRigby.after(textRigby);
})

p2 = new Person ('Benson');
document.querySelector('.botaoBenson').addEventListener('click', () => {
    p2.darUmPasso();
    textBenson.innerText = `${p2.name} deu ${p2.passos} passos!`
    textBenson.setAttribute('class', 'resultado')
    botaoBenson.after(textBenson);

})

p3 = new Person ('Mordecai');
document.querySelector('.botaoMordecai').addEventListener('click', () => {
    p3.darUmPasso();
    textMordecai.innerText = `${p3.name} deu ${p3.passos} passos!`
    textMordecai.setAttribute('class', 'resultado')
    botaoMordecai.after(textMordecai);

})



