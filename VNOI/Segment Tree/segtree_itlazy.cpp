#include <iostream>
#include <climits>
#define ll long long
#define FASTIO ios_base::sync_with_stdio(0);cin.tie(0);
#define MAX 100005
using namespace std;

ll n,q,arr[MAX] , tree[4*MAX] , lazy[4*MAX];

void build(int node , int l , int r){
	if (l == r) tree[node] = arr[l];
	else{
		int m = (l+r)/2;
		build(2*node ,  l , m);
		build(2*node + 1 , m+1, r);
		tree[node] = max(tree[2*node],tree[2*node + 1]);
	}
}



void push(int node, int l, int r){
    if (lazy[node] == 0 || l == r) {
        if (l == r) lazy[node] = 0;
        return;
    }

    int L = 2*node;
    int R = 2*node + 1;

    tree[L] += lazy[node];
    tree[R] += lazy[node];

    lazy[L] += lazy[node];
    lazy[R] += lazy[node];

    lazy[node] = 0;
}



void update(int node, int l, int r, int u, int v, ll val){
    if (v < l || u > r) return;

    push(node, l, r);

    if (l >= u && r <= v){
	    tree[node] += val;
	    lazy[node] += val;
	    return;
	}

    int m = (l+r)/2;
    update(2*node, l, m, u, v, val);
    update(2*node+1, m+1, r, u, v, val);

    tree[node] = max(tree[2*node], tree[2*node+1]);
}

ll querry(int node, int l, int r, int u, int v){
    if (v < l || u > r) return LLONG_MIN;

    push(node, l, r);

    if (l >= u && r <= v) return tree[node];

    int m = (l+r)/2;
    ll s1 = querry(2*node, l, m, u, v);
    ll s2 = querry(2*node+1, m+1, r, u, v);

    return max(s1, s2);
}

void input(){
	cin >> n;
	for (int i = 1 ; i<= n ; i++) cin >> arr[i];
}

void prepare(){
	build(1,1,n);
}

void output(){
	cin >> q;
    while (q--){
    	ll cmd;
    	cin >> cmd;
    	if (cmd == 1){
    		ll a,b,val;
    		cin >> a >> b >> val;
    		update(1,1,n,a,b,val);
		}
		else{
			ll a,b;
			cin >> a >> b;
			cout << querry(1,1,n,a,b) << "\n";
		}
	}
}

int main(){
	FASTIO
    input();
    prepare();
    output();
    return 0;
}