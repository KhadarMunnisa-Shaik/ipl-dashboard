import "../styles/statcards.css"

function StatCards({data}){

return(

<div className="cards">

<div className="card">
<h4>Total Matches</h4>
<p>{data.statistics?.totalMatches || data.statistics?.total_matches}</p>
</div>

<div className="card">
<h4>Total Runs</h4>
<p>{data.statistics?.totalRuns || data.statistics?.total_runs}</p>
</div>

<div className="card">
<h4>Total Wickets</h4>
<p>{data.statistics?.totalWickets || data.statistics?.total_wickets}</p>
</div>

<div className="card">
<h4>Orange Cap</h4>
<p>
{data.statistics?.orangeCap?.player || data.players?.orange_cap?.player}
</p>
</div>

</div>

)

}

export default StatCards