import React from "react";
import "../styles/venues.css";

const venuesData = [
  {
    season: "IPL 2021",
    venues: [
      "Chennai, Tamil Nadu, India",
      "Mumbai, Maharashtra, India",
      "Ahmedabad, Gujarat, India",
      "Delhi, India",
      "Dubai, UAE",
      "Abu Dhabi, UAE",
      "Sharjah, UAE"
    ]
  },
  {
    season: "IPL 2022",
    venues: [
      "Mumbai, Maharashtra, India",
      "Pune, Maharashtra, India",
      "Kolkata, West Bengal, India",
      "Ahmedabad, Gujarat, India"
    ]
  },
  {
    season: "IPL 2023",
    venues: [
      "Ahmedabad, Gujarat, India",
      "Chennai, Tamil Nadu, India",
      "Mumbai, Maharashtra, India",
      "Delhi, India",
      "Kolkata, West Bengal, India",
      "Hyderabad, Telangana, India",
      "Bengaluru, Karnataka, India",
      "Lucknow, Uttar Pradesh, India",
      "Jaipur, Rajasthan, India",
      "Dharamshala, Himachal Pradesh, India"
    ]
  },
  {
    season: "IPL 2024",
    venues: [
      "Chennai, Tamil Nadu, India",
      "Ahmedabad, Gujarat, India",
      "Kolkata, West Bengal, India",
      "Hyderabad, Telangana, India",
      "Bengaluru, Karnataka, India",
      "Mumbai, Maharashtra, India",
      "Delhi, India",
      "Lucknow, Uttar Pradesh, India",
      "Jaipur, Rajasthan, India",
      "Dharamshala, Himachal Pradesh, India"
    ]
  },
  {
    season: "IPL 2025",
    venues: [
      "Ahmedabad, Gujarat, India",
      "Mumbai, Maharashtra, India",
      "Bengaluru, Karnataka, India",
      "Chennai, Tamil Nadu, India",
      "Delhi, India",
      "Kolkata, West Bengal, India",
      "Hyderabad, Telangana, India",
      "Lucknow, Uttar Pradesh, India",
      "Jaipur, Rajasthan, India",
      "Dharamshala, Himachal Pradesh, India"
    ]
  }
];

const Venues = () => {
  return (
    <div className="venues-container">
      <h1>IPL Venues (2021 - 2025)</h1>

      <div className="venues-grid">
        {venuesData.map((season) => (
          <div key={season.season} className="season-card">
            <h2>{season.season}</h2>

            <ul>
              {season.venues.map((venue, index) => (
                <li key={index}>{venue}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venues;