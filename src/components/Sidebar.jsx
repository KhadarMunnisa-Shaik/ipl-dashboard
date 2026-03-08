import "../styles/sidebar.css"
import iplLogo from "../assets/team-logos/ipl-logo.png"

function Sidebar({active,setActive}){

const menu=[
"overview",
"players",
"teams",
"venues",
"standings",
"insights"
]

return(

<div className="sidebar">

<div className="sidebar-title">
<img src={iplLogo} alt="ipl" className="ipl-logo"/>
<h2>IPL statsPro</h2>
</div>

<ul>

{menu.map((item)=>(
<li
key={item}
className={active===item?"active":""}
onClick={()=>setActive(item)}
>
{item.charAt(0).toUpperCase()+item.slice(1)}
</li>
))}

</ul>

</div>

)

}

export default Sidebar