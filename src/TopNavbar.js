import React from "react";
import Navbar from "react-bootstrap/Navbar";
import SportButtons from "./SportButtons";

const TopNavbar = () => {
  return (
    <Navbar variant="dark" bg="dark">
      <Navbar.Brand>All in one</Navbar.Brand>
      {/* <Navbar.Brand>News</Navbar.Brand> */}
      {/* <Navbar.Brand>Scores</Navbar.Brand> */}
    </Navbar>
  );
};

export default TopNavbar;
