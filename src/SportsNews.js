import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Col from "react-bootstrap/Col";

const newsUrls = [
  "https://site.api.espn.com/apis/site/v2/sports/football/college-football/news",
  "https://site.api.espn.com/apis/site/v2/sports/football/nfl/news",
  "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news",
  "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news",
  "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news",
  "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/news",
];

const SportsNews = (props) => {
  const [sportsNews, setSportsNews] = useState([]);
  const { sport, searchValue } = props;

  // add unique value to key

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

  const sportDetails = [];

  sportsNews.map((sport) => {
    let { articles } = sport;

    // filtering articles based on search query
    let filteredSports = articles.filter((article) => {
      return article.headline.toLowerCase().includes(searchValue);
    });

    filteredSports.map((article) => {
      const { headline, description, images, links } = article;
      const { url: imageUrl } = images[0] !== undefined && images[0];

      const {
        web: { href: articleLink },
      } = links;

      sportDetails.push(
        <a href={articleLink} target="_blank" rel="noopener noreferrer">
          <Card>
            {imageUrl && <Card.Img variant="top" src={imageUrl} />}
            <Card.Body>
              <Card.Title>{headline}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </a>
      );
    });
  });

  return (
      <CardColumns className="sport-news-container">{sportDetails}</CardColumns>
  );
};

export default SportsNews;

// when i incorporate scores, that may have to be in same componet as SportNews
// maybe rename to SportsData
