import React, { useState, useEffect } from "react";

// can make into object to match with sport
// eg: NBA: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news"
const newsUrls = [
  "https://site.api.espn.com/apis/site/v2/sports/football/college-football/news",
  "https://site.api.espn.com/apis/site/v2/sports/football/nfl/news",
  "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news",
  "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news",
  "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news",
  "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/news",
];

// can prob convert this into one
// const scoresUrls = [
//   "https://site.api.espn.com/apis/site/v2/sports/football/college-football/news",
//   "https://site.api.espn.com/apis/site/v2/sports/football/nfl/news",
//   "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news",
//   "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news",
//   "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news",
//   "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/news",
//   "https://site.api.espn.com/apis/site/v2/sports/soccer/:league/news",
// ]

const SportsData = (props) => {
  const { sport, sports } = props;
  const [sportsNews, setSportsNews] = useState([]);
  const [sportsScores, setSportScores] = useState({});

  // display all sports data based on whats true in sports object
  // console.log(sports);

  // if string === "" then api call for all sports

  // possibly fetch all the data
  // then go thru data and send relevant info to the child compon via props

  useEffect(() => {
    async function fetchData() {
      for (const newsUrl of newsUrls) {
        const res = await fetch(newsUrl);
        res.json().then((res) => {
          console.log("res: ", res);
          // url.push(res);
          setSportsNews(state => [...state, res]);
        });
      }
    }

    fetchData();
    console.log("i fire once");
  }, []);

  const { header, articles } = sportsNews;

  console.log(sportsNews);

  if (articles !== undefined) {
    const { headline, description, links } = articles[0];
    const { web } = links;
    console.log(header);
    console.log("web: ", web.href); // web url
    console.log("description: ", description);
    console.log("headline: ", headline);
  }

  return (
    <div>
      {/* <SportsNews />
      <SportsScores /> */}
      <p>{sport}</p>
      <h1>sports data comp</h1>
    </div>
  );
};

export default SportsData;

// api is being called every time component is rendered
