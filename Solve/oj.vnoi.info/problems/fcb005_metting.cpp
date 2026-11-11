#include <iostream>
#include <string>
using namespace std;

int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
	int n; char c;
	cin >> n >> c;
	while (n--){
		string str;
		cin >> str;
		bool mark = false;
		for (char x : str){
			if (x == c) {
				mark = true;
				break;
			}
		}
		if (!mark) cout << str << "\n";
		
	}

}