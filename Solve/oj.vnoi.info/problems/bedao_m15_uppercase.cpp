#include <iostream>
#include <string>
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
	string str = "";
	while (cin >> str){
		str[0] = toupper(str[0]);
		cout << str;
	}
}