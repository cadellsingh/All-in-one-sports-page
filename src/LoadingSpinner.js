import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";

const StyledSpinner = styled(Spinner)`
  width: 4em;
  height: 4em;
  margin: 0 auto;
  display: block;
  margin-top: 50px;
`;

const LoadingSpinner = () => {
  return <StyledSpinner animation="grow" variant="secondary" />;
};

export default LoadingSpinner;
