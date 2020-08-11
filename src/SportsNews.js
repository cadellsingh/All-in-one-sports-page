import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Col from "react-bootstrap/Col";
import SearchBar from "./SearchBar";

const SportsNews = (props) => {
  const [searchValue, setSearchValue] = useState("")
  const { sport, sports } = props;

  // add unique value to key

  const sportDetails = [];
  sports.map((sport) => {
    const { header, articles } = sport;

    return articles.map((article, index) => {
      const { headline, description, images, links } = article;
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
    <Col className="sport-news-container">
      <SearchBar />
      <CardColumns>{sportDetails}</CardColumns>
    </Col>
  );
};

export default SportsNews;

// when i incorporate scores, that may have to be in same componet as SportNews
// rename to SportsData
