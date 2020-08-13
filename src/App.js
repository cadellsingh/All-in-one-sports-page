import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="main-container">
      <Container fluid>
        <Sidebar />
      </Container>
    </div>
  );
};

export default App;

// may have to add onclick handlers for news & scores components
