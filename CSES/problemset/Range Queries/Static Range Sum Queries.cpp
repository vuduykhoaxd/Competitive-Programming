#include <iostream>
#include <cstring>
using namespace std;

int main(){
    ios_base::sync_with_stdio(NULL);
    cin.tie(nullptr);
    long long n ,q ,sum[200001];
    memset(sum , 0 , sizeof(sum));
    cin >> n >> q;
    for (int i = 1 ; i<= n ; i++){
        long long x;
        cin >> x;
        sum[i] = x+sum[i-1];
    }
    while (q--){
        long long l,r;
        cin >> l >> r;
        cout << sum[r] - sum[l-1] << "\n";
    }


}
