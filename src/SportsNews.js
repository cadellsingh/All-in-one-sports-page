import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

// can make into object to match with sport
// this example may be used for scores
// eg: NBA: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news"

const SportsNews = (props) => {
  const { sport, sports } = props;

  // add unique value to key

  // extracts relevant info from sports object & displays it
  // { links } = article
  // { web } = links
  // ^ giving trouble
  const sportDetails = [];
  // since im using map i can prob put this in a function and not use sportsDetails
  sports.map((sport) => {
    const { header, articles } = sport;
    sportDetails.push(<h1>{header}</h1>);

    return articles.map((article) => {
      const { headline, description } = article;

      return sportDetails.push(
        <div>
          <p>{headline}</p>
          <p>{description}</p>
        </div>
      );
    });
  });

  // display all sports data based on whats true in sports object
  // console.log(sports);

  // when sport === "" then display news for all sports

  return (
    <Container fluid className="sports-news">
      <Row className="justify-content-md-center">
        <Col md={12} lg={11} xl={11}>
          <Card bg="dark" text="white">
            <Card.Header as="h3">NCAAF News</Card.Header>
            <Card.Body>
              <Card.Title>
                How Big 12's scheduling model differs from other conferences
              </Card.Title>
              <Card.Text>
                description: "Heather Dinich breaks down the Big 12's college
                football schedule model and how it differs from other
                conferences."
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Title>
                How Big 12's scheduling model differs from other conferences
              </Card.Title>
              <Card.Text>
                description: "Heather Dinich breaks down the Big 12's college
                football schedule model and how it differs from other
                conferences."
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Title>
                How Big 12's scheduling model differs from other conferences
              </Card.Title>
              <Card.Text>
                description: "Heather Dinich breaks down the Big 12's college
                football schedule model and how it differs from other
                conferences."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SportsNews;

// web link is giving trouble

// header: NCAAF NEWS
// headline: How Big 12's scheduling model differs from other conferences
// description: "Heather Dinich breaks down the Big 12's college football schedule model and how it differs from other conferences."

// https://a.espncdn.com/media/motion/2020/0804/dm_200804_NCB_Big_12_creates_a_new_way_to_play_football_games/dm_200804_NCB_Big_12_creates_a_new_way_to_play_football_games.jpg

// {/* <p>{sport}</p> */}
//       {/* {sportDetails} */}
