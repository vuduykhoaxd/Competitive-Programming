#include <iostream>
#include <vector>
#include <map>
#include <climits>
#define ll long long
#define MAX 100005
#define LOG 19
#define end "\n"
using namespace std;
struct MinMax{
	ll min;
	ll max;
};
ll numNodes , querry , depth[MAX] , par[MAX][LOG + 1] , mn[MAX][LOG + 1] , mx[MAX][LOG + 1];
vector<ll> adj[MAX];
map<pair<ll,ll>,ll> edge;


void dfs(ll u){
	for (ll v : adj[u]){
		if (v != par[u][0]){
			depth[v] = depth[u] + 1;
			par[v][0] = u;
			mn[v][0] = edge[{u,v}];
			mx[v][0] = edge[{u,v}];
			dfs(v);
		}
	}
}
ll lca(ll u , ll v){
	if (depth[u] > depth[v]) return lca(v,u);
	ll diff = depth[v] - depth[u];
	for (int i = 0 ; i<= LOG ; i++){
		if (diff & (1LL << i)){
			v = par[v][i];
		}
	}
	if (u==v) return v;
	for (int i = LOG; i>=0 ; i--){
		if (par[v][i] != par[u][i]){
			v=par[v][i];
			u=par[u][i];
		}
	}
	return par[v][0];
}
MinMax get_min_max(ll u , ll k){
	MinMax res;
	res.min = LLONG_MAX;
	res.max = LLONG_MIN;
	
	for (int i = 0 ; i <= LOG ; i++){
		if (k & (1LL << i)){
			res.min = min(res.min , mn[u][i]);
			res.max = max(res.max , mx[u][i]);
			u = par[u][i];
		}
	}
	return res;
}
void _minmax(ll u , ll v){
	ll uv = lca(u,v);
	ll uk = depth[u] - depth[uv];
	ll vk = depth[v] - depth[uv];
	MinMax res1 = get_min_max(u, uk);
	MinMax res2 = get_min_max(v,vk);
	cout << min(res1.min , res2.min) << " " << max(res1.max , res2.max) << end;
}
void inp(){
	cin >> numNodes;
	for (int i = 1 ; i< numNodes ; i++){
		ll a,b,c;
		cin >> a >> b >> c;
		adj[a].push_back(b);
		adj[b].push_back(a);
		edge[{a,b}] = c;
		edge[{b,a}] = c;
	}
}

void prepare(){
	depth[1] = 1;
	par[1][0] = 1;
	mn[1][0] = LLONG_MAX;
	mx[1][0] = LLONG_MIN;
	dfs(1);
	for (int j = 1 ; j<= LOG ; j++){
		for (int i = 1 ; i<= numNodes ; i++){
			par[i][j] = par[par[i][j-1]][j-1];
			
			mn[i][j] = min(
				mn[i][j-1],
				mn[par[i][j-1]][j-1]
			
			);
			mx[i][j] = max(
				mx[i][j-1],
				mx[par[i][j-1]][j-1]
			
			);
		
		}
	}

}

void solve(){
	cin >> querry;
	while (querry--){
		ll u,v;
		cin >> u >> v;
		_minmax(u,v);
	}

}

int main(){
	ios_base::sync_with_stdio(0);cin.tie(0);
	inp();
	prepare();
	solve();
}
