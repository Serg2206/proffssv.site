// Восстановленный компонент: Q7
// Источник: CDSS Острый Живот 2026

function Q7(e){let t={velocity:vt.velocity,stiffness:vt.stiffness,damping:vt.damping,mass:vt.mass,isResolvedFromDuration:!1,...e};if(!HT(e,Z7)&&HT(e,X7))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Nr(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:vt.mass,stiffness:i,damping:s}}else{const n=Y7({...e,velocity:0});t={...t,...n,mass:vt.mass},t.isResolvedFromDuration=!0}return t}