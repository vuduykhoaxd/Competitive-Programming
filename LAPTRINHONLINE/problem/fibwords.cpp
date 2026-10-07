#include <bits/stdc++.h>
using namespace std;

using ll = long long;

struct Node {
    string pre, suf;
    ll cnt = 0;
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, tc = 1;
    string p;

    while (cin >> n >> p) {
        int m = p.size(), k = max(0, m - 1);

        vector<Node> f(n + 1);

        f[0] = {"0", "0", p == "0"};
        if (n >= 1)
            f[1] = {"1", "1", p == "1"};

        for (int i = 2; i <= n; i++) {
            f[i].cnt = f[i-1].cnt + f[i-2].cnt;

            string mid = f[i-1].suf + f[i-2].pre;
            for (int pos = 0; (pos = mid.find(p, pos)) != string::npos; pos++)
                f[i].cnt++;

            string x = f[i-1].pre + f[i-2].pre;
            f[i].pre = x.substr(0, min(k, (int)x.size()));

            x = f[i-1].suf + f[i-2].suf;
            f[i].suf = x.substr(max(0, (int)x.size() - k));
        }

        cout << "Case " << tc++ << ": " << f[n].cnt << '\n';
    }
}