import "./topbar.scss";
import { 
  Container,
  Nav, 
  Navbar
} from 'react-bootstrap/'
import {Home, MenuBook, Mail, Directions, YouTube, CreditCard } from "@material-ui/icons"

export default function Topbar() {
  return (
    <Container className="topbar py-4 content-container" id="topbar" fluid="true">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" id="navbar">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">
          <img src="assets/Anasda_logo.png" alt=""/>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/home">
            <Home className="icon"/>
            &nbsp; Home
          </Nav.Link>
          <Nav.Link href="https://ssnet.org/lessons/mobile.html" target="_blank">
            <MenuBook className="icon"/>
            &nbsp; Learning
          </Nav.Link>
          <Nav.Link href="https://www.youtube.com/channel/UC5jYWyaWW3b0r7MUrK1WVxw/featured" target="_blank">
            <YouTube className="icon"/>
            &nbsp; Watching
          </Nav.Link>
          <Nav.Link href="https://adventistgiving.org/#/org/ANPMAL/envelope/start" target="_blank">
            <CreditCard className="icon"/>
            &nbsp; Giving
          </Nav.Link>
          {/* <Nav.Link href="/bulletin">
            <Description className="icon"/>
            &nbsp; Bulletin
          </Nav.Link> */}
          <Nav.Link href="https://goo.gl/maps/sGgVPa6nGTDTewJL7" target="_blank">
            <Directions className="icon"/>
            &nbsp; Directions
          </Nav.Link>
          <Nav.Link href="/contact_us">
              <Mail className="icon"/>
              &nbsp; Contact Us
          </Nav.Link>
          {/* <Nav.Link href="mailto:allnationsmailbox@gmail.com" target="_blank">
            <Mail className="icon"/>
            &nbsp; Contact Us
          </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}