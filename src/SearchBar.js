import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'

const SearchBar = () => {
  return (
    <Navbar className="search-bar">
      <Form inline>
        <Form.Control placeholder="Search...."></Form.Control>
      </Form>
    </Navbar>
  )
}

export default SearchBar