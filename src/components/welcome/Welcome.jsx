import "./welcome.scss";
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import { 
  Row,
  Col,
  Container,
  Card
} from 'react-bootstrap/'

export default function Welcome() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      typeSpeed:  50,
      backDelay: 1500,
      backSpeed:  50,
      strings: [
        'Build Loving Relationships in Christ',
        'Connect with God',
        'Connect with One Another',
        'Connect with Community'
      ],
    })
  }, [])

  return (
    <>
      <Container className="welcome content-container" id="welcome" fluid="true">
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Card className="card-size">
            <Card.Title className="text-center px-2">Welcome to All Nations African Seventh-Day Adventist Church</Card.Title>
            <Card.Subtitle className="text-center text-muted">
              Our Goal is to: <span className="typing" ref={textRef}></span>
            </Card.Subtitle>
            <Card.Body className="text-center">
              <Card.Text>
              The All Nations African Seventh-Day Adventist Church exists as part of the body of Jesus Christ to nurture believers by providing a positive, spiritual and culturally sensitive environment for the African community and other nations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}
