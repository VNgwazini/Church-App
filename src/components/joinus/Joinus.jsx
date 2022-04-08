import "./joinus.scss";
import { 
  Row,
  Col,
  Container,
  Card,
  ListGroup,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';


export default function Joinus() {

  return (
    <>
      <Container className="joinus content-container" id="home" fluid="false">
      <FadeIn>
        <Container className="hours content-container py-4 px-4" id="home" fluid="false">
            <Row>
              <Col className="d-flex justify-content-center py-4" lg={4} md={12} sm={12} xs={12}>
                <Card className="card-size">
                <Card.Title className="text-center px-2">Join Us For Worship</Card.Title>
                  <Card.Body className="text-center">
                  <Card.Subtitle className="text-center text-muted day">
                  Friday
                </Card.Subtitle>
                <ListGroup variant="flush">
                  <ListGroup.Item>EVENING VESPERS: 7:00 P.M.</ListGroup.Item>
                  <ListGroup.Item></ListGroup.Item>
                </ListGroup>
                <br></br>
                <Card.Subtitle className="text-center text-muted day">
                  Saturday
                </Card.Subtitle>
                <ListGroup variant="flush">
                  <ListGroup.Item>MORNING PRAYER SERVICE: 9:15 A.M.</ListGroup.Item>
                  <ListGroup.Item>BIBLE STUDY: 9:45 A.M.</ListGroup.Item>
                  <ListGroup.Item>WORSHIP EXPERIENCE: 11:00 A.M.</ListGroup.Item>
                </ListGroup>
                    <Card.Text>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="map d-flex justify-content-center align-items-center py-4" lg={8} md={12} sm={12} xs={12}>
              <Card className="card-size flex-grow-1">
              <Card.Title className="text-center px-2">Latest Message</Card.Title>
                <Card.Body className="text-center">
                  <iframe
                    height="315"
                    src="https://www.youtube.com/embed/c0dahMbWNU4?start=1&autoplay=1&mute=1"
                    frameborder="0"
                    title="Google Maps embed"
                    className=""
                    loading="lazy"
                  >
                  </iframe>
                  <br></br>
                  <Card.Text>
                    Africa Month Presentation
                  </Card.Text>
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
