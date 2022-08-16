import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <div className='bg-grey'>
      <hr />
      <Container>
        <Row>
          <Col>
            <h5>PRODUCT</h5>
            <hr />
            <p>Privacy Policy</p>
            <p>Terms and Condition</p>
            <p>Help & Support</p>
          </Col>
          <Col>
            {" "}
            <h5>ASSESMENTS</h5>
            <hr />
            <p>Sample Assesments</p>
          </Col>
          <Col>
            {" "}
            <h5>RESOURCES</h5>
            <hr />
            <p>Books</p>
            <p>Blogs</p>
            <p>Contact Us</p>
          </Col>
        </Row>
      </Container>

      <hr />
      <p style={{ fontSize: "9px" }}>
        https://www.onlineassesment.in/
      </p>
    </div>
  );
};