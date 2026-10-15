#include <iostream>
#define FASTIO ios_base::sync_with_stdio(0);cin.tie(0);
#define end "\n"
#define ll long long
#define MAX 100005
using namespace std;
ll number ,querries ,arr[MAX] , seg[4*MAX];

void build(int v , int l , int r){
	if (l == r) seg[v] = arr[l];
	else{
		int m = (l+r)/2;
		build(2*v , l , m);
		build(2*v+1 , m+1 , r);
		seg[v] = max(seg[2*v],seg[2*v + 1]);
	}
}

void update(int v , int l , int r, int idx , int val){
	if (l == r) seg[v] = val;
	else{
		int m = (l+r)/2;
		if (idx <= m) update(2*v , l , m ,idx ,val);
		else update(2*v + 1 , m+1 ,r ,idx, val);
		seg[v] = max(seg[2*v],seg[2*v + 1]);
	}
}
ll querry(ll v , ll segl , ll segr , ll l , ll r){
	if (l>r) return -1e18;
	if (segl == l && segr == r) return seg[v];
	ll m = (segr+segl)/2;
	ll s1 = querry(2*v , segl , m , l , min(r,m));
	ll s2 = querry(2*v + 1 , m+1 , segr , max(l, m+1) , r);
	return max(s1,s2);
}
void inp(){
	cin >> number;
	for (int i = 1 ; i<= number ; i++) cin >> arr[i];
}
void prepare(){
	build(1,1,number);
}
void outp(){
	cin >> querries;
	while(querries--){
		ll call , x ,y;
		cin >> call >> x >> y;
		if (call == 1) update(1 , 1, number , x , y);
		else cout << querry(1 , 1, number , x , y) << end;
	}
}
int main(){
	FASTIO
	inp();
	prepare();
	outp();
	return 0;
}
