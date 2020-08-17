import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SportsNews from "./SportsNews";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const allSports = {
  ALL: true,
  NBA: true,
  NFL: true,
  MLB: true,
  NHL: true,
  NCAAF: true,
  NCAAM: true,
};

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

  const entries = Object.entries(allSports);
  const displaysSidebarSports = [];
  for (const [sport, isSelected] of entries) {
    displaysSidebarSports.push(
      isSelected && (
        <Nav.Link
          href="#"
          id="button-link"
          className={clickedOn === sport ? "clicked-on" : null}
          onClick={(event) => getSport(sport)}
          key={sport}
        >
          {sport}
        </Nav.Link>
      )
    );
  }

  return (
    <div>
      <Row className="justify-content-center navBar-container">
        <Col lg={10}>
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand variant="dark" id="main-heading">
              All in one
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">{displaysSidebarSports}</Nav>
              <Nav>
                <SearchBar
                  handleOnChange={handleOnChange}
                  searchValue={searchValue}
                />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      <SportsNews sport={sportToFetch} searchValue={searchValue} />
    </div>
  );
};

export default NavigationBar;
