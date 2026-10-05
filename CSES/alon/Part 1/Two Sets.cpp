#include <iostream>
using namespace std;

int main()
{
    long long n = 0, sum1 = 0, sum2 = 0, counter = 0, A[1000000 + 1], B[1000000 + 1];
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        sum1 += i;
        A[i] = i;
    }
    if (sum1 % 2 == 0)
    {
        cout << "YES\n";
        sum2 = sum1 / 2;
        while (sum2 != 0)
        {
            for (int i = n; i >= 0; i--)
            {
                if (sum2 - i >= 0)
                {
                    sum2 = sum2 - i;
                    counter++;
                    B[counter] = i;
                    if (sum2 ==0 ){
                        break;
                    }
                }
            }
        }
        cout << counter << "\n";
        for (int i = 1; i <= counter; i++)
        {
            cout << B[i] << " ";
            A[B[i]] = 0;
        }
        cout << "\n"<< n - counter << "\n";
        for (int i = 1; i <= n; i++)
        {
            if (A[i] != 0)
            {
                cout << A[i] << " ";
            }
        }
    }
    else
    {
        cout << "NO";
    }
    return 0;
}

