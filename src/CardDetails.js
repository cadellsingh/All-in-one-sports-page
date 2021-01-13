import React from "react";
import Card from "react-bootstrap/Card";
import styled, { keyframes } from "styled-components";

const swing = keyframes`
  15% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
  30% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  50% {
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
  }
  65% {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
  }
  80% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const CardContainer = styled(Card)`
  background-color: #172a45;
  border: 1px solid white;
  margin: 10px;
  color: white;

  &:hover {
    background-color: #2d3b48;
    cursor: pointer;
    -webkit-animation: ${swing} 1s ease;
    animation: ${swing} 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  .img {
    max-width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 450px) {
    & .card-title {
      font-size: 16px;
      text-decoration: none;
    }

    & .card-text {
      font-size: 15px;
    }
  }
`;

const CardDetails = (props) => {
  const { articleLink, imageUrl, headline, description } = props;

  return (
    <a href={articleLink} target="_blank" rel="noopener noreferrer">
      <CardContainer>
        {imageUrl && (
          <Card.Img
            variant="top"
            className="img"
            src={imageUrl}
            alt={headline}
          />
        )}
        <Card.Body>
          <Card.Title>{headline}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </CardContainer>
    </a>
  );
};

export default CardDetails;
