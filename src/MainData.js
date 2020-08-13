import React, { useState } from "react";
import SportsNews from "./SportsNews";
import SearchBar from "./SearchBar";
import Col from "react-bootstrap/Col";

const MainData = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const { sport } = props;

  const handleOnChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Col>
      <SearchBar handleOnChange={handleOnChange} searchValue={searchValue} />
      <SportsNews sport={sport} searchValue={searchValue} />
    </Col>
  );
};

export default MainData;
