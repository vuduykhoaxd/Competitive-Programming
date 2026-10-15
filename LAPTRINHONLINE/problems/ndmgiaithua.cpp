
#include <iostream>
#define FASTIO ios_base::sync_with_stdio(0); cin.tie(0);
#define ll long long
using namespace std;

int main() {
    FASTIO
    ll n, ans = 0;
    cin >> n;
    while (n > 0) {
        n /= 5;
        ans += n;
    }
    cout << ans;
    return 0;
}
