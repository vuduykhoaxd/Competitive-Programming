#include <iostream>
#include <algorithm>
#define ll long long
using namespace std;

ll solve(ll x, ll y) {
    ll k = max(x, y);
    ll base = k * (k - 1) + 1;

    if (x > y) {
        if (k % 2 == 0)
            return base + (x - y);
        else
            return base - (x - y);
    }
    else {
        if (k % 2 == 0)
            return base - (y - x);
        else
            return base + (y - x);
    }
}

int main() {
    ll t;
    cin >> t;

    while (t--) {
        ll x, y;
        cin >> x >> y;
        cout << solve(x, y) << '\n';
    }
}