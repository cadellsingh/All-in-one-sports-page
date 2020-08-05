import React, { useState, useEffect } from "react";
import "./App.css";
import SportsNews from "./SportsNews";
import SportButtons from "./SportButtons";
import TopNavbar from "./TopNavbar";

// this should prob go back in sportsData component
const newsUrls = [
  "https://site.api.espn.com/apis/site/v2/sports/football/college-football/news",
  "https://site.api.espn.com/apis/site/v2/sports/football/nfl/news",
  "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news",
  "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news",
  "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news",
  "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/news",
];

const App = () => {
  const [sportToFetch, setSportToFetch] = useState("");
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      for (const newsUrl of newsUrls) {
        const res = await fetch(newsUrl);
        res.json().then((res) => {
          setSportsNews((state) => [...state, res]);
        });
      }
    }

    fetchData();
  }, []);

  const getSport = (sport) => {
    setSportToFetch(sport);
  };

  return (
    <div className="main-container">
      <TopNavbar />
      <SportButtons getSport={getSport} />
      <SportsNews sport={sportToFetch} sports={sportsNews} />
    </div>
  );
};

export default App;

// may have to add onclick handlers for news & scores components
