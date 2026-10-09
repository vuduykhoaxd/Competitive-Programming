#include <iostream>
#define ll long long

using namespace std;

int main(){
	ll n , s = 0;
	cin >> n;
	for (int i = 1 ; i<= n - 1 ; i++){
		ll a;
		cin >> a;
		s+=a;
	}
	cout << (n*n + n)/2 - s;
}