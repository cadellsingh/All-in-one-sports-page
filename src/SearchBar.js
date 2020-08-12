import React from "react";
import Form from "react-bootstrap/Form";

const SearchBar = (props) => {
  const { handleOnChange, searchValue } = props;

  return (
    <Form className="search-bar" inline>
      <Form.Control
        placeholder="Search...."
        value={searchValue}
        onChange={handleOnChange}
      ></Form.Control>
    </Form>
  );
};

export default SearchBar;