#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef long double ld;
#define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)
#define max3(a,b,c) max(max(a,b),c)
#define max4(a,b,c,d) max(max(a,b),max(c,d))
#define fr(i,n) for(ll i=0;i<n;i++)
ll gcd(ll a, ll b)
{
    return b==0?a:gcd(b,a%b);
}
int main()
{
    fastio;
    ll t=1;
    cin>>t;
    while(t--)
    {
        ll n,m;
        cin>>n>>m;
        vector<pair<ll,ll>> v(n);
        for(ll i=0;i<n;i++)
        {
            cin>>(v[i].first);
            v[i].second = i+1;
        }
        sort(v.begin(),v.end());
        vector<ll> wins(n+1);
        for(ll i=1;i<=n;i++)
        {
            wins[i]=i-1;
        }
        ll sum=0;
        ll c=0;
        for(ll i=0;i<n;i++)
        {
            if((sum+v[i].first)<=m)
            {
                c++;
                sum+=v[i].first;
            }
            else
            {
                break;
            }
        }
        for(ll i=c;i<n;i++)
        {
            wins[v[i].second+1]++;
        }
        wins[0]=-1;
        ll posi = lower_bound(wins.begin(),wins.end(),c)-wins.begin()-1;
        cout<<n-posi+1<<"\n";
        // cout<<c<<"\n";
    }
}