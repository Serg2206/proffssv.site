// Восстановленный компонент: RX
// Источник: CDSS Острый Живот 2026

function RX(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(s){for(i=0;i<n;++i)r[i]=e[i]*(1-s)+t[i]*s;return r}}