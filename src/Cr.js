// Восстановленный компонент: Cr
// Источник: CDSS Острый Живот 2026

function Cr(e){var t=e.valueAccessor,n=t===void 0?Zee:t,r=oN(e,zee),i=r.data,s=r.dataKey,l=r.clockWise,u=r.id,f=r.textBreakAll,h=oN(r,qee);return!i||!i.length?null:I.createElement(Ie,{className:"recharts-label-list"},i.map(function(p,m){var v=Me(s)?n(p,m):Wt(p&&p.payload,s),S=Me(u)?{}:{id:"".concat(u,"-").concat(m)};return I.createElement(Gt,bh({},ge(p,!0),h,S,{parentViewBox:p.parentViewBox,value:v,textBreakAll:f,viewBox:Gt.parseViewBox(Me(l)?p:iN(iN({},p),{},{clockWise:l})),key:"label-".concat(m),index:m}))}))}