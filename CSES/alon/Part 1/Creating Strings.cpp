#include <iostream>
#include <string>
#include <sstream>
#include <algorithm>
#include <map>

using namespace std;
long long factorial(long long x){
    long long sum = 1;
    for (int i = 1 ; i<= x ; i++){
        sum = sum*i;
    }

    return sum;
}
long long tongsocach(long long n ,map<char , int> mp){
    long long temp1 = factorial(n);
    long long temp2 = 1;
    for ( auto c : mp){
        temp2 = temp2*factorial(c.second);
    }
    return temp1/temp2;
}
int main(){
    int n = 0;
    long long soluong = 0;
    string s = "";
    map <char , int> mp;
    
    cin >> s;

    n = s.length();
    for (int i = 0 ; i < n ; i++)
    {
        mp[s[i]]++;
    }
    soluong  = tongsocach(n,mp);
    cout << soluong << "\n";
    sort(s.begin() ,s.end());
    do {
        cout << s << "\n";
    } while (next_permutation(s.begin() , s.end()));
}
