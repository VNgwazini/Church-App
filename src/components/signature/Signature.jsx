import "./signature.scss";
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap/'


export default function Signature() {

  return (
    <Container className="home content-container pt-2 pb-4" id="home" fluid="true">

      <Container className="pb-2">
        <Row>
          <Col>
            <p className="signature text-center">
              <a href="https://vusacodes.com/" target="_blank" rel="noreferrer">
                Built by Vusa Codes LLC
              </a>
            </p>
          </Col>
        </Row>
      </Container>

    </Container>
  )
}