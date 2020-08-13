import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

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

  // filters articles based on sport selected
  // if no sport is selected, all sport articles are shown
  let filteredSports =
    sport !== "ALL"
      ? sportsNews.filter((sports) => {
          return sports.header.includes(sport);
        })
      : sportsNews;

  const sportDetails = [];

  filteredSports.map((sport) => {
    let { articles } = sport;

    // filters articles based on search query
    let filterArticles = articles.filter((article) => {
      return article.headline.toLowerCase().includes(searchValue);
    });

    return filterArticles.map((article) => {
      const { headline, description, images, links } = article;
      
      // doesnt use an image if image[0] is undefined
      const { url: imageUrl } = images[0] !== undefined && images[0];

      const {
        web: { href: articleLink },
      } = links;

      return sportDetails.push(
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
