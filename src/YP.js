// Восстановленный компонент: YP
// Источник: CDSS Острый Живот 2026

var YP=function(t){var n=t.axis,r=t.ticks,i=t.offset,s=t.bandSize,l=t.entry,u=t.index;if(n.type==="category")return r[u]?r[u].coordinate+i:null;var f=Wt(l,n.dataKey,n.domain[u]);return Me(f)?null:n.scale(f)-s/2+i}