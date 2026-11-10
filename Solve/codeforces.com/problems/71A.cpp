#include <iostream>
#include <string>
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
    int n; cin >>n;
    while (n--){
    	string str = "";
    	cin >> str;
    	if (str.size() > 10){
    		cout << str[0] << to_string(str.size()-2) << str[str.size()-1] << "\n";
		}
		else cout << str << "\n";
	}
}