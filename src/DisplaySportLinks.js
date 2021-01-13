import React from "react";
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

const DisplaySportLinks = (props) => {
  const { clickedOn, getSport } = props;

  const entries = Object.entries(allSports);
  const displaySports = [];
  for (const [sport, isSelected] of entries) {
    displaySports.push(
      isSelected && (
        <Nav.Link
          href="#"
          style={
            clickedOn === sport
              ? { fontWeight: "900", color: "black" }
              : { color: "white" }
          }
          onClick={(event) => getSport(sport)}
          key={sport}
        >
          {sport}
        </Nav.Link>
      )
    );
  }

  // return <Nav className="mr-auto">{displaySports}</Nav>;
  return (
    <div>
      <Nav className="mr-auto">{displaySports}</Nav>
    </div>
  );
};

export default DisplaySportLinks;
