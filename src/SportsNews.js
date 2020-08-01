import React, { useState, useEffect } from "react";

// can make into object to match with sport
// this example may be used for scores
// eg: NBA: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news"

const SportsNews = (props) => {
  const { sport, sports } = props;

  const sportDetails = [];
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
    <div>
      <p>{sport}</p>
      {sportDetails}
    </div>
  );
};

export default SportsNews;

// web link is giving trouble
