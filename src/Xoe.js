// Восстановленный компонент: Xoe
// Источник: CDSS Острый Живот 2026

function Xoe(e,t,n,r,i){for(var s=(r||[]).slice(),l=s.length,u=t.start,f=t.end,h=function(v){var S=s[v],A,w=function(){return A===void 0&&(A=n(S,v)),A};if(v===l-1){var b=e*(S.coordinate+e*w()/2-f);s[v]=S=Jt(Jt({},S),{},{tickCoord:b>0?S.coordinate-b*e:S.coordinate})}else s[v]=S=Jt(Jt({},S),{},{tickCoord:S.coordinate});var _=zh(e,S.tickCoord,w,u,f);_&&(f=S.tickCoord-e*(w()/2+i),s[v]=Jt(Jt({},S),{},{isShow:!0}))},p=l-1;p>=0;p--)h(p);return s}