#include <iostream>
#include <string>
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
    int n,m,k,ans = 32768;
    cin >> n >> m >> k;
    string unknown;
    cin >> unknown;
    for (int i = 0 ; i< m ; i++ )unknown+=unknown[i];
    while (k--){
        string known;
        cin >> known;
        for (int i = 0 ; i < n ; i++){
            int diff =0 ;
            for (int j = 0 ; j < m ; j++){
                if (known[j] != unknown[i+j]) diff++;
            }
            ans = min(ans, diff);
            if (ans == 0) {
                cout << ans;
                return 0;
            }
        }
    }
    cout << ans;
}


