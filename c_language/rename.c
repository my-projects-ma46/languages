#include <stdio.h>

int main(int argc, char const *argv[])
{
    for(int i = 16; i<=30; i++) {
        printf("mv UC%d.png UC%d.png\n",i,i-5);
    }
    printf("\n");
    return 0;
}
