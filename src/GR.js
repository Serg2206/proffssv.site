// Восстановленный компонент: GR
// Источник: CDSS Острый Живот 2026

function GR(){var e=[.5],t=[0,1],n,r=1;function i(s){return s!=null&&s<=s?t[Tu(e,s,0,r)]:n}return i.domain=function(s){return arguments.length?(e=Array.from(s),r=Math.min(e.length,t.length-1),i):e.slice()},i.range=function(s){return arguments.length?(t=Array.from(s),r=Math.min(e.length,t.length-1),i):t.slice()},i.invertExtent=function(s){var l=t.indexOf(s);return[e[l-1],e[l]]},i.unknown=function(s){return arguments.length?(n=s,i):n},i.copy=function(){return GR().domain(e).range(t).unknown(n)},Jn.apply(i,arguments)}