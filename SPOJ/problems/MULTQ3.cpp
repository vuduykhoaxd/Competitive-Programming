#include <iostream>
#define ll long long
#define MAX 100005
using namespace std;
struct cnt{
	int du0,du1,du2;
};
ll n ,q, arr[MAX] , lazy[MAX*4];
cnt tree[4*MAX];
void build(int node , int l , int r){
	if (l==r) {
		tree[node].du0 = 1;
		tree[node].du1 = 0;
		tree[node].du2 = 0;
	}
	else{
		int m = (l+r)/2;
		build(2*node , l , m);
		build(2*node + 1 , m + 1 , r);
		tree[node].du0 = tree[2*node].du0 + tree[2*node + 1].du0;
		tree[node].du1 = 0;
		tree[node].du2 = 0;
	}
}
void apply(int node, int times) {
    times %= 3;
    int k = times;
    while (times--) {
        int temp = tree[node].du0;
        tree[node].du0 = tree[node].du2;
        tree[node].du2 = tree[node].du1;
        tree[node].du1 = temp;
    }

    lazy[node] = (lazy[node] + k) % 3;
}
void push(int node){
	if (lazy[node] == 0) return;
	apply(2*node , lazy[node] );
	apply(2*node + 1 , lazy[node]);
	lazy[node] = 0;	
}
void update(int node , int l , int r, int u , int v , int val){	
	if (v < l || u> r) return;
	if (u<= l && v>= r) {
		apply(node , val);
		return;
	}
	push(node);
	int m = (l+r)/2;
	update(2*node , l , m , u , v , val);
	update(2*node + 1 , m+1 , r , u , v ,val);
	tree[node].du0 = tree[2*node].du0 + tree[2*node + 1].du0;
	tree[node].du1 = tree[2*node].du1 + tree[2*node + 1].du1;
	tree[node].du2 = tree[2*node].du2 + tree[2*node + 1].du2;
}

int querry(int node , int l , int r, int  u , int v){
	if (v < l || u > r) return 0;
	if (u<= l && v>= r) return tree[node].du0;
	push(node);
	int m = (l+r)/2;
	return querry(2*node , l , m , u , v) + querry(2*node+1 , m+1 , r , u, v);
}
void input(){
	cin >> n >> q;
	for (int i = 1 ; i<= n+1 ; i++) arr[i] = 0;
}

void prepare(){
	build(1,1,n+1);
}
void output(){
	while(q--){
		int type , l, r;
		cin >> type >> l >> r;
		if (type == 0) update(1,1,n+1,l+1,r+1 ,1);
		else cout << querry(1,1,n+1,l+1,r+1) << "\n";
	}
}
int main(){
	ios_base::sync_with_stdio(0);cin.tie(0);
	input();
	prepare();
	output();
	return 0;
}