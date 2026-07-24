// Восстановленный компонент: JX
// Источник: CDSS Острый Живот 2026

function JX(e,t){var n=ch(e,t);if(!n)return e+"";var r=n[0],i=n[1],s=i-(BR=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,l=r.length;return s===l?r:s>l?r+new Array(s-l+1).join("0"):s>0?r.slice(0,s)+"."+r.slice(s):"0."+new Array(1-s).join("0")+ch(e,Math.max(0,t+s-1))[0]}