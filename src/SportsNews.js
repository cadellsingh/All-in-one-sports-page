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
      const { url: imageUrl } = images[0];
      // renamed variable while destructuring on nested object
      const {
        web: { href: articleLink },
      } = links;

      return sportDetails.push(
        <Card>
          <Card.Header>{header}</Card.Header>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{headline}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="outline-primary">Read full article</Button>
            {/* {article link} */}
          </Card.Body>
        </Card>
      );
    });
  });

  // display all sports data based on whats true in sports object
  // console.log(sports);

  // when sport === "" then display news for all sports

  return (
    <Container fluid="lg" className="sport-news">
      <CardColumns>{sportDetails}</CardColumns>
    </Container>
  );
};

export default SportsNews;
