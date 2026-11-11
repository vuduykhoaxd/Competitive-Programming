#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
	int T;cin>>T;
	while (T--){
		string s ; long long k;
		cin >> s >> k;
		string temp = s;
		reverse(s.begin() , s.end());
		if (temp == s) cout << "YES\n";
		else cout << "NO\n";
	}
}