// Восстановленный компонент: QI
// Источник: CDSS Острый Живот 2026

function QI(e,t,n=0,r=0,i=0,s=1,l){const u=[];for(const f of e.variantChildren)f.notify("AnimationStart",t),u.push(qb(f,t,{...l,delay:n+(typeof r=="function"?0:r)+uk(e.variantChildren,f,r,i,s)}).then(()=>f.notify("AnimationComplete",t)));return Promise.all(u)}