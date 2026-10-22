#include <iostream>
#include <climits>
#define ll long long
#define MAX 50005
using namespace std;

ll n,q,arr[MAX];
ll querry(int i , int j){
	ll cur = 0 , ans = LLONG_MIN;
	for (int idx = i ; idx <= j ; idx++){
		cur = max(arr[idx], cur+arr[idx]);
		ans = max(ans,cur);
	}
	return ans;
}
int main(){
	ios_base::sync_with_stdio(0);cin.tie(0);
	cin >> n;
	for (int i = 1 ; i<= n ; i++) cin >> arr[i];
	cin >> q;
	while (q--){
		ll type , l ,r;
		cin >> type >> l >> r;
		if (type == 0) arr[l] = r;
		else cout << querry(l,r) << "\n";
	}
	return 0;
}
/*

#include <bits/stdc++.h>
using namespace std;

#define ll long long
#define MAX 50005

ll n, q, arr[MAX];

struct Node {
    ll sum, pref, suff, best;
};

Node st[4 * MAX];

Node merge(Node L, Node R) {
    Node res;

    res.sum  = L.sum + R.sum;
    res.pref = max(L.pref, L.sum + R.pref);
    res.suff = max(R.suff, R.sum + L.suff);
    res.best = max({L.best, R.best, L.suff + R.pref});

    return res;
}

void build(int id, int l, int r) {
    if (l == r) {
        st[id] = {arr[l], arr[l], arr[l], arr[l]};
        return;
    }

    int mid = (l + r) / 2;

    build(id * 2, l, mid);
    build(id * 2 + 1, mid + 1, r);

    st[id] = merge(st[id * 2], st[id * 2 + 1]);
}

void update(int id, int l, int r, int pos, ll val) {
    if (l == r) {
        st[id] = {val, val, val, val};
        return;
    }

    int mid = (l + r) / 2;

    if (pos <= mid)
        update(id * 2, l, mid, pos, val);
    else
        update(id * 2 + 1, mid + 1, r, pos, val);

    st[id] = merge(st[id * 2], st[id * 2 + 1]);
}

Node query(int id, int l, int r, int u, int v) {
    if (u == l && v == r)
        return st[id];

    int mid = (l + r) / 2;

    if (v <= mid)
        return query(id * 2, l, mid, u, v);

    if (u > mid)
        return query(id * 2 + 1, mid + 1, r, u, v);

    Node L = query(id * 2, l, mid, u, mid);
    Node R = query(id * 2 + 1, mid + 1, r, mid + 1, v);

    return merge(L, R);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    cin >> n;

    for (int i = 1; i <= n; i++)
        cin >> arr[i];

    build(1, 1, n);

    cin >> q;

    while (q--) {
        int type, l;
        ll r;

        cin >> type >> l >> r;

        if (type == 0) {
            update(1, 1, n, l, r);
        } else {
            cout << query(1, 1, n, l, (int)r).best << '\n';
        }
    }

    return 0;
}

*/
