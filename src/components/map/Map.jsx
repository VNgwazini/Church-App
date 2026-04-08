import "./map.scss";
import {
  Container,
  Badge,
  Card,
  ListGroup,
  Row,
  Col
 } from 'react-bootstrap/'
 
  
 export default function Map() {
  
  return (
    <>
    <Container className="home content-container py-4" id="home">
  
        <Container className="hours content-container py-4 px-4" id="home" fluid="true" style={{borderRadius: "10px"}}>
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
                 // src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1659334.0400267695!2d-120.84056072178565!3d35.67978929596249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d33.956976499999996!2d-116.9514585!4m5!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex%2C%201600%20Amphitheatre%20Pkwy%2C%20Mountain%20View%2C%20CA%2094043!3m2!1d37.4220541!2d-122.08532419999999!5e0!3m2!1sen!2sus!4v1774940281404!5m2!1sen!2sus"
                    frameBorder="0"
                    title="Google Maps embed"
                    className=""
                    loading="lazy"
                    style={{borderRadius: "10px"}}
                  >
                  </iframe>
                  <br></br>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
  
    </Container>
  </>
  )
 }
