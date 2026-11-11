#include <iostream>
#include <map>
#include <string>
using namespace std;

int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
	int n; cin >> n;
	map<string,int> mp;
	while (n--){
		string str; cin >> str;
		mp[str]++;
	}
	for (auto x : mp){
		if (x.second %2 != 0) {
			cout << x.first; return 0;
		}
	}
	cout << -1;

}