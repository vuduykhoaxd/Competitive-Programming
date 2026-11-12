#include <iostream>
#include <climits>
#include <vector>
#include <algorithm>
#include <string>
using namespace std;

int main(){
    int t; cin >> t;
    while (t--){
        int n;
        cin >> n;
        vector<long long> arr;
        for (int i = 0 ; i< n ; i++){
            long long hi; cin >> hi;
            arr.push_back(hi);
        }
        sort(arr.begin() ,arr.end());
        bool toggle = true;
        int r = 0; long long prevr = LLONG_MIN;
        int l = 0; long long prevl = LLONG_MIN;
        string str1 = "";
        string str2 = "";
        for (auto hi : arr){
            if (toggle){ // l
                if (hi > prevl) l++;
                prevl = hi;
                str1 += to_string(hi);
                str1 += " ";
                toggle = !toggle;
            }
            else {
                if (hi > prevr) r++;
                prevr = hi;
                string temp =  " ";
                temp += str2;
                str2 = to_string(hi);
                str2 += temp;
                toggle = !toggle;
            }
        }
        cout << r + l << "\n" << str1 + str2 << "\n";
    }
}
