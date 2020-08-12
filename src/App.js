import React, { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Sidebar from "./Sidebar";
import MainData from "./MainData";

const App = () => {
  const [sportToFetch, setSportToFetch] = useState("");

  const getSport = (sport) => {
    setSportToFetch(sport);
  };

  return (
    <Container fluid className="main-container">
      <Row>
        <Sidebar getSport={getSport}/>
        <MainData sport={sportToFetch} />
      </Row>
    </Container>
  );
};

export default App;

// may have to add onclick handlers for news & scores components
