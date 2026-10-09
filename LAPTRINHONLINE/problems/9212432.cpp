#include <iostream>
#include <vector>
#include <algorithm>
#include <map>
#define ll long long

using namespace std;
int main(){
	ios_base::sync_with_stdio(0);cin.tie(0);
	ll n , ans = 0;
	cin >> n;
	map<double , ll > mp;
	while (n--){
		ll a;double b ; char c;
		cin >> a >> b >> c;
		mp[b] = a;
		if (c == 'B' && a%3==0) ans++;
	}
	cout << ans << "\n";
	ll i=1;
	for (auto x : mp){
		cout << x.second <<"\n";
		if (i == 3) return 0;
		i++;
	}
	return 0;
}