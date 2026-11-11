#include <iostream>
#include <string>
using namespace std;

int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
	string a,b;
	cin >> a >> b;
	for (int i = 0 ; i<a.size() ; i++){
		if (tolower(a[i])> tolower(b[i])){
			cout << 1;
			return 0;	
		}
		else if (tolower(a[i]) < tolower(b[i])){
			cout << -1;
			return 0;
		}
	}
	cout << 0;
}