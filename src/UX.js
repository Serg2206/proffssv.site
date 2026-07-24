// Восстановленный компонент: UX
// Источник: CDSS Острый Живот 2026

function UX(e,t){var n=O1.lastIndex=jx.lastIndex=0,r,i,s,l=-1,u=[],f=[];for(e=e+"",t=t+"";(r=O1.exec(e))&&(i=jx.exec(t));)(s=i.index)>n&&(s=t.slice(n,s),u[l]?u[l]+=s:u[++l]=s),(r=r[0])===(i=i[0])?u[l]?u[l]+=i:u[++l]=i:(u[++l]=null,f.push({i:l,x:sh(r,i)})),n=jx.lastIndex;return n<t.length&&(s=t.slice(n),u[l]?u[l]+=s:u[++l]=s),u.length<2?f[0]?qX(f[0].x):zX(t):(t=f.length,function(h){for(var p=0,m;p<t;++p)u[(m=f[p]).i]=m.x(h);return u.join("")})}