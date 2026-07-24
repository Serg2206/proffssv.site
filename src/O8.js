// Восстановленный компонент: O8
// Источник: CDSS Острый Живот 2026

function O8(a){for(var o=a;;){var c=o.tag;if((c===0||c===11||c===15)&&o.flags&16384&&(c=o.updateQueue,c!==null&&(c=c.stores,c!==null)))for(var d=0;d<c.length;d++){var y=c[d],g=y.getSnapshot;y=y.value;try{if(!xn(g(),y))return!1}catch{return!1}}if(c=o.child,o.subtreeFlags&16384&&c!==null)c.return=o,o=c;else{if(o===a)break;for(;o.sibling===null;){if(o.return===null||o.return===a)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}