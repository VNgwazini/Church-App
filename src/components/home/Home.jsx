import "./home.scss";
import {
 Container, 
 Row,
 Col,
 Button,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';

import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Home() {
 
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      typeSpeed:  50,
      backDelay: 1500,
      backSpeed:  50,
      strings: [
        'Connect with God',
        'Connect with One Another',
        'Connect with Community',
        'Build Loving Relationships in Christ',
      ],
    })
  }, [])

 return (
  <Container className="home content-container py-4" id="home">
    <FadeIn>
      <Container className="content-container py-4" fluid="true">
        <FadeIn>
          <Row>
            <Col className="">
              <p className="text-center pt-4">
                All Nations African Seventh-Day Adventist Church
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="">
              <p className="home-title text-center">
              Welcome to our Community
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="">
              <p className="text-center text-muted">
              Our Goal is to: <span className="typing" ref={textRef}></span>
              </p>
            </Col>
          </Row>
          <Row className="h-50">
            <Col className="d-flex justify-content-center" lg={12} md={12} sm={12}>
              <img
                src="http://allnationsafricanchurch.com/wp-content/uploads/2017/12/all-nations-front.jpg"
                alt="Headshot"
              className="img-thumbnail"
              />
            </Col>
          </Row>
          <Row className="primary-buttons py-4">
            <Col className="">
              <Button variant="danger" href="https://www.youtube.com/channel/UC5jYWyaWW3b0r7MUrK1WVxw/featured" target="_blank">
              Watch Online
              </Button>
            </Col>
            <Col className="">
              <Button variant="outline-danger" href="https://goo.gl/maps/9moeHe6fZFbXKZTF8" target="_blank">
                Visit In Person
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="">
              <p className="text-center pt-2 px-2">
              The All Nations African Seventh-Day Adventist Church exists as part of the body of Jesus Christ to nurture believers by providing a positive, spiritual and culturally sensitive environment for the African community and other nations.
              </p>
            </Col>
          </Row>
        </FadeIn>
      </Container>
    </FadeIn>
   </Container>
  )
}
