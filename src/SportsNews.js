import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

const SportsNews = (props) => {
  const { sport, sports } = props;

  // if (sports.length > 0) {
  //   // to get article url
  //   const { articles } = sports[0];
  //   // const { links } = articles[0]
  //   // const {web: {href}} = links

  //   // to get image url
  //   const { images } = articles[0];
  //   const { url } = images[0];
  // }

  // add unique value to key

  const sportDetails = [];
  // sports.map((sport) => {
  //   const { header, articles } = sport;
  //   sportDetails.push(<h4>{header}</h4>);

  //   return articles.map((article, index) => {
  //     const { headline, description, images, links } = article;
  //     // renamed variable while destructuring on nested object
  //     const {
  //       web: { href: articleLink },
  //     } = links;

  //     return sportDetails.push(
  //       <div>
  //         <p>{headline}</p>
  //         <p>{description}</p>
  //         <p>{articleLink}</p>
  //         {/* <p>{imageUrl}</p> */}
  //       </div>
  //     );
  //   });
  // });

  // display all sports data based on whats true in sports object
  // console.log(sports);

  // when sport === "" then display news for all sports

  return (
    <div>
      {sportDetails}
    </div>
    // <Container className="sport-news">
    //   <h4>NCAAF NEWS</h4>
    //   <CardColumns>
    //     <Card>
    //       <Card.Img
    //         variant="top"
    //         src="https:a.espncdn.com/media/motion/2020/0804/dm_200804_NCB_Big_12_creates_a_new_way_to_play_football_games/dm_200804_NCB_Big_12_creates_a_new_way_to_play_football_games.jpg"
    //       />
    //       <Card.Body>
    //         <Card.Title>
    //           How Big 12's scheduling model differs from other conferences
    //         </Card.Title>
    //         <Card.Text>
    //           Heather Dinich breaks down the Big 12's college football schedule
    //           model and how it differs from other conferences. Heather Dinich
    //           breaks down the Big 12's college football schedule model and how
    //           it differs from other conferences. Heather Dinich breaks down the
    //           Big 12's college football
    //         </Card.Text>
    //         <Button variant="outline-primary">Read full article</Button>
    //       </Card.Body>
    //     </Card>
    //     <Card>
    //       <Card.Body>
    //         <Card.Title>
    //           How Big 12's scheduling model differs from other conferences
    //         </Card.Title>
    //         <Card.Text>
    //           Heather Dinich breaks down the Big 12's college football schedule
    //           model and how it differs from other conferences. Heather Dinich
    //           breaks down the Big 12's college football
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //     <Card>
    //       <Card.Body>
    //         <Card.Title>
    //           How Big 12's scheduling model differs from other conferences
    //         </Card.Title>
    //         <Card.Text>
    //           schedule model and how it differs from other conferences. Heather
    //           Dinich breaks down the Big 12's college football
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //     <Card>
    //       <Card.Body>
    //         <Card.Title>
    //           How Big 12's scheduling model differs from other conferences
    //         </Card.Title>
    //         <Card.Text>
    //           Heather Dinich breaks down the Big 12's college football schedule
    //           model and how it differs from other conferences. Heather Dinich
    //           breaks down the Big 12's college football schedule model and how
    //           it differs from other conferences. Heather Dinich breaks down the
    //           Big 12's college football
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //     <Card>
    //       <Card.Body>
    //         <Card.Title>
    //           How Big 12's scheduling model differs from other conferences
    //         </Card.Title>
    //         <Card.Text>
    //           Heather Dinich breaks down the Big 12's college football
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //   </CardColumns>
    // </Container>
  );
};

export default SportsNews;
    
