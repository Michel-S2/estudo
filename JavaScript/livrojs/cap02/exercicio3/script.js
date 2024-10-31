let form = document.querySelector('form');
let resposta1 = document.querySelector('.resposta1');
let resposta2 = document.querySelector('.resposta2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const produto = document.querySelector('.produto').value;
    const precoProduto = Number(document.querySelector('.valor').value);

    const promocao = precoProduto * 0.5;
    const valorAtualizado = precoProduto * 2 + promocao;
    resposta1.innerText = `${produto} - Promoção Leve 3 por R$: ${valorAtualizado.toFixed(2)}`;
    resposta2.innerText = `O 3° produto custa apenas R$: ${promocao.toFixed(2)}`;
})