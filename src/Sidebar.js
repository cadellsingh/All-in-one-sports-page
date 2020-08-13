import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import MainData from "./MainData";

const allSports = {
  ALL: true,
  NBA: true,
  NFL: true,
  MLB: true,
  NHL: true,
  NCAAF: true,
  NCAAM: true,
};

const Sidebar = (props) => {
  const [clickedOn, setClickedOn] = useState("ALL");
  const [sportToFetch, setSportToFetch] = useState("ALL");

  const getSport = (sport) => {
    setSportToFetch(sport);
    setClickedOn(sport)
  };

  const entries = Object.entries(allSports);
  const displaysSidebarSports = [];
  for (const [sport, isSelected] of entries) {
    displaysSidebarSports.push(
      isSelected && (
        <ListGroup.Item
          className={clickedOn === sport ? "clicked-on" : null}
          key={sport}
          onClick={(event) => getSport(sport)}
        >
          {sport}
        </ListGroup.Item>
      )
    );
  }

  return (
    <Row>
      <Col lg={2} className="sidebar-container">
        <ListGroup>
          <ListGroup.Item className="main-heading">
            <h2>All in one</h2>
          </ListGroup.Item>
          <div className="sport-buttons">{displaysSidebarSports}</div>
        </ListGroup>
      </Col>
      <MainData sport={sportToFetch} />
    </Row>
  );
};

export default Sidebar;
