// Восстановленный компонент: MV
// Источник: CDSS Острый Живот 2026

function MV(e){const t=e.toLowerCase(),n=t.split(/\s+/),r=EV.map(i=>{let s=0;for(const l of i.keywords){const u=l.toLowerCase();if(t.includes(u)){s+=3;continue}for(const f of n)f.length>=3&&u.includes(f)&&(s+=1),f.length>=3&&f.includes(u)&&(s+=1)}return{entry:i,score:s}});return r.sort((i,s)=>s.score-i.score),r.length===0||r[0].score===0?null:r[0].entry.response}