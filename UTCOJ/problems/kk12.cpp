#include <iostream>
#include <string>
#include <algorithm>
#include <vector>
#include <map>
#define ll long long
#define end "\n"
using namespace std;
int main(){
	ios_base::sync_with_stdio(0);cin.tie(0);
	ll n , ans = 0;cin>>n;
	string s;cin>>s;
	s+=s;
	vector<ll> cir[2000006];
	cir[-1] = 0;
	for (int i = 0 ; i< s.size() ; i++){
		if (s[i] == '+') cir[i] = cir[i - 1] + 1;
		else cir[i] = cir[i - 1] + 1;
	}
	for (int i = 2 ; i<=n ; i+=2){
		for (int j = 0 ; j < n + i ; j++){
			if (cir[j+i-1] - cir[j-1] == 0) ans++;
		}
	}
	cout << ans;
}

