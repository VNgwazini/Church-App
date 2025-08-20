import "./home.scss";
import {
 Container, 
 Row,
 Col,
 Button,
 Carousel,
} from 'react-bootstrap/'

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
      ],
    })
  }, [])

 return (
  <Container className="home content-container pt-4" id="home">

      <Container className="content-container py-4" fluid="true">
    
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
          <Row>
            <Col className="">
              <p className="text-center pt-2 px-2">
              The All Nations African Seventh-Day Adventist Church exists as part of the body of Jesus Christ to nurture believers by providing a positive, spiritual and culturally sensitive environment for the African community and other nations.
              </p>
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
          <Row className="d-flex justify-content-center">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Carousel variant="dark">
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_hero.jpg"
                  alt="Furniture Assembly &amp; Disassembly Package"
                />
                {/* <Carousel.Caption>
                  <h5>Visit All Nations</h5>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_podium.jpg"
                  alt="Junk &amp; Trash Hauling Package"
                />
                {/* <Carousel.Caption>
                  <h5>Spreading The Gospel.</h5>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_anasda_youth.jpg"
                  alt="Junk &amp; Trash Hauling Package"
                />
                {/* <Carousel.Caption>
                  <h5>Youth Ministry</h5>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_anasda_children.jpg"
                  alt="Furniture Assembly &amp; Disassembly Package"
                />
                {/* <Carousel.Caption>
                <h5>Children's Ministry</h5>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_hearts.jpg"
                  alt="Commercial Moving Package"
                />
                {/* <Carousel.Caption>
                  <h5>From Hearts 2 Hands Project</h5>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_Malaria_project.jpg"
                  alt="Furniture Assembly &amp; Disassembly Package"
                />
                {/* <Carousel.Caption>
                  <h5>Nothing But Nets Project</h5>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_community.jpg"
                  alt="Furniture Assembly &amp; Disassembly Package"
                />
                {/* <Carousel.Caption>
                <h5>Community Service</h5>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_health_teaser.jpg"
                  alt="Furniture Assembly &amp; Disassembly Package"
                />
                {/* <Carousel.Caption>
                <h5>Health Ministry</h5>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
    
      </Container>

   </Container>
  )
}
