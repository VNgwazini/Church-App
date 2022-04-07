import "./offeredServices.scss";
import {
 Container, 
 Row,
 Col,
} from 'react-bootstrap/'
import {ChildFriendly, Favorite, GroupWork, Healing, Hotel, People } from "@material-ui/icons";
import FadeIn from 'react-fade-in';


export default function OfferedServices() {
 
 return (
  <Container className="home content-container py-4" id="home" fluid="true">
    <FadeIn>
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
    </FadeIn>
   </Container>
  )
}