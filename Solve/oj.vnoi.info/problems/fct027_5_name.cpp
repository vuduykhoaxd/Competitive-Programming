#include <iostream>
#include <string>
using namespace std;

int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
	int n;cin>>n;
	string name = "";
	cin.ignore();
	while (getline(cin , name)){
		bool nword = true;
		bool first = true;
		for (auto c : name){
			if (nword && c != ' ') {
				if (first){
					cout << char(toupper(c));
					first = !first;
				}
				else if (c!=' ') cout << " " << char(toupper(c));
				nword = false;
			}
			else if (!nword && c!= ' '){
				cout << char(tolower(c));
			}
			else if (c == ' '){
				nword = true;
			}
		}
		cout << "\n";
	}

}