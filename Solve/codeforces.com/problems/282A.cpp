#include <iostream>
#include <string>
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
    int n , ans = 0 ; cin >> n;
    while (n--){
    	string val ; cin >> val;
    	if (val == "++X" || val == "X++") ans++;
    	else ans--;
	}
	cout << ans;
}