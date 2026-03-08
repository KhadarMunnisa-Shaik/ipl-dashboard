import "../styles/header.css"

function Header({season,setSeason,theme,toggleTheme}){

return(

<div className="header">

<h1>🏆 IPL Dashboard</h1>

<div className="header-right">

<select
value={season}
onChange={(e)=>setSeason(e.target.value)}
>

<option value="2021">Season 2021</option>
<option value="2022">Season 2022</option>
<option value="2023">Season 2023</option>
<option value="2024">Season 2024</option>
<option value="2025">Season 2025</option>

</select>

<button className="theme-btn" onClick={toggleTheme}>

{theme==="dark" ? "🌞" : "🌙"}

</button>

</div>

</div>

)

}

export default Header