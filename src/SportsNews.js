import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

const SportsNews = (props) => {
  const { sport, sports } = props;

  // add unique value to key

  const sportDetails = [];
  sports.map((sport) => {
    const { header, articles } = sport;

    return articles.map((article, index) => {
      const { headline, description, images, links } = article;
      const { url: imageUrl } = (images[0] !== undefined) && images[0]

      const {
        web: { href: articleLink },
      } = links;

      return sportDetails.push(
        <a href={articleLink} target="_blank" rel="noopener noreferrer">
          <Card>
            {imageUrl && <Card.Img variant="top" src={imageUrl} /> }
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
    <Container fluid="lg" className="sport-news">
      <CardColumns>{sportDetails}</CardColumns>
    </Container>
  );
};

export default SportsNews;
