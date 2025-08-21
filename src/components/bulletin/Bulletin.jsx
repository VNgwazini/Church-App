import Topbar from '../topbar/Topbar';
import Footer from '../footer/Footer';
import "./bulletin.scss";
import { 
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap/'

const Bulletin = () => {
const url = "https://drive.google.com/file/d/1xI4-Bs4XbBZf0-pI4tkr7dQh7zV3wgL3/preview"
  return (
    <>
    <Topbar/>
    <Container className="bulletin content-container py-4" id="bulletin" fluid="true">
      <Row>
        <Col className="d-flex justify-content-center">
          <h5>Bulletin</h5>
        </Col>
      </Row>
      <Row>
          <Col className="d-flex justify-content-center py-1">
            <Button>
              <a href="/assets/AnasdacBulletin.pdf" target="_blank" class="btn">Download Bulletin</a>
            </Button>
          </Col>
        </Row>
          <iframe
            src={url+"#toolbar=1&navpanes=0&scrollbar=0"}
            frameBorder="0"
            scrolling="auto"
            title="My Resume">
          </iframe>
          {/* <embed src={url + "#toolbar=1&navpanes=0&scrollbar=0"} type="application/pdf" width="100%" height="600px" /> */}
    </Container>
    <Footer/>
    </>
  )
}
export default Bulletin;

