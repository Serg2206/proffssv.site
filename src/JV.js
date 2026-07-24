// Восстановленный компонент: JV
// Источник: CDSS Острый Живот 2026

function JV(){if(bE)return Dv;bE=1;var e=vw(),t=QV(),n=oi(),r=OD(),i=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,l=Function.prototype,u=Object.prototype,f=l.toString,h=u.hasOwnProperty,p=RegExp("^"+f.call(h).replace(i,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function m(v){if(!n(v)||t(v))return!1;var S=e(v)?p:s;return S.test(r(v))}return Dv=m,Dv}