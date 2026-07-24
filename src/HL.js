// Восстановленный компонент: HL
// Источник: CDSS Острый Живот 2026

function HL(a,o){if(yo)return a==="compositionend"||!Jp&&QA(a,o)?(a=VA(),Gu=Wp=_a=null,yo=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return YA&&o.locale!=="ko"?null:o.data;default:return null}}