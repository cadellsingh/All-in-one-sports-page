import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardDetails from "./CardDetails";
import CardColumn from "./CardColumn";
import { v4 as uuidv4 } from "uuid";
import LoadingSpinner from "./LoadingSpinner";

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
  const { sport } = props;

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

    return articles.map((article) => {
      const { headline, description, images, links } = article;

      // doesn't use an image if image[0] is undefined
      const { url: imageUrl } = images[0] !== undefined && images[0];

      const {
        web: { href: articleLink },
      } = links;

      return sportDetails.push(
        <CardDetails
          key={uuidv4()}
          articleLink={articleLink}
          imageUrl={imageUrl}
          headline={headline}
          description={description}
        />
      );
    });
  });

  return (
    <Row className="justify-content-center">
      <Col lg={10}>
        {isLoaded ? (
          <LoadingSpinner />
        ) : (
          <CardColumn sportDetails={sportDetails} />
        )}
      </Col>
    </Row>
  );
};

export default SportsNews;
