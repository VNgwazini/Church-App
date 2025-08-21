import "./topbar.scss";
import {
  Container,
  Nav,
  Navbar
} from 'react-bootstrap'; // <-- Remove the trailing slash
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MailIcon from '@mui/icons-material/Mail';
import DirectionsIcon from '@mui/icons-material/Directions';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const Topbar = () => {
  return (
    <Container className="topbar py-4 content-container" id="topbar" fluid="true">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" id="navbar">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">
          <img src="assets/Anasda_logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">
              <HomeIcon className="icon" />
              &nbsp; Home
            </Nav.Link>
            <Nav.Link href="https://sabbath-school.adventech.io/en" target="_blank">
              <MenuBookIcon className="icon" />
              &nbsp; Learning
            </Nav.Link>
            <Nav.Link href="https://www.youtube.com/channel/UC5jYWyaWW3b0r7MUrK1WVxw/featured" target="_blank">
              <YouTubeIcon className="icon" />
              &nbsp; Watching
            </Nav.Link>
            <Nav.Link href="https://adventistgiving.org/#/org/ANPMAL/envelope/start" target="_blank">
              <CreditCardIcon className="icon" />
              &nbsp; Giving
            </Nav.Link>
            <Nav.Link href="https://goo.gl/maps/sGgVPa6nGTDTewJL7" target="_blank">
              <DirectionsIcon className="icon" />
              &nbsp; Directions
            </Nav.Link>
            <Nav.Link href="/contact_us">
              <MailIcon className="icon" />
              &nbsp; Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default Topbar;