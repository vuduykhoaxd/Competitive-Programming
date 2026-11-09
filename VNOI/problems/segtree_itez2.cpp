#include <iostream>
#define ll long long
#define FASTIO ios_base::sync_with_stdio(0);cin.tie(0);
#define MAX 100005

using namespace std;
ll n , q ,arr[MAX] , seg[MAX*4];
void build(int v , int l , int r){
	if (l == r) seg[v] = arr[r];
	else{
		int m = (l+r)/2;
		build(2*v , l , m);
		build(2*v + 1 , m+ 1  ,r);
		seg[v] = seg[2*v] + seg[2*v + 1];
	}
}

void update(int v , int l , int r , int idx , int val){
	if(l == r) seg[v] = val;
	else{
		int m = (l+r)/2;
		if (idx <= m) update(2*v , l , m , idx , val);
		else update(2*v + 1 , m+1 ,r , idx, val);
		seg[v] = seg[2*v] + seg[2*v + 1];
	}
}

ll querry( int v , int segl , int segr , int l , int r ){
	if (l > r) return 0;
	if (segl == l && segr == r) return seg[v];
	else{
		int m = (segr+segl)/2;
		int s1 = querry(2*v , segl , m , l , min(r, m));
		int s2 = querry(2*v + 1 , m+1 , segr , max ( m+1 , l) , r);
		return s1+s2;
	}
}

void input(){
	cin >> n >> q;
	for (int i = 1 ; i<= n ; i++) arr[i] = 0;	
}
void prepare(){
	build(1,1,n);
}
void output(){
	while(q--){
		ll c , x ,y;
		cin>>c >> x>>y;
		if (c == 1) update(1 , 1, n , x , y);
		else cout << querry(1 , 1,n ,x ,y) << "\n";
	}
}
int main(){
	FASTIO
	input();
	prepare();
	output();
	return 0;
}
