import Topbar from '../topbar/Topbar';
import "./watching.scss";
import {
  Row,
  Col,
  Container,
} from 'react-bootstrap/'
import Map from '../map/Map';
import Joinus from '../joinus/Joinus';
import LatestMessage from '../latestMessage/LatestMessage';
import Signature from '../signature/Signature';

const Watching = () => {
  return (
    <>
      <Topbar />
      <Container className="contact-us content-container pt-4" id="contact_us">
        <Row>
          <Col className="">
            <p className="text-center">
              Sample Church
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="">
            <p className="home-title text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid="true">
        <LatestMessage />
        <Joinus />
        <Map />
        <Signature />
      </Container>
    </>
  )
}
export default Watching;

