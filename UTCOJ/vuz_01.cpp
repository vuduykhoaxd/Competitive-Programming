#include <bits/stdc++.h>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    string s;
    cin >> s;
    long long A_idx=0;
    for (auto c : s){
        A_idx++;
        if (c == 'A'){
            cout << A_idx; return 0;
        }
    }
    return 0;
}
