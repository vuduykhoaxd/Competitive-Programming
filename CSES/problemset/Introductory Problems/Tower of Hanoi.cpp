#include <iostream>
#include <math.h>
using namespace std;
void toh(int n , char COTA , char COTB ,char COTC ){
	if (n == 1){
		cout << COTA << " " << COTC << "\n";
	}
	else {
		toh(n-1 , COTA , COTC , COTB);
		cout << COTA << " " << COTC << "\n";
		toh(n-1,  COTB , COTA , COTC);
	}
}

int main(){
	int n;cin >> n;
	char COTA = '1';
	char COTB = '2';
	char COTC = '3';
	cout << pow(2,n) - 1 << "\n";
	toh(n , COTA , COTB , COTC);
}