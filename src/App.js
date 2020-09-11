import React from "react";
import Container from "react-bootstrap/Container";
import NavigationBar from "./NavigationBar";
import styled from "styled-components";

const MainContainer = styled(Container)`
  background-color: #0a192f;
`;

const App = () => {
  return (
    <MainContainer fluid>
      <NavigationBar />
    </MainContainer>
  );
};

export default App;
