import "./projects.scss";
import { useState } from "react";
import { 
  Row,
  Col,
  Container,
  Form,
  Button,
  Card,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';


import ProjectListItem from "../projectListItem/ProjectListItem";
import {
  projectData
} from "../../data";
import Map from "../map/Map";
import Signature from "../signature/Signature";

export default function Projects() {
// eslint-disable-next-line
  const [data, setData] = useState(projectData);

  return (
    <>
    <Container className="projects content-container pt-4" id="contact_us">
      <FadeIn className="pt-4">
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
      </FadeIn>
    </Container>
    <Container className="home content-container" id="home">
      <FadeIn>
        <Container className="hours content-container px-4" id="home" fluid="true">
          <Row>
            <Col className="d-flex justify-content-center py-4 my-4" lg={4} md={12} sm={12}>
              <Card className="card-size">
              <Card.Title className="text-center px-2">Contact Us</Card.Title>
                <Card.Body className="d-flex align-items-center text-center">
                  <Form action="https://formsubmit.co/vusumuzi.ngwazini@gmail.com" method="POST">
                    <p className="text-center pt-4">
                      Welcome! We're so glad you're interested in worshiping with us. Help us get to know you by filling out this card so we can reach out to you. We hope you have a blessed day!
                    </p>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="name" name="name" placeholder="Enter name here..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" name="email" placeholder="Enter email here..." />
                      <Form.Control type="hidden" name="_url" value="https://demo-church-app.vusa.io/contact_us" />
                      <Form.Control type="hidden" name="_next" value="https://demo-church-app.vusa.io/" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMessage">
                      <Form.Label>Personal Message</Form.Label>
                      <Form.Control as="textarea" type="textarea" name="textarea"placeholder="Enter message here..." />
                      <Form.Text className="text-muted">
                        Thank you for sharing with us!
                      </Form.Text>
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="danger" type="submit">
                      Submit
                    </Button>
                  </Form>
                <Card.Text>
                </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center py-4 my-4" lg={8} md={12} sm={12}>
              <Card className="card-size">
                <Card.Title className="text-center px-2">Our Ministries &amp; Missions</Card.Title>
                <Card.Body className="text-center">
                  <Row>
                  {data.map((item) => (
                    <ProjectListItem item={item}/>
                  ))}
                  </Row>
                <Card.Text>
                </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </FadeIn>
    </Container>
    <Container fluid="true">
      <Map/>
      <Signature/>
    </Container>
    </>
  )
}
