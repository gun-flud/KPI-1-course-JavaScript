#include <stdio.h>
#include <math.h>
 
int main(void) {
    int n, operations;
    double numerator, summ;
    printf("Input n: ");
    scanf("%d", &n);
    
    summ = 0;
    operations = 0;
    for (int i = 1; i <= n; i++){// 1(операція j <= i) + 1(операція j++) = 2
        
        double denominator = 1.0;
        for (int j = 1; j <= i; j++){ // 1(операція j <= i) + 1(операція j++) = 2
            denominator *= log(j + 2); 
            operations += 5; // 2(зовнішній цикл) + 1(операція x *=) + 1(операція ln()) + 1(oneрація + 2) = 5
        }
        numerator = 3.0 - sin(i)*sin(i);
       

        summ += numerator / denominator;
        operations += 8; // 2(зовнішній цикл) + 1(oперація 3.0 - x ) + 1(операція sin(n)) + 1(операція x*x) + 1(операція sin(n)) + 1(операція +=) + 1(операція numerator / denominator) = 8
    }
    printf("S = %lf\n", summ);
    printf("S = %d\n", operations);

    return 0;
}