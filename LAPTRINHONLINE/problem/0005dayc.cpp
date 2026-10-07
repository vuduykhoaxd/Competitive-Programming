#include <iostream>
#define ll long long
using namespace std;

int main(){
	ll n;cin >> n;
	if (n %2 == 0){
		cout << (n/2)*(n+1);
	}
	else{
		cout << ((n-1)/2)*n + n;
	}
	
	
}