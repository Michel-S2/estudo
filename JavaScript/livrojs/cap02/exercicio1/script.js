let form = document.querySelector('form');
let resposta1 = document.querySelector('.resposta1');
let resposta2 = document.querySelector('.resposta2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const medicamento = document.querySelector('.medicamento').value;
    const preco = Number(document.querySelector('.preco').value);
    const promocao = Math.floor(preco * 2);

    resposta1.innerText = `Promoção de ${medicamento}`;
    resposta2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`;
})