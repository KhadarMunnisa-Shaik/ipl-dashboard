import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCards from "./components/StatCards";
import RecentMatches from "./components/RecentMatches";
import MatchCenter from "./components/MatchCenter";

import Players from "./components/Players";
import Teams from "./components/Teams";
import Venues from "./components/Venues";
import Standings from "./components/Standings";
import Insights from "./components/Insights";

import season2021 from "./data/seasonData2021.json";
import season2022 from "./data/seasonData2022.json";
import season2023 from "./data/seasonData2023.json";
import season2024 from "./data/seasonData2024.json";
import season2025 from "./data/seasonData2025.json";

import "./index.css";
import "./App.css";

function App() {

  const seasonData = {
    2021: season2021,
    2022: season2022,
    2023: season2023,
    2024: season2024,
    2025: season2025,
  };

  const [season, setSeason] = useState("2024");
  const [active, setActive] = useState("overview");
  const [theme, setTheme] = useState("dark");

  const currentData = seasonData[season];

  /* theme toggle */
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.classList.toggle("light");
  };

  /* dynamic matches preview */
  const matches = [
    {
      teams: `${currentData.overview.champion} vs ${currentData.overview.runnerUp}`,
      result: currentData.overview.final_result || "Final Match",
    },
    {
      teams: "Top Teams Battle",
      result: `${currentData.standings?.[0]?.team || "Team"} dominated the season`,
    },
    {
      teams: "Season Highlight",
      result: currentData.insights?.[0],
    },
  ];

  return (
    <div className={`app ${theme}`}>

      {/* Sidebar */}
      <Sidebar active={active} setActive={setActive} />

      {/* Main Content */}
      <div className="main">

        {/* Header */}
        <Header
          season={season}
          setSeason={setSeason}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {/* OVERVIEW */}
        {active === "overview" && (
          <>
            <StatCards data={currentData} />
            <MatchCenter data={currentData} />
            <RecentMatches matches={matches} />
          </>
        )}

        {/* PLAYERS */}
        {active === "players" && (
          <Players />
        )}

        {/* TEAMS */}
        {active === "teams" && (
          <Teams />
        )}

        {/* VENUES */}
        {active === "venues" && (
          <Venues />
        )}

        {/* STANDINGS */}
        {active === "standings" && (
          <Standings />
        )}

        {/* INSIGHTS */}
        {active === "insights" && (
          <Insights />
        )}

      </div>

    </div>
  );
}

export default App;