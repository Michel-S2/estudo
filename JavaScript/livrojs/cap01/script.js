function exercicio1() {
    let numero = parseInt(prompt('Número: '))
    let anterior = numero - 1;
    let posterior = numero + 1;
    alert(`Número: ${numero} \nVizinhos: ${anterior} e ${posterior}`);
}



function exercicio2() {
    const conta = +prompt('Valor da conta R$: ');
    const cliente = +prompt('Número de clientes: ');
    const resultado = conta / cliente;
    alert(`Valor por cliente: R$ ${resultado.toFixed(2)}`);
}


function exercicio3() {
    const conta = +prompt('Valor da conta R$: ');
    const porcentagem = (0.10 * conta);
    const avista = conta - porcentagem;
    const parcelado3 = conta / 3;
    alert(`Preço R$: ${conta}\nÀ vista R$: ${avista}\nOu 3x de R$: ${Math.round(parcelado3)}`);
}



function exercicio4() {
    const nota1 = +prompt('Primeira nota: ');
    const nota2 = +prompt('Segunda nota');
    const media = (nota1 + nota2) / 2;
    alert(`Primeira nota: ${nota1}\nSegunda nota: ${nota2}\nMédia: ${media}`);
}

