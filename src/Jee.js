// Восстановленный компонент: Jee
// Источник: CDSS Острый Живот 2026

function Jee(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&n&&!e.label)return null;var r=e.children,i=Xn(r,Cr).map(function(l,u){return k.cloneElement(l,{data:t,key:"labelList-".concat(u)})});if(!n)return i;var s=Qee(e.label,t);return[s].concat(Uee(i))}