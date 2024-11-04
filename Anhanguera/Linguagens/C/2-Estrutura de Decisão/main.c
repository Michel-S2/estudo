#include <stdio.h>

//VERIFICAR A IDADE PARA CNH

// int main() {

//     float idade;

//     printf("Digite sua idade: \n");
//     scanf("%f", &idade);

//     if (idade >= 18) {
//         printf("Voce ja pode tirar a carteira de habilitacao voce e maior de 18");
//     }

//     return 0;
// }



//VERIFICA SE O NUMERO É POSITIVO

// int main(){

//     int num;

//     printf ("Digite um número: ");

//     scanf ("%d",&num);

//     if (num>0) {

//         printf ("\n\nO número e positivo\n");

//     } else {

//         printf ("O numero e negativo");

//     }

//     return 0;

// }



//DESCONTO COM BASE NA OPÇÃO ESCOLHIDA

#include <stdio.h>

    int main(){

        char opcao;

        float valor, total;

        printf("\n Digite o valor da compra \n");

        scanf("%f", &valor);

        printf("\n Digite a letra que representa o desconto a ser aplicado:\n");

        printf("\ta - 10%% de desconto\n");

        printf("\tb - 15%% de desconto\n");

        printf("\n Digite sua opcao:");

        scanf("%s", &opcao);

        switch(opcao)

        {

            case 'a':

                total = valor - (valor*0.10);

                printf(" \nValor final da compra: R$ %.2f\n", total);

                break;

            case 'b':

                total = valor - (valor*0.20);

                printf(" \nValor final da compra: R$ %.2f\n", total);

                break;

            default:

                printf("opcao invalida\n");

        }

        return 0;

}