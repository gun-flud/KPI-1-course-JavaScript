#include <stdio.h>
#include <stdlib.h>
#include <time.h>


int main(void) {
    int n, random, counter, x;
    printf("Enter the size of matrix A(n, n) \nValue of n: ");
    scanf("%d", &n);
    int matrix[n][n];
    printf("\nGenerated matrix:A(%d, %d)\n", n, n);

    counter = 1;
        for (int i = 0; i < n; i++)// генерування матриці з послідовним розміщеням елементів
    {
        for (int j = 0; j < n; j++)
        {
            matrix[i][j] = counter;
            printf("%d, ", matrix[i][j]);
            counter++;
        }
        printf("\n");
    }

    printf("Input x: ");
    scanf("%d", &x);
    
    int r = n;
    int l = 0;
    counter = 1;
     while (l <= r) { // двійковий пошук
        printf("count: %d\n", counter);
        int i = (l + r) / 2;
        if (x == matrix[i][i]) {
            printf("value was found: %d\n", matrix[i][i]);
            printf("element X(%d, %d)\n", i + 1, i + 1);
            break;
        } else if (x < matrix[i][i]){
            r = i - 1;
        } else {
            l = i + 1;
        }; 
        counter++;
    };

   if (l > r) {
            printf("value not found\n");
        }
}



















