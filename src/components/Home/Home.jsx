import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Home/Home.css"
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";


function Home() {
  return <Container className="container-fluid">
    <Row className="search-section col-md-12">
      <InputGroup className="col-6">
        <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </Row>
    <Row>
      <Col>1 of 1</Col>
    </Row>
    <Row>
      <Col>1 of 1</Col>
    </Row>
    <Row>
      <Col>1 of 1</Col>
    </Row>
    <Row>
      <Col>1 of 1</Col>
    </Row>
  </Container>;
}

export default Home;
