#include <iostream>
using namespace std;

#define ll long long

int main() {
    int t;
    cin >> t;

    while (t--) {
        ll n;
        cin >> n;

        if (n % 4 == 0 || n % 4 == 1)
            cout << n << '\n';
        else
            cout << n - 1 << '\n';
    }

    return 0;
}
