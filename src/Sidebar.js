import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import SportButtons from "./SportButtons";

const TopNavbar = () => {
  return (
    <Col lg={2} className="sidebar-container">
      <ListGroup>
        <ListGroup.Item>
          <h2>All in one</h2>
        </ListGroup.Item>
        <SportButtons />
      </ListGroup>
    </Col>
  );
};

export default TopNavbar;
