import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import PropTypes from 'prop-types';


export default function Bar(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">{props.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">About</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
Bar.prototype = {
    title: PropTypes.string
  };
Bar.defaultProps = {
    title: "Title"
  };
