import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const allSports = {
  NBA: true,
  NFL: true,
  MLB: true,
  NHL: true,
  NCAAF: true,
  NCAAM: true,
};

const Sidebar = (props) => {
  const { getSport } = props;

  // displays selected sports
  const entries = Object.entries(allSports);
  const displaySelectedSports = [];
  for (const [sport, isSelected] of entries) {
    displaySelectedSports.push(
      isSelected && (
        <ListGroup.Item key={sport} onClick={(event) => getSport(sport)}>
          {sport}
        </ListGroup.Item>
      )
    );
  }

  return (
    <Col lg={2} className="sidebar-container">
      <ListGroup>
        <ListGroup.Item>
          <h2>All in one</h2>
        </ListGroup.Item>
        <div className="sport-buttons">{displaySelectedSports}</div>
      </ListGroup>
    </Col>
  );
};

export default Sidebar;
