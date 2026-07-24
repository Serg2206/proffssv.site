// Восстановленный компонент: Db
// Источник: CDSS Острый Живот 2026

function Db(e,t){if(!e||e==="none")return kb(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=fI,i=n;else{const u=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=uI,i=u}if(!i)return kb(t);const s=r[t],l=i[1].split(",").map(hI);return typeof s=="function"?s(l):l[s]}