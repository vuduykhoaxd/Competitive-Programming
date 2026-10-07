#include <iostream>
using namespace std;
bool is_prime(long long n){
	if (n == 0 || n == 1) return false;
	if (n ==2 || n == 3) return true;
	if (n%2 == 0 || n% 3 == 0) return false;
	for (int i = 5 ; i*i<=n ; i+= 6){
		if (n%i == 0 || n%(i+2) == 0){
			return false;
		}
	}
	return true;
}
int main(){
	long long n;
	cin >> n;
	if (is_prime(n)){
		cout << "YES";
	}
	else{
		cout << "NO";
	}
}