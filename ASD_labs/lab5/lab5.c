#include <stdio.h>
#include <stdlib.h>
#include <time.h>

  

int main(void)
{
    int n, m, random, x, y, left, right, middle, Ycount, Xcount, change;

    int matrix[10][10] = {
    {90, 95, 98, 94, 92, 91, 89, 97, 83, 84},
    {85, 88, 87, 81, 82, 72, 80, 90, 78, 73},
    {66, 79, 74, 77, 76, 68, 71, 69, 70, 58},
    {57, 62, 53, 60, 67, 63, 56, 51, 65, 55},
    {49, 61, 46, 50, 48, 54, 43, 41, 64, 44},
    {33, 35, 45, 39, 39, 38, 37, 36, 59, 40},
    {26, 30, 22, 34, 31, 27, 32, 25, 47, 19},
    {14, 19, 17, 21, 29, 23, 28, 18, 24, 10},
    { 7, 12, 11, 20, 13, 14, 12, 15, 16,  7},
    { 3,  4,  8,  6,  5, 11,  9,  5,  1,  2}
};
m = 10;
n = 10;

// int matrix[10][10] = {
//     { 3,  4,  8,  6,  5, 11,  9,  5,  1,  2},
//     { 7, 12, 11, 20, 13, 14, 12, 15, 16,  7},
//     {14, 19, 17, 21, 29, 23, 28, 18, 24, 10},
//     {26, 30, 22, 34, 31, 27, 32, 25, 47, 19},
//     {33, 35, 45, 39, 39, 38, 37, 36, 59, 40},
//     {49, 61, 46, 50, 48, 54, 43, 41, 64, 44},
//     {57, 62, 53, 60, 67, 63, 56, 51, 65, 55},
//     {66, 79, 74, 77, 76, 68, 71, 69, 70, 58},
//     {85, 88, 87, 81, 82, 72, 80, 90, 78, 73},
//     {90, 95, 98, 94, 92, 91, 89, 97, 83, 84}
// };

    // srand(time(NULL));
    // printf("Enter the size of matrix A(m, n)\n");
    // printf("Value of m: ");
    // scanf("%d", &m);
    // printf("\nValue of n: ");
    // scanf("%d", &n);

    // int matrix[m][n];

    // printf("\nTo generate a matrix of size A(%d, %d), enter:\n", m, n);
    // printf("Maximum value of a number: ");
    // scanf("%d", &random);
    // printf("\nGenerated matrix:\n");
    //     for (int i = 0; i < m; i++)
    // {
    //     for (int j = 0; j < n; j++)
    //     {
    //         int randomNum = rand() % random;
    //         matrix[i][j] = randomNum;
    //         printf("%d, ", matrix[i][j]);
    //     }
    //     printf("\n");
    // }
    Sort( matrix[10][10], n);
        
    for (y = 0; y < n; y++)
    {
        for (x = 1; x < m; x++)
        {
            int numberToSort = matrix[x][y];
            left = 0;
            right = x;

            while (left < right)
            { // бінарний пошук
                middle = (left + right) / 2;

                if (matrix[middle][y] > numberToSort)
                {
                    right = middle;
                }
                else
                {
                    left = middle + 1;
                }
            }

            for (change = x - 1; change >= right; change--)
            {
                matrix[change + 1][y] = matrix[change][y];
            }

            // Вставка
            matrix[right][y] = numberToSort;

        } 
    }

    printf("\nSorted matrix:\n");

    for (int sorti = 0; sorti < m; sorti++)
    {
        for (int sortj = 0; sortj < n; sortj++)
        {
            printf("%d, ", matrix[sorti][sortj]);
        }
        printf("\n");
    }
    return 0;
}
