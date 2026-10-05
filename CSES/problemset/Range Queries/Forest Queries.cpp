#include <iostream>
#include <cstring>
#include <string>
#include <sstream>
using namespace std;
long long n , q;
    long long prefix[1001][1001];
    string s = "";
int main(){
    ios_base::sync_with_stdio(NULL);
    cin.tie(nullptr);

    memset(prefix,0,sizeof(0));
    cin >> n >> q;
    for (int i = 1 ; i <= n ; i++){
        s="";
        cin >> s;
        for (int j = 0 ; j<s.length();j++){
            if (s[j] == '*'){
                prefix[i][j+1] = 1 + prefix[i-1][j+1] + prefix[i][j] - prefix[i-1][j];
            }
            else{
                prefix[i][j+1] = 0 + prefix[i-1][j+1] + prefix[i][j] - prefix[i-1][j];
            }
        }
    }
    while (q--){
        int x1 ,y1 ,x2,y2;
        cin >> x1 >> y1 >> x2 >> y2;
        cout << prefix[x2][y2] -
                prefix[x2][y1-1] -
                prefix[x1-1][y2] +
                prefix[x1-1][y1-1]<< "\n";
    }

}
