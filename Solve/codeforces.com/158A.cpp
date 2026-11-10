#include <iostream>
#define MAX 55
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
    int n , k , arr[MAX] , ans = 0;
    cin >> n >> k;
    for (int i = 1 ; i<= n ; i++) cin >> arr[i];
	for (int i = 1 ; i<= n ; i++) if (arr[i] >= arr[k] && arr[i] > 0) ans++;
	cout << ans;
}
