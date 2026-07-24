// Восстановленный компонент: Ole
// Источник: CDSS Острый Живот 2026

function Ole(e,t,n){var r,i,s,l;if(e==="horizontal")r=t.x,s=r,i=n.top,l=n.top+n.height;else if(e==="vertical")i=t.y,l=i,r=n.left,s=n.left+n.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var u=t.cx,f=t.cy,h=t.innerRadius,p=t.outerRadius,m=t.angle,v=et(u,f,h,m),S=et(u,f,p,m);r=v.x,i=v.y,s=S.x,l=S.y}else return V6(t);return[{x:r,y:i},{x:s,y:l}]}