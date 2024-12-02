#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {
    for(;;) {
        malloc(100000);
    }
    return 0;
}