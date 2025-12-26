#include <stdio.h>
#include <windows.h>
#include <unistd.h>

void printFunction(int x, int y) {
    HANDLE handler = GetStdHandle(STD_OUTPUT_HANDLE);
    COORD position = {x, y};
    SetConsoleCursorPosition(handler, position); 
    printf("*");
    // fflush(stdout);                                 
}

int main(void)
{
    int width = 80;
    int height = 24;
    for (int y = 0; y < height / 2; y++){
        for (int x = 0; x < width; x++){
            int posX = x;
            if (y % 2 == 0){
                posX = width - x - 1;
            }
            
            printFunction(posX, y); 
            printFunction(width - posX - 1, height - y - 1);
            Sleep(2);
            
        }    
    }

    getchar();
    return 0;
}


