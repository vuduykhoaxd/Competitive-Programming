// Limit n<=17

#include <iostream>
using namespace std;

int main(){
	int n; cin >> n;
	if (n==1) cout << 1;
	else if (n==2) cout << 2;
	else if (n==3) cout << 6;
	else if (n==4) cout << 24;
	else if (n==5) cout << 120;
	else if (n==6) cout << 720;
	else if (n==7) cout << 5040;
	else if (n==8) cout << 40320;
	else if (n==9) cout << 362880;
	else if (n==10) cout << 3628800;
	else if (n==11) cout << 39916800;
	else if (n==12) cout << 479001600;
	else if (n==13) cout << 6227020800;
	else if (n==14) cout << 87178291200;
	else if (n==15) cout << 1307674368000;
	else if (n==16) cout << 20922789888000;
	else cout << 355687428096000;
	return 0;
}