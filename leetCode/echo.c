#include <stdio.h>
#include <string.h>

int main(unsigned int argc, char**argv){
    // printf("%d %c\n", argc, argv[0][0]);
    // strlen(argv[0]);
    for (unsigned int arg = 1; arg < argc; ++arg) {
        unsigned int argLen = strlen(argv[arg]);
        for (unsigned int charIndex = 0; charIndex < argLen; ++charIndex) {
            printf("%c", argv[arg][charIndex]);
        }
        printf(" ");
    }
    printf("\n");
    return 0;

}