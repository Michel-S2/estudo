// você precisa criar um programa em linguagem C que possa calcular a média de um aluno com base nas 
// avaliações realizadas. Uma das possíveis soluções
// sugeridas para resolver este problema inclui os seguintes passos:


// Criar uma variável para inserção das notas.
// Estabelecer uma condição para a inserção das notas até que um comando de saída seja executado.
// Após a inserção das notas, inserir uma letra para finalizar o processo e calcular a média do aluno.


#include <stdlib.h>

#include <string.h>

int main() {

    int avalia, cont = 0, soma = 0;

    char letra;

    float media;   

    do {

        printf("Digite uma nota para avaliação: \n");

        scanf("%d", &avalia);

        fflush(stdin); // limpa o buffer de entrada

        cont++;

        soma = soma + avalia;

       

        printf("Digite qualquer letra para continuar ou 's' para encerrar: \n");

    } while ((letra = getchar()) != 's');

 

    printf("\n \nQuantidade de avaliação = %d e soma das notas = %d. \n", cont, soma);

    media = soma / cont;

    system("PAUSE");

    return 0;

}