#include <iostream>
#include <string>
#include <algorithm>
#include <map>
#define ll long long
using namespace std;

int main(){
	ios_base::sync_with_stdio(0);cin.tie(0);
	string num;cin>>num;
	map<char , ll> mp;
	ll m =0; string last0 = "";
	for (auto c : num){
		if (c!='0')
			mp[c]++;
		else last0+='0';
		m += (ll)c - 48;
	}
	if (m%9 == 0 && last0 != ""){
		string res = "";
		for (auto k : mp){
			for (int i = 1 ; i<= k.second ; i++){
				res+=k.first;
			}
		}
		reverse(res.begin() , res.end());
		cout << res << last0;
	}
	else cout << -1;
}

