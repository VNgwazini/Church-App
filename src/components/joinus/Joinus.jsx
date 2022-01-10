import "./joinus.scss";
import { 
  Row,
  Col,
  Container,
  Card,
  ListGroup
} from 'react-bootstrap/'

export default function Joinus() {

  return (
    <>
      <Container className="joinus py-4 content-container" id="joinus" fluid="true">
      <Row>
        <Col className="d-flex justify-content-center align-items-center py-4">
          <Card className="card-size">
            <Card.Title className="text-center px-2 py-4">JOIN US FOR WORSHIP</Card.Title>
            <Card.Body className="text-center">
            <Card.Subtitle className="text-center text-muted">
                Friday
              </Card.Subtitle>
              <ListGroup variant="flush">
                <ListGroup.Item>EVENING VESPERS: 7:00 P.M.</ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
              <br></br>
              <Card.Subtitle className="text-center text-muted">
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
      </Row>
    </Container>
    </>
  )
}
