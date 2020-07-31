import React, { useState, useEffect } from "react";
import "./App.css";
import SidebarSports from "./SidebarSports";
import Settings from "./Settings";
import SportsData from "./SportsData";

// cmd + shift + l for console.log

const allSports = {
  NBA: true,
  NFL: true,
  MLB: true,
  NHL: true,
  "College Football": true,
  "College Basketball": true,
};

const newsUrls = [
  "https://site.api.espn.com/apis/site/v2/sports/football/college-football/news",
  "https://site.api.espn.com/apis/site/v2/sports/football/nfl/news",
  "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news",
  "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news",
  "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news",
  "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/news",
];

const App = () => {
  // const [selectedSports, setSelectedSports] = useState(allSports);
  const [sportToFetch, setSportToFetch] = useState("");
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      for (const newsUrl of newsUrls) {
        const res = await fetch(newsUrl);
        res.json().then((res) => {
          console.log("res: ", res);
          setSportsNews((state) => [...state, res]);
        });
      }
    }

    fetchData();
    console.log("i fire once");
  }, []);

  const getSport = (sport) => {
    setSportToFetch(sport);
    // setDisplaySettings(false);
  };

  return (
    <div>
      <SidebarSports getSport={getSport} />
      <p>{sportToFetch}</p>
    </div>
  );
};

export default App;

// can possibly move api call to App component
