// Восстановленный компонент: YX
// Источник: CDSS Острый Живот 2026

function YX(e,t){return function(n,r){for(var i=n.length,s=[],l=0,u=e[0],f=0;i>0&&u>0&&(f+u+1>r&&(u=Math.max(1,r-f)),s.push(n.substring(i-=u,i+u)),!((f+=u+1)>r));)u=e[l=(l+1)%e.length];return s.reverse().join(t)}}