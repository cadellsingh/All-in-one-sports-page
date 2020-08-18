import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { v4 as uuidv4 } from "uuid";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const { sport, searchValue } = props;

  // add unique value to key

  useEffect(() => {
    async function fetchData() {
      setIsLoaded(true);
      for (const newsUrl of newsUrls) {
        const res = await fetch(newsUrl);
        res.json().then((res) => {
          setSportsNews((state) => [...state, res]);
        });
      }
      setIsLoaded(false);
    }

    fetchData();
  }, []);

  // filters articles based on sport selected
  // if no sport is selected, all sport articles are shown
  let filteredSports =
    sport === "ALL"
      ? sportsNews
      : sportsNews.filter((sports) => {
          return sports.header.includes(sport);
        });

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
        <a
          key={uuidv4()}
          href={articleLink}
          target="_blank"
          rel="noopener noreferrer"
        >
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

  const cardDetails = (
    <CardColumns className="sport-news-container" id="columns">
      {sportDetails}
    </CardColumns>
  );

  const loadingSpinner = (
    <Spinner id="spinner" animation="grow" variant="secondary" />
  );

  return (
    <Row className="justify-content-center">
      <Col lg={10}>{isLoaded ? loadingSpinner : cardDetails}</Col>
    </Row>
  );
};

export default SportsNews;

// when i incorporate scores, that may have to be in same componet as SportNews
// maybe rename to SportsData
