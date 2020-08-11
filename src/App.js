import React, { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SportsNews from "./SportsNews";
import Sidebar from "./Sidebar";

const App = () => {
  const [sportToFetch, setSportToFetch] = useState("");

  const getSport = (sport) => {
    setSportToFetch(sport);
  };

  return (
    <Container fluid className="main-container">
      <Row>
        <Sidebar getSport={getSport}/>
        <SportsNews sport={sportToFetch} />
      </Row>
    </Container>
  );
};

export default App;

// may have to add onclick handlers for news & scores components

// sidebar component -> contains Sport buttons

// create main component to store other components