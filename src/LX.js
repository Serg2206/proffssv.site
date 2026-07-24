// Восстановленный компонент: LX
// Источник: CDSS Острый Живот 2026

function LX(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=new Array(r),s=new Array(n),l;for(l=0;l<r;++l)i[l]=Xs(e[l],t[l]);for(;l<n;++l)s[l]=t[l];return function(u){for(l=0;l<r;++l)s[l]=i[l](u);return s}}