#include <stdio.h>
#include <math.h>
 
int main(void) {
    int n, operations;
    double numerator, summ, denominator;

    printf("Input n: ");
    scanf("%d", &n);

    summ = 0;
    operations = 0;
    denominator = 1.0;
    for (int i = 1; i <= n; i++) { // 1(операція j <= i) + 1(операція j++) = 2 
        denominator *= log(i + 2);
        numerator = 3.0 - sin(i)*sin(i);

        summ += numerator / denominator;

        operations += 10; // 2(зовнішній цикл) + 1(операція x *=) + 1(операція ln()) + 1(oneрація + 2) + 1(oперація 3.0 - x ) + 1(операція sin(n)) + 1(операція x^2) + 1(операція +=) + 1(операція numerator / denominator) = 10
    }
    printf("S = %lf\n", summ);
    printf("S = %d\n", operations);

    return 0;
}