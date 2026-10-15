#include <iostream>
#define ll long long
using namespace std;
ll n;
ll solve(ll i){	
	if (i >= n)
		return n;
	return i*solve(i+1);
}
int main(){
	cin >> n;
	for (int i = 1 ; i<= n ;i++){
		cout << solve(1) << " ";
	}
}