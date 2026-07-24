// Восстановленный компонент: Tr
// Источник: CDSS Острый Живот 2026

function Tr(e){var t,n,r,i=e.length-1,s="",l=e[0];if(i>0){for(s+=l,t=1;t<i;t++)r=e[t]+"",n=ct-r.length,n&&(s+=Za(n)),s+=r;l=e[t],r=l+"",n=ct-r.length,n&&(s+=Za(n))}else if(l===0)return"0";for(;l%10===0;)l/=10;return s+l}