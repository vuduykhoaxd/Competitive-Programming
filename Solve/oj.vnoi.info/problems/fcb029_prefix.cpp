#include <iostream>
#include <string>
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
    string a,b;
    cin >> a >> b;
    if (b.substr(0,a.size()) == a) cout << "Yes";
    else cout << "No";
}