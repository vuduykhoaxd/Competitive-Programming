#include <iostream>
#include <string>
using namespace std;

int main(){
	int n;
	cin >> n;
	for (int i = 1 ; i<= n ; i++){
		if (i%2 != 0 ){
			cout << i << "\n";
		}
		else{
			string s ="";
			if (i%2 == 0){
				s = "L";
				if (i%4==0){
					s = "LT";
					if (i%8==0){
						s="LTO";
						if (i%16==0){
							s= "LTOL";
						}
					}
				}
			}
			cout << s << "\n";
		}
	}
	
}