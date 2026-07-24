// Восстановленный компонент: Iw
// Источник: CDSS Острый Живот 2026

function Iw(){var e=new Y5,t=[],n=[],r=w1;function i(s){let l=e.get(s);if(l===void 0){if(r!==w1)return r;e.set(s,l=t.push(s)-1)}return n[l%n.length]}return i.domain=function(s){if(!arguments.length)return t.slice();t=[],e=new Y5;for(const l of s)e.has(l)||e.set(l,t.push(l)-1);return i},i.range=function(s){return arguments.length?(n=Array.from(s),i):n.slice()},i.unknown=function(s){return arguments.length?(r=s,i):r},i.copy=function(){return Iw(t,n).unknown(r)},Jn.apply(i,arguments),i}