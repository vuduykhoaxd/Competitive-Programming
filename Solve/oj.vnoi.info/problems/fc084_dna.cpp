#include <iostream>
#include <string>
using namespace std;
int main(){
    ios_base::sync_with_stdio(0);cin.tie(0);
	string base = ""; cin >> base;
	string dna = "";
	int n,idx = 1; cin >> n;
	while (n--){
		cin >> dna;
		int diff = 0;
		if (base.size() == dna.size()){
			for (int i = 0 ; i < base.size() ; i++){
				if (base[i] != dna[i]){
					diff++;
					if (diff > 2) continue;
				}
			}
			if (diff <= 2) cout << idx << " ";
		}
		idx++;
	}
}