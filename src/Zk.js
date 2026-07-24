// Восстановленный компонент: Zk
// Источник: CDSS Острый Живот 2026

function Zk(e=!0){const t=k.useContext(Xh);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=k.useId();k.useEffect(()=>{if(e)return i(s)},[e]);const l=k.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,l]:[!0]}