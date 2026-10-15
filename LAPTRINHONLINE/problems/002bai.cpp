#include <iostream>
#include <cstring>
#define FASTIO ios_base::sync_with_stdio(0);cin.tie(0);
#define MAX 1000005
using namespace std;
int prime[MAX];
void sieve(){
	memset(prime , 1 , sizeof(prime));
	prime[0] = prime[1] = 0;
	for(int i = 2 ; i*i <= MAX ; i++){
		if (prime[i])
			for (int j = i*i ; j<=MAX ; j+=i) prime[j] = 0;
	}
}
int main(){
	FASTIO
	sieve();
	int n; cin >>n;
	while (n--){
		int a , b;
		cin >> a >> b;
		for (int i = a ; i<= b ; i++) if (prime[i]) cout << i << " ";
		cout << "\n";
	}
}