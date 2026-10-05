#include <stdio.h>
#include <iostream>
using namespace std;
int main(){
    long long n;
    cin >> n;
    cout << n << " "; 
    while (n != 1){
        if (n%2 == 0){
            n = n/2;
            std::cout << n << " ";
            
        }
        else{
            n = 3*n + 1;
            std::cout << n << " "; 
        }
    }

    return 0;
}