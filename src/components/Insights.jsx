import React from "react";
import "../styles/insights.css";

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

function Insights() {
  return (
    <div className="insights-container">

      {seasons.map((season, index) => (

        <div key={index} className="season-block">

          <h2>IPL {season.season} Insights</h2>

          <p className="season-summary">
            🏆 Champion: <strong>{season.overview.champion}</strong> |
            🥈 Runner-up: <strong>{season.overview.runner_up || season.overview.runnerUp}</strong>
          </p>

          <ul className="insights-list">
            {season.insights.map((insight, i) => (
              <li key={i}>{insight}</li>
            ))}
          </ul>

        </div>

      ))}

    </div>
  );
}

export default Insights;