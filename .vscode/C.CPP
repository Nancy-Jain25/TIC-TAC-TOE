#include <iostream>
#include <vector>
using namespace std;

struct Mealy
{
    int nextState;
    char output;
};

struct Moore
{
    int state;
    char output;
};

int main()
{
    int n, m;
    cin >> n >> m;

    vector<vector<Mealy>> mealy(n, vector<Mealy>(m));

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cin >> mealy[i][j].nextState >> mealy[i][j].output;
        }
    }

    vector<Moore> moore;

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            bool found = false;

            for (auto &k : moore)
            {
                if (k.state == mealy[i][j].nextState &&
                    k.output == mealy[i][j].output)
                {
                    found = true;
                    break;
                }
            }

            if (!found)
            {
                moore.push_back({mealy[i][j].nextState,
                                 mealy[i][j].output});
            }
        }
    }

    for (auto &k : moore)
    {
        cout << "q" << k.state << "_" << k.output
             << " " << k.output << endl;
    }

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cout << "q" << i << " " << j
                 << " q" << mealy[i][j].nextState
                 << "_" << mealy[i][j].output << endl;
        }
    }

    return 0;
}