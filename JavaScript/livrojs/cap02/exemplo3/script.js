let form = document.querySelector('form');
let resposta = document.querySelector('.resposta1');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valorQuilo = Number(document.querySelector('.quilo').value);
    const grama = Number(document.querySelector('.grama').value);

    const valorBuffet = (grama / 1000) * valorQuilo;

    resposta.innerText = `Valor a Pagar R$: ${valorBuffet.toFixed(2)}`;

})