// ADVINHE O NUMERO SECRETO

#include <stdio.h>

int usoBreak()
{
    int numeroSecreto = 7;
    int tentativa;

    printf("Advinhe o numero secreto!!\n");

    while (1)
    {

        printf("Digite um numero: ");
        scanf("%d", &tentativa);

        if (tentativa == numeroSecreto)
        {

            printf("Parabens você acertou o numero secreto");
            break;
        }
        else
        {
            printf("Tente novamente\n");
        }
    }

    return 0;
}

// PULAR AS ITERAÇÕES COM NÚMEROS PARES COM O CONTINUE

int main()
{

    for (int i = 1; i <= 20; i++)
    {

        if (i % 2 == 0)
        {

            continue; // Pula iterações com números pares
        }

        printf("%d ", i);
    }

    return 0;
}