#include <stdio.h>
#include <stdlib.h>
#include "read_number.h" // asda

typedef struct LISTA {
    int valor;
    //char nome[10];

    struct LISTA *prox;

}lista;

lista *achar_ultimo(lista *contatos) {
    // achar quem é o ultimo
    lista *ultimo = contatos;
    while (ultimo->prox != NULL)
    {
        ultimo = ultimo->prox;
    }
    return ultimo;
}


lista *enfileirar(lista* contatos, int valor, int tam_max, int *quant) {

    lista *novo_contato = (lista *) malloc(sizeof(lista));
    lista *ultimo = NULL;
    novo_contato->valor = valor;
    novo_contato->prox = NULL;


    if (contatos == NULL) // caso for vazia
    {
        contatos = novo_contato;
    } else{ // caso tenha contatos
        
        if (*quant < tam_max)
        {
            *quant = *quant + 1;
            
            ultimo = achar_ultimo(contatos);

            ultimo->prox = novo_contato;
            
        } else {
            printf("lista chegou no limite\n");
        }
    }
    return contatos;
}

lista *desenfileirar(lista *contatos) {
    if (contatos != NULL)
    {
        lista *contato_a_retirar = contatos;

        contatos = contatos->prox;

        free(contato_a_retirar);
    }
    
    return contatos;


}

lista *desempilhar(lista *contatos) {
    lista *ultimo, *novo_ultimo=contatos;
    //CASO tiver so 1 contato
    if (contatos->prox == NULL)
    {
        free(contatos);
        return NULL;
    }
    

    if (contatos != NULL)
    {
        ultimo = achar_ultimo(contatos);
        while (novo_ultimo->prox != ultimo)
        {
            novo_ultimo = novo_ultimo->prox;
        }
        free(ultimo);
        novo_ultimo->prox = NULL;

    }
    
    return contatos;


}

void printar(lista *contatos) {
    lista *contato = contatos;

    if (contatos != NULL)
    {
        while (contato != NULL)
        {
            printf("%d\n",contato->valor);
            contato = contato->prox;
        }
        
    } else
    {
        printf("lista vazia\n");
    }
    
    
}

// 

int main(int argc, char const *argv[])
{
    
    lista *contatos = NULL;
    int tam_max = 10, quantidade=0;
    int valor;
    do
    {
        printf("digite um valor: ");
        valor = read_integer();
        contatos = enfileirar(contatos, valor, tam_max, &quantidade);
        printar(contatos);
    } while (valor > 0);
    


    // limpar(contatos)



    return 0;
}
