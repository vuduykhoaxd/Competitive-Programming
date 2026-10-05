#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
#include <cstring>
using namespace std;
long long n, m;
vector<int> arr[100001];
int d[100001];
bool visited[100001];
void inp()
{
    cin >> n >> m;
    for (int i = 1; i <= m; i++)
    {
        int x, y;
        cin >> x >> y;
        arr[x].push_back(y);
       // arr[y].push_back(x);
    }
    memset(visited, false, sizeof(visited));
}
void bfs(int u){
    visited[u] = true;
    queue<int> q;
    q.push(u);
    while (!q.empty()){
        int v = q.front();
        q.pop();
        for (auto c : arr[v]){
            if (!visited[c]){
                visited[c] = true;
                q.push(c);
                d[u]++;
            }
        }

    }
}

void dfs(int u){
    visited[u] = true;
    for (int c  : arr[u]){
        if (!visited[c]){
            dfs(c);
        }
    }
}
void solve()
{
    for (int i = 1 ; i <= n ; i++){
        //if (!visited[i]){
            bfs(i);
            //dfs(i);
            memset(visited , false , sizeof(visited));
        //}
    }
    for (int i = 1 ; i <= n ; i++){
        cout << d[i] + 1 << " ";
    }
}
int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    inp();
    solve();
    return 0;
}
