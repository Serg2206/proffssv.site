// Восстановленный компонент: Qi
// Источник: CDSS Острый Живот 2026

function Qi(e,t,n){var r,i=Et(e),s=Tr(e.d),l=s.length;return t?(n&&(r=n-l)>0?s=s.charAt(0)+"."+s.slice(1)+Za(r):l>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(i<0?"e":"e+")+i):i<0?(s="0."+Za(-i-1)+s,n&&(r=n-l)>0&&(s+=Za(r))):i>=l?(s+=Za(i+1-l),n&&(r=n-i-1)>0&&(s=s+"."+Za(r))):((r=i+1)<l&&(s=s.slice(0,r)+"."+s.slice(r)),n&&(r=n-l)>0&&(i+1===l&&(s+="."),s+=Za(r))),e.s<0?"-"+s:s}