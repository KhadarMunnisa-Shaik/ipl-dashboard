import "../styles/matchcenter.css"
import teamLogos from "../utils/teamLogos"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

function MatchCenter({data}){

const champion = data.overview?.champion
const runner = data.overview?.runnerUp || data.overview?.runner_up

return(

<div className="match-center">

{/* TOP BANNER */}

<div className="match-banner">

<div className="team-block">

<img 
src={teamLogos[champion]} 
alt={champion} 
className="team-logo"
/>

<h3>{champion}</h3>
<h1>176/4 (18)</h1>
<p>Run Rate: 9.8</p>

</div>

<div className="vs">VS</div>

<div className="team-block">

<img 
src={teamLogos[runner]} 
alt={runner} 
className="team-logo"
/>

<h3>{runner}</h3>
<h1>173/6 (20)</h1>
<p>Required Run Rate: 8.5</p>

</div>

</div>


{/* LOWER SECTION */}

<div className="match-details">


{/* Batting Table */}

<div className="table-card">

<h3>Batting Performance</h3>

<table>

<thead>
<tr>
<th>Player</th>
<th>Runs</th>
<th>Balls</th>
<th>SR</th>
</tr>
</thead>

<tbody>

{data.players?.topBatters?.slice(0,3).map((p,i)=>(
<tr key={i}>
<td>{p.name}</td>
<td>{p.runs}</td>
<td>--</td>
<td>--</td>
</tr>
))}

</tbody>

</table>

</div>


{/* Bowling Table */}

<div className="table-card">

<h3>Bowling</h3>

<table>

<thead>
<tr>
<th>Player</th>
<th>Wickets</th>
</tr>
</thead>

<tbody>

{data.players?.topBowlers?.map((b,i)=>(
<tr key={i}>
<td>{b.name}</td>
<td>{b.wickets}</td>
</tr>
))}

</tbody>

</table>

</div>


{/* Performance Cards */}

<div className="performance">

<div className="circle-card">
<h4>Sixes</h4>
<div className="circle">10</div>
</div>

<div className="circle-card">
<h4>Fours</h4>
<div className="circle">19</div>
</div>

<div className="circle-card">
<h4>Wickets</h4>
<div className="circle">8</div>
</div>

</div>
{/* Points Table */}

<div className="table-card points-table">

<h3>Points Table</h3>

<table>

<thead>
<tr>
<th>Pos</th>
<th>Team</th>
<th>Pts</th>
</tr>
</thead>

<tbody>

{data.standings?.map((team,i)=>(
<tr key={i}>
<td>{team.position}</td>
<td>{team.team}</td>
<td>{team.points}</td>
</tr>
))}

{data.standings?.top_4?.map((team,i)=>(
<tr key={i}>
<td>{team.position}</td>
<td>{team.team}</td>
<td>-</td>
</tr>
))}

</tbody>

</table>

</div>


{/* Season Chart */}

<div className="table-card chart-card">

<h3>Top Teams Points</h3>

<ResponsiveContainer width="100%" height={200}>

<BarChart data={data.standings || []}>

<XAxis dataKey="team" hide/>

<YAxis/>

<Tooltip/>

<Bar dataKey="points" />

</BarChart>

</ResponsiveContainer>

</div>

</div>

</div>

)

}

export default MatchCenter