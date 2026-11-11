#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
    string str = "";cin >> str;
   	bool miniumL = false,
   		 hasUpper = false,
   		 hasLower = false,
   		 hasDigit = false,
   		 hasSpecial = false;
   	
   	if (str.length() >= 8) miniumL = true;
	else { cout << "NO"; return 0; } 
    for (int i = 0 ; i < str.length() ; i++){
    	if (i < str.length() - 1 && str[i] == str[i+1]) { cout << "NO"; return 0; } 
    	if (str[i] >= 'a' && str[i] <= 'z') hasLower = true;
    	else if (str[i] >= 'A' && str[i] <= 'Z') hasUpper = true;
    	else if (str[i] >= '0' && str[i] <= '9') hasDigit = true;
    	else hasSpecial = true;
	}
	if (miniumL && hasUpper && hasLower && hasDigit && hasSpecial ) cout << "YES";
	else cout << "NO";
}