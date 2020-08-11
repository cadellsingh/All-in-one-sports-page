import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const allSports = {
  NBA: true,
  NFL: true,
  MLB: true,
  NHL: true,
  NCAAF: true,
  NCAAM: true,
};

const SportButtons = (props) => {
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

  return <div className="sport-buttons">{displaySelectedSports}</div>;
};

export default SportButtons;
