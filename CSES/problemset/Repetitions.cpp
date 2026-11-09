#include <iostream>
#include <string>
#define ll long long
using namespace std;

int main(){
	string s;
	ll ans = 0 , temp = 1;
	cin >> s;
	s+="1";
	for (int i = 1 ; i<s.size() ; i++){
		ans = max(ans,temp);
		if (s[i] == s[i-1]) {
			temp++;
		}
		else{
			temp = 1;
		}
	}
	cout << ans;
} 