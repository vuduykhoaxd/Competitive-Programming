#include <iostream>
#include <string>
using namespace std;
void solve(string T, int k) {
    int n = T.size();
    for (int len = n / 2; len >= 1; len--) {
        for (int i = 0; i + 2 * len <= n; i++) {
            int diff = 0;
            for (int j = 0; j < len; j++) {
                if (T[i + j] != T[i + j + len]) {
                    diff++;
                }
            }
            if (diff <= k) {
                cout << len << "\n";
                return;
            }
        }
    }
    cout << 0 << "\n";
}
int main(){
    int n;
    cin >> n;
    string T;
    cin >> T;
    while (n--){
        int k ; cin >> k;
        solve(T, k);
    }
    
    return 0;
}

