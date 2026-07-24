// Восстановленный компонент: Uoe
// Источник: CDSS Острый Живот 2026

var Uoe=function(t,n,r,i,s){var l=s.x1,u=s.x2,f=s.y1,h=s.y2,p=s.xAxis,m=s.yAxis;if(!p||!m)return null;var v=uA({x:p.scale,y:m.scale}),S={x:t?v.x.apply(l,{position:"start"}):v.x.rangeMin,y:r?v.y.apply(f,{position:"start"}):v.y.rangeMin},A={x:n?v.x.apply(u,{position:"end"}):v.x.rangeMax,y:i?v.y.apply(h,{position:"end"}):v.y.rangeMax};return Pr(s,"discard")&&(!v.isInRange(S)||!v.isInRange(A))?null:d6(S,A)}