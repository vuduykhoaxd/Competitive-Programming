#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
    string str;cin >> str;
    string lower = "",
    	   upper = "";
    for (char c : str){
    	if (int(c) >= 97) lower += c;
    	else upper+=c;
	}
	sort(lower.begin() , lower.end() , greater<>());
	sort(upper.begin() , upper.end() , greater<>());
    cout << upper+lower;
}