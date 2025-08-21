import "./footer.scss";
import {
  Container
} from 'react-bootstrap/'
import { Directions, YouTube, CreditCard, MenuBook } from '@mui/icons-material';


const Footer = () => {
  return (
    <Container className="welcome py-4 content-container" id="welcome" fluid="true">
      <div className="footer d-flex align-items-center justify-content-between pl-1 pr-2 py-4">
        <span className="d-flex justify-content-start">All Nations African SDA Church © 2025 </span>
        <span className="d-flex justify-content-between">
          <a target="_blank" href="https://ssnet.org/lessons/mobile.html" rel="noreferrer"><MenuBook className="mx-1" /></a>
          <a target="_blank" href="https://www.youtube.com/channel/UC5jYWyaWW3b0r7MUrK1WVxw/featured" rel="noreferrer"><YouTube className="mx-1" /></a>
          <a target="_blank" href="https://adventistgiving.org/#/org/ANPMAL/envelope/start" rel="noreferrer"><CreditCard className="mx-1" /></a>
          <a target="_blank" href="https://goo.gl/maps/sGgVPa6nGTDTewJL7" rel="noreferrer"><Directions className="mx-1" /></a>
        </span>
      </div>
    </Container>
  )
}

export default Footer;