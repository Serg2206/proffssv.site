// Восстановленный компонент: Hz
// Источник: CDSS Острый Живот 2026

function Hz(e,t,n){let r="",i=!0;for(let l=0;l<Uz;l++){const u=Hs[l],f=e[u];if(f===void 0)continue;let h=!0;if(typeof f=="number")h=f===(u.startsWith("scale")?1:0);else{const p=parseFloat(f);h=u.startsWith("scale")?p===1:p===0}if(!h||n){const p=Vb(f,qd[u]);if(!h){i=!1;const m=qz[u]||u;r+=`${m}(${p}) `}n&&(t[u]=p)}}const s=e.pathRotation;return s&&(i=!1,r+=`rotate(${Vb(s,qd.pathRotation)}) `),r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}