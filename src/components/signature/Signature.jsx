import "./signature.scss";
import {
 Container, 
 Row,
 Col,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';


export default function Signature() {
 
 return (
  <Container className="home content-container py-4" id="home" fluid="true">
    <FadeIn>
      <Container className="pb-2">
        <Row>
          <Col>
            <p className="signature text-center">
              <a href="https://vusa.io/" target="_blank" rel="noreferrer">
                Built by Vusumuzi Ngwazini | vusa.io
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </FadeIn>
   </Container>
  )
}