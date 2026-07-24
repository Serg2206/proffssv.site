// Восстановленный компонент: UG
// Источник: CDSS Острый Живот 2026

function UG(e,t){if(!(!((l=e.length)>0)||!((s=(i=e[t[0]]).length)>0))){for(var n=0,r=1,i,s,l;r<s;++r){for(var u=0,f=0,h=0;u<l;++u){for(var p=e[t[u]],m=p[r][1]||0,v=p[r-1][1]||0,S=(m-v)/2,A=0;A<u;++A){var w=e[t[A]],b=w[r][1]||0,_=w[r-1][1]||0;S+=b-_}f+=m,h+=S*m}i[r-1][1]+=i[r-1][0]=n,f&&(n-=h/f)}i[r-1][1]+=i[r-1][0]=n,ps(e,t)}}