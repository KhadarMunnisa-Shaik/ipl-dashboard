import "../styles/matches.css"

function RecentMatches({ matches }) {
if (!matches) {
  return <p>Loading matches...</p>
}

return (
  <div>

    <h2 className="title">Recent Matches</h2>

    <div className="matches">

      {matches.map((match, index) => (
        <div className="match" key={index}>
          <h3>{match.teams}</h3>
          <p>{match.result}</p>
        </div>
      ))}

    </div>

  </div>
)

}

export default RecentMatches