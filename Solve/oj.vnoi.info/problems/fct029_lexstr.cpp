#include <iostream>
#include <string>
#include <cstring>
#include <unordered_map>
#include <queue>
using namespace std;

int main(){
    ios_base::sync_with_stdio(0); cin.tie(0);

    int n; cin >> n;
    string missing; cin >> missing;

    bool key_flag[27];
    memset(key_flag, false, sizeof(key_flag));

    unordered_map<int, int> mp;
    int mark = 0, mark_ = 0;

    for (auto c : missing) {
        if (c != '?') {
            mp[int(c)]++;
            key_flag[int(c) - 97] = true;
        }
        else mark_++;
    }

    for (int i = 0; i < 26; i++) {
        int val; cin >> val;

        if (key_flag[i]) {
            int temp = mp[i + 97];
            mp[i + 97] = val - temp;
        }
        else mp[i + 97] = val;

        if (mp[i + 97] < 0) {
            cout << -1;
            return 0;
        }

        mark += mp[i + 97];
    }

    if (mark != mark_) {
        cout << -1;
        return 0;
    }

    queue<int> q;

    for (int i = 97; i <= 122; i++) {
        for (int j = 0; j < mp[i]; j++)
            q.push(i);
    }

    for (auto c : missing) {
        if (c == '?') {
            cout << char(q.front());
            q.pop();
        }
        else cout << c;
    }
}