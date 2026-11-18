#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
#define MAX 100
using namespace std;
struct attemp{
    string userpass;
    int count;
};
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
    int n; cin >> n;
    vector<attemp> login;
    vector<string> listuserpass;
    for (int i = 1 ; i<= n ; i++){
        string user, pass;
        cin >> user >> pass;
        attemp xd;
        xd.userpass = user+pass;
        xd.count = 0;
        login.push_back(xd);
    }
    int k; cin >> k;
    while (k--){
        string user, pass;
        cin >> user >> pass;
        string userpass = user+pass;
        for(int i = 0 ; i< n ; i++){
            if (login[i].userpass == userpass) login[i].count++;
        }
    }
    for (auto c : login){
        cout << c.count << " ";
    }
}


