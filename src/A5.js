// Восстановленный компонент: A5
// Источник: CDSS Острый Живот 2026

function A5(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.key,i=e.offsetTopLeft,s=e.position,l=e.reverseDirection,u=e.tooltipDimension,f=e.viewBox,h=e.viewBoxDimension;if(s&&de(s[r]))return s[r];var p=n[r]-u-i,m=n[r]+i;if(t[r])return l[r]?p:m;if(l[r]){var v=p,S=f[r];return v<S?Math.max(m,f[r]):Math.max(p,f[r])}var A=m+u,w=f[r]+h;return A>w?Math.max(p,f[r]):Math.max(m,f[r])}