#include <iostream>
using namespace std;
int main(){
    long long N[200000 + 1];
    long long a;
    long long dem = 0;
    cin >> a;
    cin>> N[1];
    for (int i = 2 ; i<= a ; i++){
        cin >> N[i];
        if (N[i] < N[i-1]){
            dem = dem + ( N[i-1] - N[i] );
            N[i] = N[i-1];
        }
        
    }
    cout << dem;
}