// Восстановленный компонент: Lm
// Источник: CDSS Острый Живот 2026

function Lm(a){var o=bt(),c=o.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=a;var d=c.dispatch,y=c.pending,g=o.memoizedState;if(y!==null){c.pending=null;var E=y=y.next;do g=a(g,E.action),E=E.next;while(E!==y);xn(g,o.memoizedState)||(Ot=!0),o.memoizedState=g,o.baseQueue===null&&(o.baseState=g),c.lastRenderedState=g}return[g,d]}