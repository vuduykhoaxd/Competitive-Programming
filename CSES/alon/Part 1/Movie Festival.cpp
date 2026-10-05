#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Movie {
    long long start, end;
};

// Hàm so sánh để sắp xếp theo thời gian kết thúc tăng dần
bool compareMovies(const Movie &a, const Movie &b) {
    return a.end < b.end;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (!(cin >> n)) return 0;

    vector<Movie> movies(n);
    for (int i = 0; i < n; i++) {
        cin >> movies[i].start >> movies[i].end;
    }

    // Bước quan trọng nhất: Sắp xếp theo endtime
    sort(movies.begin(), movies.end(), compareMovies);

    long long ans = 0;
    long long last_end_time = 0;

    for (int i = 0; i < n; i++) {
        if (movies[i].start >= last_end_time) {
            ans++;
            last_end_time = movies[i].end;
        }
    }

    cout << ans << "\n";

    return 0;
}