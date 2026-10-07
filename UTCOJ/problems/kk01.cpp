#include <iostream>
#include <string>
#define ll long long
using namespace std;

int main(){
	string str;	cin >> str;
	if ( str.find("A") == string::npos){
		cout << "A";
	}
	else if ( str.find("B") == string::npos){
		cout << "B";
	}
	else if ( str.find("C") == string::npos){
		cout << "C";
	}
	else if ( str.find("D") == string::npos){
		cout << "D";
	}
	else if ( str.find("E") == string::npos){
		cout << "E";
	}
	else if ( str.find("F") == string::npos){
		cout << "F";
	}
	else if ( str.find("G") == string::npos){
		cout << "G";
	}
	else if ( str.find("H") == string::npos){
		cout << "H";
	}
	else if ( str.find("I") == string::npos){
		cout << "I";
	}
	else {
		cout << "J";
	}
}