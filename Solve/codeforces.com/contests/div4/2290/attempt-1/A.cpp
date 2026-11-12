#include <iostream>
using namespace std;

int main(){
    int t; cin >> t;
    while (t--){
        int a,b,c;
        cin >> a >> b >> c;
        if ( (a-1) == (b+1) && (b+1) == c ) cout << "YES\n";
        else if ( (a-1) == (b) && b == c + 1 ) cout << "YES\n";
        else if ( b-1 == a+1 && a+1 == c) cout << "YES\n";
        else if ( b-1 == c+1 && c+1 == a) cout << "YES\n";
        else if ( c-1 == b+1 && b+1 == a) cout << "YES\n";
        else if ( c-1 == a+1 && a+1 == b) cout << "YES\n";
        else cout << "NO\n";
    }
}