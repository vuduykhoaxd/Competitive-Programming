#include <iostream>
#include <vector>
#include <map>
#define ll long long
#define mp make_pair
#define LOG 10
#define MAX 1010
using namespace std;

ll numNodes , querry , depth[MAX] ,dist2root[MAX] ,par[MAX][MAX];
vector <ll> adj[MAX];
map<pair<ll,ll> , ll> nodedistance;

void dfs(ll u){
	for (ll v : adj[u]){
		if (v != par[u][0]){
			par[v][0] = u;
			depth[v] = depth[u] + 1;
			dist2root[v] = dist2root[u] + nodedistance[mp(u,v)];
			dfs(v);
		}
	}
}
void lca(ll a, ll b){
	if (depth[a] > depth[b] ) return lca(b,a);
	
	for (int j = 0 ; j <= LOG ; j++){
		for (int i = 1 ;i<= numNodes ; i++){
			par[i][j] = par[par[i][j-1]][j-1];
		}
	}
}
void input(){
	cin >> numNodes >> querry;
	for (int i = 1 ; i<= numNodes - 1 ; i++){
		ll a,b,c;
		cin >> a >> b >> c;
		adj[a].push_back(b);
		adj[b].push_back(a);
		nodedistance[ mp(a,b) ] = c;
		nodedistance[ mp(b,a) ] = c;
	}	
	
}
void prepare(){
	depth[1] = 1;
	par[1][0] = 1;
	dfs(1);
}
void solve(){
	
}
int main(){
	input();
	prepare();
	solve();
	return 0;
}