#include <stdio.h>
#include <stdlib.h>

typedef struct CAO {
    void (*latir)(struct CAO *);
    int idade;
}cao;

void func_latir(cao *self) {
    printf("au au au tenho %d anos\n",self->idade);
}

cao * newCao(int i) {
    cao *c = (cao*)malloc(sizeof(cao));
    c->latir = &func_latir;
    c->idade = i;
    return c;
}

int main(int argc, char const *argv[])
{
    cao *c = newCao(5);
    
    c->latir(c);
    
    free(c);
    return 0;
}
