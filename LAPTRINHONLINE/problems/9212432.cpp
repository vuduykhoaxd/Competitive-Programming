#include <iostream>
#include <vector>
#include <algorithm>
#define FASTIO ios_base::sync_with_stdio(0);cin.tie(0);

using namespace std;
struct BKS{
	int sign;
	double cap;
	char cpn;
};
bool cmp(BKS a , BKS b){
	return a.cap < b.cap;
}
vector<BKS> car;
int main(){
	FASTIO
	int n , ans = 0;cin>>n;
	while (n--){
		BKS A;
		cin >> A.sign >> A.cap >> A.cpn;
		if (A.cpn == 'B' && A.sign%3 == 0) ans++;
		car.push_back(A);
	}
	stable_sort(car.begin(), car.end() , cmp);
	cout << ans << "\n";
	for (int i = 0 ; i < 3 ; i++){
		cout << car[i].sign << "\n";
	}
	return 0;
}