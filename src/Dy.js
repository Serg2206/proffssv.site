// Восстановленный компонент: Dy
// Источник: CDSS Острый Живот 2026

function Dy(a){var o=a.firstChild;for(o&&o.nodeType===10&&(o=o.nextSibling);o;){var c=o;switch(o=o.nextSibling,c.nodeName){case"HTML":case"HEAD":case"BODY":Dy(c),Ip(c);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(c.rel.toLowerCase()==="stylesheet")continue}a.removeChild(c)}}