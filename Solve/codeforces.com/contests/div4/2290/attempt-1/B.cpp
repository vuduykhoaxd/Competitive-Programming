#include <iostream>
#include <string>
using namespace std;

int main(){
    int t; cin >> t;
    while (t--){
        int ans = 0 , n;
        char c = 'R';
        cin >> n;
        string str = "";
        cin >> str;
        for (auto x : str){
            if (x != c) {
                c = x;
                if (c == 'R') c = 'B';
                else c = 'R';
                ans++;
            }
            else {
                if (c == 'R') c = 'B';
                else c = 'R';
            }
        }
        cout << ans << "\n";
    }
}
    