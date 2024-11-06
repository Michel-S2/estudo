// TABUADA DE UM NUMERO
#include <stdio.h>
#include <stdlib.h>

int umaTabuada()
{

    int resultado, num;

    printf("Tabuada de qual numero: ");
    scanf("%d", &num);

    for (int multiplicador = 1; multiplicador < 10; multiplicador++)
    {
        resultado = num * multiplicador;

        printf("%d\n", resultado);
    }

    return 0;
}

//-----------------------------------------------------------------------------------------------------------------------

// TABUADA DO 1 A 5 COM O FOR ANINHADO
int tabuadaAté5()
{

    int multi, num;

    for (num = 1; num <= 5; num++)
    {
        for (multi = 1; multi <= 10; multi++)
        {
            printf("%d", num * multi);
        }

        printf("\n");
    }

    return 0;
}

//---------------------------------------------------------------------------------------------------------------------

// X indo de 10 a 0 e Y indo de 0 a 10

int main()
{
    for (int x = 10, y = 0; x >= 0, y <= 10; x--, y++)
    {
        printf("X = %d, Y = %d\n", x, y);
    }

    return 0;
}