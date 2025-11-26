#include <stdio.h>

int main(void) {
    short int x;

    printf("Input x: ");
    scanf("%hd", &x);

    if (x > -21)
    {
        if (x <= 3)
        {

            x = x * (-14) - 20;
            printf("y = %hd\n", x);
        }
        else if (x > 12)
        {

            x = x * (-14) - 20;
            printf("y =  %hd\n", x);
        } else {
            printf("Number x is incorrect");
        }
    } else if (x <= -41)
    {

        x = (13 * x * x) / 11 - 6;
        printf("y =  %hd\n", x);
    }  else {
            printf("Number x is incorrect");
        }

    return 0;
}