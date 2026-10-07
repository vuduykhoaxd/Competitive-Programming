#include <iostream>
#include <iomanip>
using namespace std;
int main(){
	double a,b;cin >> a >> b;
	if (a == 0 && b == 0) cout << "Vo So Nghiem";
	else if (a == 0 && b != 0) cout << "Vo Nghiem";
	else cout << fixed << setprecision(3) << -b/a;
}