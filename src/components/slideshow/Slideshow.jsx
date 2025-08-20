import "./slideshow.scss";
import {
  Container,
  Row,
  Col,
  Carousel,
} from 'react-bootstrap/'


export default function Slideshow() {

  return (
    <Container className="home content-container pb-4" id="home" fluid="true">

      <Container className="content-container testimonials py-4 px-4">
        <Row className="d-flex justify-content-center">
          <Col lg={6} md={12} sm={12} xs={12}>
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_hero.jpg"
                  alt="Furniture Assembly &amp; Disassembly Package"
                  height={360}
                />
                <Carousel.Caption>
                  <h5>Visit All Nations</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_podium.jpg"
                  alt="Junk &amp; Trash Hauling Package"
                  height={360}
                />
                <Carousel.Caption>
                  <h5>Spreading The Gospel.</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_anasda_youth.jpg"
                  alt="Junk &amp; Trash Hauling Package"
                  height={360}
                />
                <Carousel.Caption>
                  <h5>Youth Ministry</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_anasda_children.jpg"
                  alt="Furniture Assembly &amp; Disassembly Package"
                  height={360}
                />
                <Carousel.Caption>
                  <h5>Children's Ministry</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_hearts.jpg"
                  alt="Commercial Moving Package"
                  height={360}
                />
                <Carousel.Caption>
                  <h5>From Hearts 2 Hands Project</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_Malaria_project.jpg"
                  alt="Furniture Assembly &amp; Disassembly Package"
                  height={360}
                />
                <Carousel.Caption>
                  <h5>Nothing But Nets Project</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_community.jpg"
                  alt="Furniture Assembly &amp; Disassembly Package"
                  height={360}
                />
                <Carousel.Caption>
                  <h5>Community Service</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Church_health_teaser.jpg"
                  alt="Furniture Assembly &amp; Disassembly Package"
                  height={360}
                />
                <Carousel.Caption>
                  <h5>Health Ministry</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

    </Container>
  )
}