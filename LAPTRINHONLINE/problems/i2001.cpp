#include <iostream>
#include <iomanip>
#define PI 3.14159
using namespace std;
int main(){
	double r;
	cin >> r;
	cout << fixed << setprecision(4) << "A=" << PI*r*r;
}