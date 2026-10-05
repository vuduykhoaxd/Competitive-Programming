#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int pos[200001];

    for (int i = 1; i <= n; i++) {
        int x;
        cin >> x;
        pos[x] = i;
    }

    int roundz = 1;

    for (int i = 1; i < n; i++) {
        if (pos[i] > pos[i + 1]) {
            roundz++;
        }
    }

    cout << roundz;
}
/*
arr : 4 2 1 5 3
pos : 3 2 5 1 4




*/