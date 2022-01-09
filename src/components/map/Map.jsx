
import "./map.scss";
import { 
  Col,
  Row,
  Container,
} from 'react-bootstrap/'

export default function Map() {

  return (
    <>
    <Container className="map content-container" id="map" fluid="true">
      <Row>
         <Col className="d-flex justify-content-center">
          <h5>Directions</h5>
        </Col>
      </Row>
        <div 
          class="block" 
          data-type="map" 
          data-map-location="All Nations African SDA Church 2282 Pumalo St, San Bernardino, CA 92404" 
          data-map-zoom="15"
        >
        </div>
          <iframe 
          frameborder="0" 
          title="Google Maps embed" 
          className="disable-click px-4 py-4" 
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.2891942427573!2d-117.23943998474658!3d34.1389426805825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c3548d2b919c47%3A0xec5e3d50f1fb38dd!2sAll%20Nations%20African%20SDA%20Church!5e0!3m2!1sen!2sus!4v1641687150450!5m2!1sen!2sus" 
          >
          </iframe>
          <p className="text-center px-4">All Nations African SDA Church</p>
          <p className="text-center px-4">2282 Pumalo St, San Bernardino, CA 92404</p>
  </Container>
  </>
  )
}