import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import NavigationBar from "./NavigationBar";

const App = () => {
  return (
    <div className="main-container">
      <Container fluid>
        <NavigationBar />
      </Container>
    </div>
  );
};

export default App;