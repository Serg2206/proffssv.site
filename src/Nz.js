// Восстановленный компонент: Nz
// Источник: CDSS Острый Живот 2026

function Nz(e,t,n){for(const r in t){const i=t[r],s=n[r];if(Kt(i))e.addValue(r,i);else if(Kt(s))e.addValue(r,fs(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const l=e.getValue(r);l.liveStyle===!0?l.jump(i):l.hasAnimated||l.set(i)}else{const l=e.getStaticValue(r);e.addValue(r,fs(l!==void 0?l:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}