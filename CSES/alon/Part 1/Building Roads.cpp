#include <iostream>
#include <queue>
#include <bits/stdc++.h>
using namespace std;
long long n ,m , ans = 0;
bool visited[200001];
vector<int> arr[200001];
vector<int> lines;
void inp(){
    cin >> n >> m;
    for (int i = 1 ; i<=m ; i++){
        int a,b;
        cin >> a >> b;
        arr[a].push_back(b);
        arr[b].push_back(a);
    }
    memset(visited , false , sizeof(visited));
}
void dfs(int u){
    visited[u] = true;
    for (int c : arr[u]){
        if (!visited[c]){
            dfs(c);
        }
    }
}
int main(){
    inp();
    for (int i = 1 ; i<= n ; i++){
        if (!visited[i]){
            ans++;
        lines.push_back(i);
            dfs(i);
        }
    }
    cout << ans - 1 << "\n";
    for (int i = 0 ; i < lines.size() -1 ; i++){
        cout << lines[i] << " " << lines[i+1] << "\n";
    }
    return 0;
}
