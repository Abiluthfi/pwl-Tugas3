import React from "react";
import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";
import { Col, Row } from "react-bootstrap";
import MessageForm from "../Components/MessageForm";

const Contact = () => {
  return (
    <div>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <MessageForm />
        </Col>
      </Row>
      <Row className="m-0 p-0">
        <Col>
          <Footer />
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
