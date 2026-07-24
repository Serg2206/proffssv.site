// Восстановленный компонент: DR
// Источник: CDSS Острый Живот 2026

function DR(e){if(e instanceof fr)return new fr(e.h,e.s,e.l,e.opacity);if(e instanceof ju||(e=Vc(e)),!e)return new fr;if(e instanceof fr)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),s=Math.max(t,n,r),l=NaN,u=s-i,f=(s+i)/2;return u?(t===s?l=(n-r)/u+(n<r)*6:n===s?l=(r-t)/u+2:l=(t-n)/u+4,u/=f<.5?s+i:2-s-i,l*=60):u=f>0&&f<1?0:l,new fr(l,u,f,e.opacity)}