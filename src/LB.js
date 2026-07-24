// Восстановленный компонент: LB
// Источник: CDSS Острый Живот 2026

var LB=function(t){var n=t.cx,r=t.cy,i=t.angle,s=t.startAngle,l=t.endAngle,u=t.r,f=t.radius,h=t.innerRadius,p=t.outerRadius,m=t.x,v=t.y,S=t.top,A=t.left,w=t.width,b=t.height,_=t.clockWise,j=t.labelViewBox;if(j)return j;if(de(w)&&de(b)){if(de(m)&&de(v))return{x:m,y:v,width:w,height:b};if(de(S)&&de(A))return{x:S,y:A,width:w,height:b}}return de(m)&&de(v)?{x:m,y:v,width:0,height:0}:de(n)&&de(r)?{cx:n,cy:r,startAngle:s||i||0,endAngle:l||i||0,innerRadius:h||0,outerRadius:p||f||u||0,clockWise:_}:t.viewBox?t.viewBox:{}}