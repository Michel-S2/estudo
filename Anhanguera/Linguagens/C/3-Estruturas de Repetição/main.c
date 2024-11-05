#include <stdio.h>

int lacoWhile()
{

    int multiplicador = 0, resultado, num;

    printf("Tabuada de qual numero: ");
    scanf("%d", &num);

    while (multiplicador <= 10)
    {
        resultado = num * multiplicador;
        printf("\n%d * %d = %d", num, multiplicador, resultado);
        multiplicador = multiplicador + 1;
    }

    return 0;
}

int lacoDoWhile()
{
    float metragem1 = 0, metragem2 = 0, resultado = 0;
    int resp;

    do
    {
        printf("Calculo de metros quadrados \n\n");
        printf("Digite a primeira metragem do terreno:");
        scanf("%f", &metragem1);

        printf("\nDigite a segunda metragem do terreno:");
        scanf("%f", &metragem2);

        resultado = (metragem1 * metragem2);

        printf("\n\nTerreno tem = %.2f m2\n", resultado);

        printf("Digite 1 para continuar ou 2 para sair\n");

        scanf("%d", &resp);

    } while (resp == 1); // CONDIÇÃO DE SAIDA

    return 0;
}

// Vamos agora criar um programa que calcula todos os números na sequência de Collatz para um dado número de entrada.
// A sequência de comandos é a seguinte:
// Digitar um número inteiro positivo maior que 1.
// Se o número for par, dividi-lo por 2.
// Se o número for ímpar, multiplicá-lo por 3 e somar 1.
// Conforme a conjectura de Collatz, a sequência sempre termina em 1, como já explicado anteriormente.
// Solicitar o número para o qual a sequência de Collatz será calculada.

int seila()
{

    int num, i;

    printf("\n\nDigite um numero:\n");

    scanf("%d", &num);

    i = 0;

    while (num > 1)
    {

        if (num % 2 == 0)

            num /= 2;

        else

            num = 3 * num + 1;

        printf("\n%d\n", num);

        i++;
    }

    return 0;
}

// Primeiro, iremos criar um programa que simula uma interface de conta bancária (uma tela com opções de transações)

int main()
{

    float soma = 0, valor;

    int opcao;

    do
    {

        printf("\n Digite uma Operação");

        printf("\n 1. Deposito");

        printf("\n 2. Saque");

        printf("\n 3. Saldo");

        printf("\n 4. Sair");

        printf("\n Qual opcao? ");

        scanf("%d", &opcao);

        switch (opcao)
        {

        case 1:

            printf("\n Valor do depósito? ");

            scanf("%f", &valor);

            soma = soma + valor;

            break;

        case 2:

            printf("\n Valor do saque? ");

            scanf("%f", &valor);

            soma = soma - valor;

            break;

        case 3:

            printf("\n Saldo atual = R$ %.2f \n", soma);

            break;

        default:

            if (opcao != 4)
            {

                printf("\n Opção Inválida! \n");
            }
        }

    } while (opcao != 4);

    printf("Fim das operações. \n\n");

    return 0;
}