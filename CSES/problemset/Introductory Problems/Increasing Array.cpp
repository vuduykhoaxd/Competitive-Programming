#include <iostream>
#define ll long long
using namespace std;

int main(){
	ll n ,ans = 0 ,prev = 0; cin >> n;
	for (int i = 1 ; i<= n ; i++){
		ll a , diff = 0;cin >> a;
		if (i>1){
			if (a<prev) {
				ans+=prev-a;
				diff = prev-a;
			}		
		}	
		prev = a + diff;
	}
	cout << ans;
} 