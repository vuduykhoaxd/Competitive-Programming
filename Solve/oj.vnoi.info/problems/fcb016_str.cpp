#include <iostream>
using namespace std;

int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
	char a ,b; cin >> a >> b;
	if (a <= b) for (int i = 1 ; i <= int(b) - 48 ; i++) cout << a;
	else for (int i = 1 ; i <= int(a) - 48 ; i++) cout << b;
}