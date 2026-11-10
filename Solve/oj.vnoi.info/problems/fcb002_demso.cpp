#include <iostream>
#include <string>
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
    int n , a = 0 , d = 0;cin >> n;
    while(n--){
    	string x; cin >> x;
    	if (x[0] == '-') a++;
    	else if (x[0] != '0') d++;
	}
	cout << a << " " << d;
}