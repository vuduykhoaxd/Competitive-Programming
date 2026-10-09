#include <iostream>

using namespace std;

bool is_prime(int n){
	if (n < 2) return false;
	if (n == 2 || n == 3) return true;
	if (n % 2 == 0 || n% 3 == 0) return false;
	for (int i = 5 ; i*i <= n ; i+=6){
		if (n%i == 0 || n%(i+2) == 0) return false;
	}
	return true;
}
int main(){
	int n;
	cin >> n;
	for (int i = 1 ; i*i <= n ; i++){
		if (is_prime(i) && n%i == 0 && is_prime(n/i)){
			cout << "true"; return 0;
		}
	}
	cout << "false";
}