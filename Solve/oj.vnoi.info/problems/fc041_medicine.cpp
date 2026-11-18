#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
    string medname;
    cin >> medname;
    unordered_map<char , int> mp;
    for (auto c : medname) mp[c]++;
    cout << mp.size();
}


