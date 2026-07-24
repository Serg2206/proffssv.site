// Восстановленный компонент: DT
// Источник: CDSS Острый Живот 2026

function DT(e,t){let n=Rd(t).split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}