#include <stdio.h>

int main() {
    double x, y = 0.0;
    int n;

    printf("Enter x (x > 0): ");
    scanf("%lf", &x);

    printf("Enter n: ");
    scanf("%d", &n);

    if (x <= 0 || n <= 0) {
        printf("Error \n");
        return 1;
    }

    double a = (x - 1) / (x + 1);
    double a2 = a * a; // == ((x - 1) / (x + 1))^2 степінь квадрату
    double changableValue = a / ((x + 1) * (x + 1));    // (x-1)^(2i-1)/(x+1)^(2i+1)

    for (int i = 1; i <= n; i++) {
        y += changableValue / (2 * i + 1);
        changableValue *= a2; // :(2i - 1) - з кожною ітерацією додається степінь 2
    }

    y *= 2;

    printf("Y = %lf\n", y);
    return 0;
}