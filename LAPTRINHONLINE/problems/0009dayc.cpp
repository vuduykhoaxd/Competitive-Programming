#include <iostream>
#define ll long long
using namespace std;
int main(){
	ll a,b;
	cin >> a >> b;
	if (a%b == 0)
		cout << a -b;
	else
		cout<<a - (a%b);
}