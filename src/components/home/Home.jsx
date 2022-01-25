import "./home.scss";
import {
 Container, 
 Row,
 Col,
 Button,
 Card,
 ListGroup,
 Badge,
} from 'react-bootstrap/'
import {ChildFriendly, Favorite, GroupWork, Healing, Hotel, People } from "@material-ui/icons";
import FadeIn from 'react-fade-in';

import { init } from 'ityped'
import { useEffect, useRef } from "react"
import Links from "../links/Links";
import Projects from "../projects/Projects";


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
          <Row>
              <Col className="py-4">
                <img src="http://allnationsafricanchurch.com/wp-content/uploads/2017/12/all-nations-front.jpg" alt=""></img>
              </Col>
          </Row>
          <Row>
            <Col className="">
              <p className="text-center py-2">
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
        </FadeIn>
      </Container>
      <Container className="content-container trusted py-4 px-4" fluid="true">
        <Row>
          <Col className="">
            <p className=" trusted-title text-center">
              Offered Services
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="" sm={3} md={4} lg={4}>
            <p className="text-center">
            <ChildFriendly/> &nbsp; CHILDREN'S MINISTRY
            </p>
          </Col>
          <Col className="" sm={3} md={4} lg={4}>
            <p className="text-center">
            <GroupWork/> &nbsp; YOUTH MINISTRY
            </p>
          </Col>
          <Col className="" sm={3} md={4} lg={4}>
            <p className="text-center">
            <People/> &nbsp; COMMUNITY SERVICES
            </p>
          </Col>
          <Col className="" sm={3} md={4} lg={4}>
            <p className="text-center">
            <Healing/> &nbsp; HEALTH MINISTRY
            </p>
          </Col>
          <Col className="" sm={3} md={4} lg={4}>
            <p className="text-center">
            <Favorite/> &nbsp; FROM HEARTS TO HANDS PROJECT
            </p>
          </Col>
          <Col className="" sm={3} md={4} lg={4}>
            <p className="text-center">
            <Hotel/> &nbsp; NOTHING BUT NETS PROJECT
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="watching content-container py-4" id="home" fluid="true">
          <Row>
            <Col className="d-flex justify-content-center py-4" lg={6} md={6} sm={12}>
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
            <Col className="map d-flex justify-content-center align-items-center py-4 px-4" lg={6} md={6} sm={12}>
            <Card className="card-size flex-grow-1">
              <Card.Title className="text-center px-2">Latest Message</Card.Title>
              <Card.Body className="text-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bDOEkIxqQPA?start=1&autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
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
      <Projects/>
      <Links/>
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
                    <ListGroup.Item>Fri:	5:00 AM – 10:00 PM</ListGroup.Item>
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
  )
}