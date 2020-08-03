import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

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
    <Col className="sports-news">
      <h3>Latest News</h3>
      <h2>NCAAF</h2>
        <Row>
          <Col lg={4}>
            <div className="border">
              <Image
                src="https://a.espncdn.com/photo/2020/0413/r688898_600x600_1-1.jpg"
                className="img-fluid"
                rounded
              />
              <p>
                Washington State coach Nick Rolovich tells WR Kassidy Woods that
                joining the Pac-12 player unity group would create "an issue" with
                the program.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="border">
              <Image
                src="https://a.espncdn.com/photo/2020/0413/r688898_600x600_1-1.jpg"
                className="img-fluid"
                rounded
              />
              <p>
                Washington State coach Nick Rolovich tells WR Kassidy Woods that
                joining the Pac-12 player unity group would create "an issue" with
                the program.
              </p>
            </div>
          </Col>
        </Row>
      {/* <p>{sport}</p> */}
      {/* {sportDetails} */}
    </Col>
  );
};

export default SportsNews;

// web link is giving trouble
