// Восстановленный компонент: Iz
// Источник: CDSS Острый Живот 2026

function Iz(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,l;for(let u=0;u<i;u++){s=n[u],l=s.projectionDelta;const{visualElement:f}=s.options;f&&f.props.style&&f.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(_r(e.x,-s.scroll.offset.x),_r(e.y,-s.scroll.offset.y)),l&&(t.x*=l.x.scale,t.y*=l.y.scale,Pk(e,l)),r&&Di(s.latestValues)&&Cd(e,s.latestValues,s.layout?.layoutBox))}t.x<uj&&t.x>cj&&(t.x=1),t.y<uj&&t.y>cj&&(t.y=1)}