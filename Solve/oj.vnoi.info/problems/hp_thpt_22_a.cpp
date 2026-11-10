#include <iostream>
#include <string>
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
    string str;cin >> str;
    int ans = 0;
    for (int i = 0 ; i < str.size() ; i++) if (str.substr(i , 5) == "virus") ans++;
	cout << ans;
}