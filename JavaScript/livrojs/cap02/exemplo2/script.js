let form = document.querySelector('form');
let resposta1 = document.querySelector('.resposta1');
let resposta2 = document.querySelector('.resposta2');
let resposta3 = document.querySelector('.resposta3');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let veiculo = document.querySelector('.text-car').value;
    let preco = document.querySelector('.text-price').value;
    let entrada = +preco * 0.5;
    let parcela = (+preco - entrada) / 12

    resposta1.innerText = `Veiculo: ${veiculo}`;
    resposta2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
    resposta3.innerText = `+ 12x de R$ ${parcela.toFixed(2)}`;
})