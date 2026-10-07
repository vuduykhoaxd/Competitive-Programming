#include <iostream>
#include <iomanip>
using namespace std;
int main() {
    double c;cin >> c;
    cout << fixed << setprecision(2) <<  c * 9.0 / 5.0 + 32;
}