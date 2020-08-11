import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SportsNews from "./SportsNews";
import Sidebar from "./Sidebar";

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

  // useEffect(() => {
  //   async function fetchData() {
  //     for (const newsUrl of newsUrls) {
  //       const res = await fetch(newsUrl);
  //       res.json().then((res) => {
  //         setSportsNews((state) => [...state, res]);
  //       });
  //     }
  //   }

  //   fetchData();
  // }, []);

  const getSport = (sport) => {
    setSportToFetch(sport);
  };

  return (
    <Container fluid className="main-container">
      <Row>
        <Sidebar />
        <SportsNews sport={sportToFetch} sports={sportsNews} />
      </Row>
    </Container>
  );
};

export default App;

// may have to add onclick handlers for news & scores components
