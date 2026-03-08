import React from "react";
import "../styles/standings.css";

import season2021 from "../data/seasonData2021.json";
import season2022 from "../data/seasonData2022.json";
import season2023 from "../data/seasonData2023.json";
import season2024 from "../data/seasonData2024.json";
import season2025 from "../data/seasonData2025.json";

const seasons = [
  season2021,
  season2022,
  season2023,
  season2024,
  season2025
];

const Standings = () => {
  return (
    <div className="standings-container">

      {seasons.map((season, index) => {

        const standings = season.standings;

        return (
          <div key={index} className="season-block">
            <h2>IPL {season.season} Standings</h2>

            <table className="standings-table">
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Team</th>
                  {standings[0].matches !== undefined && <th>Matches</th>}
                  {standings[0].wins !== undefined && <th>Wins</th>}
                  {standings[0].losses !== undefined && <th>Losses</th>}
                  <th>Points</th>
                </tr>
              </thead>

              <tbody>
                {standings.map((team, idx) => (
                  <tr key={idx}>
                    <td>{team.position}</td>
                    <td>{team.team}</td>
                    {team.matches !== undefined && <td>{team.matches}</td>}
                    {team.wins !== undefined && <td>{team.wins}</td>}
                    {team.losses !== undefined && <td>{team.losses}</td>}
                    <td>{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        );
      })}

    </div>
  );
};

export default Standings;