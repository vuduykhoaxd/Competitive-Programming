#include <iostream>
#include <string>
using namespace std;
string unzip(string s  , int ccompress){
    string res = "";
    for(int i = 1 ; i<= ccompress ; i++) res += s;
    return res;
}
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
    string s,ss = ""; cin >> s;
    int compress = s.size();
    int idx = 0;
    while (ss != s){
        ss+=s[idx];
        if (s == unzip(ss , compress/ss.size() )  ){
            cout << compress/ss.size() << ss;
            return 0;
        }
        idx++;
    }
}


