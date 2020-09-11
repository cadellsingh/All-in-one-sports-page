import React from "react";
import styled from "styled-components";
import CardColumns from "react-bootstrap/CardColumns";

const CardColumnsContainer = styled(CardColumns)`
  margin-top: 25px;

  @media only screen and (max-width: 990px) {
    column-count: 2;
  }

  @media only screen and (max-width: 600px) {
    column-count: 1;
  }
`;

const CardColumn = (props) => {
  const { sportDetails } = props;

  return <CardColumnsContainer>{sportDetails}</CardColumnsContainer>;
};

export default CardColumn;
