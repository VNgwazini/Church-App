import "./home.scss";
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  ButtonGroup,
} from 'react-bootstrap/'

import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Home() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 50,
      backDelay: 1500,
      backSpeed: 50,
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
        <Row className="d-flex justify-content-center primary-buttons py-4">
          <ButtonGroup className="w-100 pb-4 px-4" aria-label="Basic example">
            <Button variant="danger" href="https://www.youtube.com/channel/UC5jYWyaWW3b0r7MUrK1WVxw/featured" target="_blank">
              Watch Online
            </Button>
            <Button variant="outline-danger" href="https://goo.gl/maps/9moeHe6fZFbXKZTF8" target="_blank">
              Visit In Person
            </Button>
            <Button variant="danger" href="/contact_us" target="_blank">
              Contact Us
            </Button>
          </ButtonGroup>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Carousel
              variant="dark"
              nextLabel={false}
              prevLabel={false}
              indicators={false}
              className="carousel"
            >
              <Carousel.Item>
                <img
                  src="assets/Church_hero.jpg"
                  alt="Church Hero"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="assets/Church_podium.jpg"
                  alt="Church Podium"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="assets/Church_anasda_youth.jpg"
                  alt="YOUTH MINISTRY"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="assets/Church_anasda_children.jpg"
                  alt="CHILDREN'S MINISTRY"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="assets/Church_hearts.jpg"
                  alt="FROM HEARTS TO HANDS PROJECT"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="assets/Church_Malaria_project.jpg"
                  alt="NOTHING BUT NETS PROJECT"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="assets/Church_community.jpg"
                  alt="COMMUNITY SERVICES"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

      </Container>

    </Container>
  )
}
