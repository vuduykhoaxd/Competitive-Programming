#include <iostream>
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
    int n , ans = 0; cin >> n;
    while (n--){
    	int a,b,c;
    	cin >> a >> b >> c;
    	if (a+b+c >= 2) ans++;
	}
	cout << ans;
}