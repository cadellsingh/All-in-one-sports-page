import React, { useState, useEffect } from "react";
import "./App.css";
import SidebarSports from "./SidebarSports";
import SportsData from "./SportsData";

// cmd + shift + l for console.log

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
          console.log("res: ", res);
          setSportsNews((state) => [...state, res]);
        });
      }
    }

    fetchData();
    console.log("i fire once");
  }, []);

  // prob put this in the SportNews Component

  const { header, articles } = sportsNews;

  // console.log(sportsNews);

  // if (articles !== undefined) {
  //   const { headline, description, links } = articles[0];
  //   const { web } = links;
  //   console.log(header);
  //   console.log("web: ", web.href); // web url
  //   console.log("description: ", description);
  //   console.log("headline: ", headline);
  // }

  const getSport = (sport) => {
    setSportToFetch(sport);
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
