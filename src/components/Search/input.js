import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { Form } from 'react-bootstrap'
import { Input } from "./styles"

export default connectSearchBox(({ refine, ...rest }) => (
  <Form className="mt-5">
    <Form.Group className="d-flex justify-content-start align-items-center">
      <Input
        type="text"
        id="searchbar"
        placeholder="Enter Your Search Here" 
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        {...rest}
    />
    </Form.Group>
    
  </Form>
))
