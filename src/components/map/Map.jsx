import "./map.scss";
import {
  Container,
  Badge,
  Card,
  ListGroup,
  Row,
  Col
 } from 'react-bootstrap/'
 import FadeIn from 'react-fade-in';

  
 export default function Map() {
  
  return (
    <>
    <Container className="home content-container" id="home">
      <FadeIn>
        <Container className="hours content-container py-4 px-4" id="home" fluid="true">
            <Row>
              <Col className="d-flex justify-content-center py-4" lg={4} md={12} sm={12}>
                <Card className="card-size">
                  <Card.Title className="text-center px-2">Business Hours</Card.Title>
                  <Card.Body className="text-center">
                    <ListGroup variant="flush">
                      <ListGroup.Item>Mon:	Closed</ListGroup.Item>
                      <ListGroup.Item>Tue:	Closed</ListGroup.Item>
                      <ListGroup.Item>Wed:	Closed</ListGroup.Item>
                      <ListGroup.Item>Thu:	Closed</ListGroup.Item>
                      <ListGroup.Item>Fri:	5:00 PM – 10:00 PM</ListGroup.Item>
                      <ListGroup.Item>Sat:	8:30 AM – 7:00 PM</ListGroup.Item>
                      <ListGroup.Item>Sun:	Closed</ListGroup.Item>
                    </ListGroup>
                    <Card.Text>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="map d-flex justify-content-center align-items-center py-4 px-4" lg={8} md={12} sm={12}>
              <Card className="card-size flex-grow-1">
                <Card.Title className="text-center px-2">Directions</Card.Title>
                <Card.Body className="text-center">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.2891942427573!2d-117.23943998474658!3d34.1389426805825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c3548d2b919c47%3A0xec5e3d50f1fb38dd!2sAll%20Nations%20African%20SDA%20Church!5e0!3m2!1sen!2sus!4v1641687150450!5m2!1sen!2sus"
                    frameborder="0"
                    title="Google Maps embed"
                    className=""
                    loading="lazy"
                  >
                  </iframe>
                  <br></br>
                  <Card.Text>
                    2282 Pumalo St, San Bernardino, CA 92404
                  </Card.Text>
                  <a href="https://goo.gl/maps/9moeHe6fZFbXKZTF8" target="_blank" rel="noreferrer">
                    <p className="directions d-flex justify-content-center">
                    <Badge bg="danger">Click Here to Open Google Maps</Badge>
                    </p>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </FadeIn>
    </Container>
  </>
  )
 }
 