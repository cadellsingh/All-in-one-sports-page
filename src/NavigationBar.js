import React, { useState } from "react";
import SearchBar from "./SearchBar";
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
  const [searchValue, setSearchValue] = useState("");

  const getSport = (sport) => {
    setSportToFetch(sport);
    setClickedOn(sport);
  };

  const handleOnChange = (event) => {
    setSearchValue(event.target.value);
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
              <SearchBar
                handleOnChange={handleOnChange}
                searchValue={searchValue}
              />
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </NavBarContainer>
      <SportsNews sport={sportToFetch} searchValue={searchValue} />
    </div>
  );
};

export default NavigationBar;
