#include <iostream>
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
    char c;cin >> c;
    if (int(c) == 122) cout << "a";
    else cout << char(int(c) +1);
}