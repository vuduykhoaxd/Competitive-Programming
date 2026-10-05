#include <iostream>
#include <string>
using namespace std;
string str = "";
string part = "";
int str_len = 0;
int part_len = 0;
int ans = 0;
int prevs = 0;
int prevs1 = 0;
void inp()
{
    cin >> str >> part;
    str_len = str.length();
    part_len = part.length();
}

bool compare(int idx)
{
    for (int i = idx; i < (idx + part_len); i++)
    {
        // if (str[i] == part[0] && i > idx)
        // {
            
        //             prevs = i;
            
            
        // }
        if (str[i] != part[i - idx])
        {

            return false;
        }
    }
    return true;
}
bool previdxcheck()
{
    if (prevs != prevs1)
    {
        prevs1 = prevs;
        return true;
    }
    return false;
}
void solve()
{

    if (str_len >= part_len)
    {

        for (int i = 0; i <= str.length() - part.length(); ++i)
        {

            //  if (previdxcheck())
            //  {
            //      i = prevs;
            //  }

            if (str[i] == part[0])
            {

                if (compare(i))
                {
                    ans++;
                }
            }
        }
    }

    cout << ans;
}

int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    inp();
    solve();
    return 0;
}
/*
saippuakauppias
pp

*/
