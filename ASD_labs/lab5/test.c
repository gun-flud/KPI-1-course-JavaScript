#include <stdio.h>
#include <math.h>

int main(void)
{
    int x, y, left, right, middle, Ycount, Xcount, change;
    int matrix[10][10] = {
        {57, 12, 98, 34, 76, 23, 89, 41, 65, 7},
        {3, 88, 45, 21, 67, 54, 32, 90, 16, 73},
        {14, 62, 8, 77, 39, 91, 28, 5, 83, 19},
        {66, 30, 11, 50, 92, 38, 71, 18, 47, 84},
        {26, 79, 53, 6, 13, 68, 37, 97, 1, 44},
        {85, 4, 22, 60, 31, 14, 56, 25, 78, 40},
        {49, 95, 17, 81, 29, 63, 12, 36, 59, 10},
        {7, 35, 87, 20, 48, 72, 9, 51, 64, 2},
        {33, 61, 46, 94, 5, 27, 80, 15, 70, 55},
        {90, 19, 74, 39, 82, 11, 43, 69, 24, 58}};
    Xcount = sizeof(matrix) / sizeof(matrix[0]);
    Ycount = sizeof(matrix[0]) / sizeof(matrix[0][0]);

    
    for (y = 0; y < Ycount; y++)
    {
        for (x = 1; x < Xcount; x++)
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

        } // for ()x
    }
    for (int i = 0; i < Xcount; i++)
    {
        for (int j = 0; j < Ycount; j++)
        {
            printf("%d, ", matrix[i][j]);
        }
        printf("\n");
    }
    return 0;
}