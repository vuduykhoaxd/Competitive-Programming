#include <iostream>
#include <string>
#define FASTIO ios_base::sync_with_stdio(0); cin.tie(0);
#define ll long long
using namespace std;

int main() {
    FASTIO
    ll n;
    cin >> n;
    cin.ignore();
    while (n > 0) {
        string name;
        getline(cin, name);
        bool nword = true;
        for (char c : name) {
            if (c != ' ' && nword) {
                cout << c;
                nword = false;
            }
            if (c == ' ') {
                nword = true;
            }
        }
        cout << '\n';
        n--;
    }
    return 0;
}
