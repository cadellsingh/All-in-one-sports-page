import React, { useState } from "react";
import SportsNews from "./SportsNews";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import DisplaySportLinks from "./DisplaySportLinks";

const NavBarContainer = styled(Row)`
  background-color: #2d3b48;

  & .navbar-brand {
    color: white;
    font-size: 25px;
  }
`;

const NavigationBar = () => {
  const [clickedOn, setClickedOn] = useState("ALL");
  const [sportToFetch, setSportToFetch] = useState("ALL");

  const getSport = (sport) => {
    setSportToFetch(sport);
    setClickedOn(sport);
  };

  return (
    <div>
      <NavBarContainer className="justify-content-center">
        <Col lg={10}>
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand variant="dark">All in one</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <DisplaySportLinks clickedOn={clickedOn} getSport={getSport} />
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </NavBarContainer>
      <SportsNews sport={sportToFetch} />
    </div>
  );
};

export default NavigationBar;
