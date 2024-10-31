// #include <stdio.h>

// #define numero  100;

// int main() {

//     char character;
//     float valor1, valor2;

//     printf("\n Digite um caractere qualquer:");
//     scanf("%c", &character);

//     printf("\n Digite o primeiro valor:");
//     scanf("%f", &valor1);

//     printf("\n Digite o segundo valor:");
//     scanf("%f", &valor2);

//     printf("Variavel 1 = %c\n", character);
//     printf("Variavel 2 = %f\n", valor1);
//     printf("Variavel 3 = %f\n", valor2);

//     return 0;
// }


// EXERCICIO

#include <stdio.h>

int main() {

    //VARIAVEIS
    float precoVenda, valorImposto, valorDesconto, precoFinal;

    //CONSTANTES
    const float taxaImposto = 0.1;
    const float descontoPadrao = 0.05;

    //ENTRADA 
    printf("Informe o preço de venda do produto: ");
    scanf("%f", &precoVenda);

    //PROCESSAMENTO
    valorImposto = precoVenda * taxaImposto;
    valorDesconto = precoVenda * descontoPadrao;
    precoFinal = precoVenda + valorImposto - valorDesconto;

    //SAIDA
    printf("o preço final do televisor é: R$ %.2f", precoFinal);


    return 0;
}