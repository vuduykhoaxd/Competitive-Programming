#include <iostream>
#define ll long long

using namespace std;
void solve(ll n){
	cout << n << " ";
	if (n==1){
		return;
	}
	else{
		if (n%2 == 0) solve(n/2);
		else solve(3*n + 1);
	}
}
int main(){
	ll n;
	cin >> n;
	solve(n);
}