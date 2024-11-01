#include <stdio.h>

int main() {

    int numero1, numero2, numero3, soma, subtracao, multiplicacao;
    float divisao;

    printf("Digite o primeiro numero: ");
    scanf("%d", &numero1);

    printf("Digite o segundo numero: ");
    scanf("%d", &numero2);

    printf("Digite o terceiro numero: ");
    scanf("%d", &numero3);

    soma = numero1 + numero2 + numero3;
    subtracao = numero1 - numero2 - numero3;
    multiplicacao = numero1 * numero2 * numero3;
    divisao = numero1 / numero2 / numero3;

    printf("A soma deles: \n %d + %d + %d = %d", numero1, numero2, numero3, soma );
    printf("\nA subtracao deles: \n %d - %d - %d = %d", numero1, numero2, numero3, subtracao );
    printf("\nA multiplicacao deles: \n %d * %d * %d = %d", numero1, numero2, numero3, multiplicacao );
    printf("\nA divisao deles: \n %d / %d / %d = %.2f", numero1, numero2, numero3, divisao );
    printf("\nO primeiro numero %d e maior que o segundo numero %d? %d", numero1, numero2, numero1 > numero2);
    printf("\nO segundo numero %d e menor que o terceiro numero %d? %d", numero2, numero3 ,numero2 < numero3);
    printf("\nO primeiro numero e positivo e o segundo e par? %d", (numero1 > 0) && (numero2 % 2 == 0));
    return 0;
}