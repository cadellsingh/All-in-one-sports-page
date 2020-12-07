import React from "react";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

const Search = styled(Form)`
  & .form-control {
    background-color: #172a45;
    border: none;
  }

  & .form-control:focus {
    border: none;
    background-color: #0d131a;
    outline: none;
    color: white;
  }
`;

const SearchBar = (props) => {
  const { handleOnChange, searchValue } = props;

  return (
    <Nav>
      <Search inline>
        <Form.Control
          placeholder="Search...."
          value={searchValue}
          onChange={handleOnChange}
        />
      </Search>
    </Nav>
  );
};

export default SearchBar;
