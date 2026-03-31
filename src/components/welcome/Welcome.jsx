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
      <Container className="welcome content-container pb-4" id="welcome" fluid="true">
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Card className="card-size">
            <Card.Title className="text-center px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore eum sed, quo error aliquam ullam, odio ea velit tenetur eos, ipsam consequatur autem iusto quae! Neque accusamus molestiae dignissimos!</Card.Title>
            <Card.Subtitle className="text-center text-muted">
              Our Goal is to: <span className="typing" ref={textRef}></span>
            </Card.Subtitle>
            <Card.Body className="text-center">
              <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut molestias fugiat, vero pariatur consectetur corporis voluptas. Voluptas error reprehenderit ut magni facere. Inventore magnam facere perferendis voluptas excepturi quidem neque.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}
