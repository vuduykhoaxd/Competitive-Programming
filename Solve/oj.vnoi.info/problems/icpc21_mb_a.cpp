#include <iostream>
#include <string>
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
	string filename = "";cin >> filename;
	if (filename.length()>= 3 &&
		tolower(filename[filename.length() - 1])== 'y' &&
		tolower(filename[filename.length() - 2] )== 'p' &&
		filename[filename.length() - 3] == '.')
		cout << "yes";
	else cout << "no";
}