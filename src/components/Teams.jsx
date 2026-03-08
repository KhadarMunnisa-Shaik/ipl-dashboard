import React from "react";
import "../styles/teams.css";

import cskLogo from "../assets/team-logos/csk.png";
import rcbLogo from "../assets/team-logos/rcb.png";
import rrLogo from "../assets/team-logos/rr.png";
import pbksLogo from "../assets/team-logos/pbks.png";
import lsgLogo from "../assets/team-logos/lsg.png";
import gtLogo from "../assets/team-logos/gt.png";
import dcLogo from "../assets/team-logos/dc.png";
import miLogo from "../assets/team-logos/mi.png";
import kkrLogo from "../assets/team-logos/kkr.png";
import srhLogo from "../assets/team-logos/srh.png";

const teamsData = [
  { name: "Chennai Super Kings", logo: cskLogo },
  { name: "Royal Challengers Bengaluru", logo: rcbLogo },
  { name: "Rajasthan Royals", logo: rrLogo },
  { name: "Punjab Kings", logo: pbksLogo },
  { name: "Lucknow Super Giants", logo: lsgLogo },
  { name: "Gujarat Titans", logo: gtLogo },
  { name: "Delhi Capitals", logo: dcLogo },
  { name: "Mumbai Indians", logo: miLogo },
  { name: "Kolkata Knight Riders", logo: kkrLogo },
  { name: "Sunrisers Hyderabad", logo: srhLogo },
];

const Teams = () => {
  return (
    <div className="teams-container">
      <h1>IPL Teams</h1>

      <div className="teams-grid">
        {teamsData.map((team, index) => (
          <div key={index} className="team-card">
            <img src={team.logo} alt={team.name} className="team-logo" />
            <h2>{team.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;