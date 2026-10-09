#include <iostream>
#include <algorithm>
#include <string>
using namespace std;

int main(){
	int n;
	cin >> n;
	if (n==1){
		cout << 1;
		return 0;
	}
	if (n==4){
		cout << "2 4 1 3";
		return 0;
	}
	if (n<4 && n> 1){
		cout << "NO SOLUTION";
		return 0;
	}
	string ans1 ="",ans2 = "";
	for (int i = 1 ; i<= n ; i++){
		if (i%2==1){
			ans1+=to_string(i) + " ";
		}
		else{
			ans2+=to_string(i) + " ";
		}
	}
	cout << ans1 + ans2;
}