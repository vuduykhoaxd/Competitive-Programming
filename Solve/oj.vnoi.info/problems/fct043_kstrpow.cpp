#include <iostream>
#include <string>
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
	string sub = "", temp = "", str = "";
    int K;
	cin >> sub >> str >> K;
	for (int i = 1 ; i<= K ; i++){
		temp+=sub;
	}
	if (temp == str) cout << "YES";
	else cout << "NO";

}