#include <iostream>
#include <string>
using namespace std;

int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
	int t; cin >> t;
	while(t--){
		string S , F , L;
		cin >> S >> F >> L;
		if (L+F == S) cout << "YES\n";
		else cout << "NO\n";
	}
}