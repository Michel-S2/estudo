let form = document.querySelector('form');
let resposta1 = document.querySelector('.resposta1');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valorDeUso = Number(document.querySelector('.valor-de-uso').value);
    let tempoDeUso = Number(document.querySelector('.tempo-de-uso').value);
    let valorPagar = Math.ceil(tempoDeUso / 15);
    valorPagar = valorPagar * valorDeUso;

    resposta1.innerText = `Valor a Pagar R$: ${valorPagar.toFixed(2)}`;
})