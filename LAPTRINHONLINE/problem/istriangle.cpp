#include <iostream>
#include <iomanip>
#include <math.h>
using namespace std;

int main(){
	double a,b,c;
	cin >> a >> b >> c;
	if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a){
		double p = (a+b+c)/2;
		cout << fixed << setprecision(2) << (double)(a+b+c) << "\n" << (double)sqrt(p*(p-a)*(p-b)*(p-c));
	}
	else cout << "khong la tam giac";
}