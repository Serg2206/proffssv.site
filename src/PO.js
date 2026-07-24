// Восстановленный компонент: PO
// Источник: CDSS Острый Живот 2026

function PO(a,o,c,d){var y=c.type.getDerivedStateFromError;if(typeof y=="function"){var g=d.value;a.payload=function(){return y(g)},a.callback=function(){MO(o,c,d)}}var E=c.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(a.callback=function(){MO(o,c,d),typeof y!="function"&&($a===null?$a=new Set([this]):$a.add(this));var D=d.stack;this.componentDidCatch(d.value,{componentStack:D!==null?D:""})})}