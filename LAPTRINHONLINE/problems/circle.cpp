#include <iostream>
#include <iomanip>
#define PI 3.14
using namespace std;

int main(){
	double r; cin >> r;
	if (r < 0) cout << "NO CIRCLE";
	else cout << fixed << setprecision(2) << (double)2*PI*r << "\n" << (double)PI*r*r;
}