// Восстановленный компонент: KX
// Источник: CDSS Острый Живот 2026

function KX(e,t,n){var r=Math.min(e.length,t.length)-1,i=new Array(r),s=new Array(r),l=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++l<r;)i[l]=_1(e[l],e[l+1]),s[l]=n(t[l],t[l+1]);return function(u){var f=Tu(e,u,1,r)-1;return s[f](i[f](u))}}