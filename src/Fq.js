// Восстановленный компонент: Fq
// Источник: CDSS Острый Живот 2026

function Fq(...e){return t=>{let n=!1;const r=e.map(i=>{const s=$j(i,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let i=0;i<r.length;i++){const s=r[i];typeof s=="function"?s():$j(e[i],null)}}}}