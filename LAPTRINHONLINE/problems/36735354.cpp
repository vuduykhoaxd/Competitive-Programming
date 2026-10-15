#include <iostream>
#include <iomanip>
#include <math.h>
#define FASTIO ios_base::sync_with_stdio(0);cin.tie(0);
using namespace std;
struct pos{
	double x,y;
};
int main(){
	FASTIO
	int n; cin >> n;
	double maxdist = -1e18 , sumdist = 0;
	while (n--){
		pos shard;
		cin >> shard.x >> shard.y;
		double dist = shard.x*shard.x + shard.y*shard.y;
		if (dist > maxdist){
			maxdist = dist;
		}
		sumdist += sqrt(dist);
	}
	cout << fixed << setprecision(3) << sumdist << "\n" << sqrt(maxdist);
	return 0;
}