#include <iostream>
#include <string>
#define ll long long
using namespace std;

int main(){
	ios_base::sync_with_stdio(0);cin.tie(0);
	ll T;cin >>T;
	string s;
	while (T--){
		cin >> s;
		if (s == "bca" || s == "cab") cout << "NO\n";
		else cout << "YES\n";
	}
}