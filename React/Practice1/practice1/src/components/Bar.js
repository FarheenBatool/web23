import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import PropTypes from 'prop-types';


export default function Bar(props) {
  return (
    <>
      <Navbar bg={props.mode} data-bs-theme={props.mode}>
        <Container>
          <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form>
        <Form.Check 
          type="switch"
          id="custom-switch"
          style={{color:props.mode==="light"?"black":"white"}}
          label="Enable Dark Mode"
          onClick={props.toggle}
        />
        </Form>
        </Container>
      </Navbar>
      </>
  )
}
Bar.prototype = {
    title: PropTypes.string
  };
Bar.defaultProps = {
    title: "Title"
  };




