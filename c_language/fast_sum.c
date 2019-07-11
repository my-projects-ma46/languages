#include <stdio.h>
int main(int argc, char const *argv[]){
    int x, y;
    short int *a, *b, *c, *d;
    a = &x;b = a+1;c = &y;d = c+1;
    *a = 10;*b = 5;*c = 2;*d = 3;
    x = x + y;
    printf("a + c = %d\nb + d = %d\n",*a, *t);
    return 0;
}
