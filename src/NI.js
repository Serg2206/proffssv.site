// Восстановленный компонент: NI
// Источник: CDSS Острый Живот 2026

function NI(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:s,type:l,keyframes:u}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:p}=t.owner.getProps();return PI()&&n&&(ck.has(n)||CI.has(n)&&MI(u))&&(n!=="transform"||!p)&&!h&&!r&&i!=="mirror"&&s!==0&&l!=="inertia"}