// Восстановленный компонент: HX
// Источник: CDSS Острый Живот 2026

function HX(e,t){t===void 0&&(t=e,e=Xs);for(var n=0,r=t.length-1,i=t[0],s=new Array(r<0?0:r);n<r;)s[n]=e(i,i=t[++n]);return function(l){var u=Math.max(0,Math.min(r-1,Math.floor(l*=r)));return s[u](l-u)}}