#include <iostream>
#include <cstring>
using namespace std;
long long n,q ,a ,arr[200001] , pre[200001] ,prevz[200001];
    
int main(){
    ios_base::sync_with_stdio(NULL);
    cin.tie(nullptr);

    memset(arr,0, sizeof(arr));
    memset(pre,0, sizeof(pre));
    memset(prevz,0, sizeof(prevz));
    cin >> n >> q;
    for (int i = 1 ; i<= n ; i++){
    	cin >> arr[i];
    	pre[i]= arr[i] + pre[i-1];
	}
	while (q--){
		long long x,y,z;
		cin >> x >> y >> z;
		if (x == 1){
			prevz[y] = arr[y];
			arr[y] = z;
			long long diff = arr[y] - prevz[y];
			for (int i =y ; i<= n ; i++){
				pre[i]+=diff;
			}
		}
		else{
			cout << pre[z] - pre[y-1] << "\n";
		}
	}
    
}
