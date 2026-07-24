// Восстановленный компонент: FQ
// Источник: CDSS Острый Живот 2026

function FQ(e){if(!e||typeof e!="object")throw Error(Zn+"Object expected");var t,n,r,i=["precision",1,Zs,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<i.length;t+=3)if((r=e[n=i[t]])!==void 0)if(Qs(r)===r&&r>=i[t+1]&&r<=i[t+2])this[n]=r;else throw Error(Yi+n+": "+r);if((r=e[n="LN10"])!==void 0)if(r==Math.LN10)this[n]=new this(r);else throw Error(Yi+n+": "+r);return this}