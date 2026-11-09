#include <iostream>
#include <vector>
#include <stack>
#define end "\n"
#define ll long long
using namespace std;
int main(){
	ll n ; cin >> n;
	vector<ll> adj;
	for (int i = 0 ; i< n ; i++){
		ll x;cin >>x;
		adj.push_back(x);
	}
	
	vector<ll> NGE(adj.size(), -1);
	vector<ll> NGE_idx(adj.size() , -1);
	stack<ll> st;
	for (int i = adj.size() - 1 ; i>=0 ; i--){
		while (!st.empty() && adj[i] < adj[st.top()]){
			NGE[st.top()] = adj[i];
			NGE_idx[st.top()] = i;
			st.pop();
		}
		st.push(i);
	}
//	for (int i = 0 ; i< NGE.size() ; i++){
//		cout << NGE[i] << " ";
//	}
	cout << end;
	for (int i = 0 ; i< NGE_idx.size() ; i++){
		cout << NGE_idx[i]+1 << " ";
	}
	
}