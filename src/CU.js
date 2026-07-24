// Восстановленный компонент: CU
// Источник: CDSS Острый Живот 2026

function CU(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=lD(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Cn(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>Cn(t)*2&&(r=e[1]);const s=Gn(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const l={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}