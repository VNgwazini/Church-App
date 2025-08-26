import "./latestMessage.scss";
import {
  Row,
  Col,
  Container,
  Card,
} from 'react-bootstrap/'


export default function Joinus() {

  return (
    <>
      <Container className="latest-message content-container" id="home">

        <Container className="hours content-container py-4" id="home" fluid="false">
          <Row>
            <Col className="map d-flex justify-content-center align-items-center py-4" >
              <Card className="card-size flex-grow-1">
                <Card.Title className="text-center py-2">Latest Message</Card.Title>
                <Card.Text className="text-center py-2">Join us for our weekly online service every Saturday at 11:00 AM PST.</Card.Text>
                <Card.Body className="text-center">
                  <div className="videoWrapper">
                    <iframe
                      height="315"
                      width="560"
                      src="https://www.youtube.com/embed?start=1&autoplay=1&mute=1&listType=playlist&list=UU5jYWyaWW3b0r7MUrK1WVxw"
                      frameBorder="0"
                      title="Latest Sermon embed"
                      className=""
                      loading="lazy"
                      allowFullScreen={true}
                      allow={{ autoplay: true, clipboardWrite: true, encryptedMedia: true, pictureInPicture: true, webShare: true }}
                    >
                    </iframe>
                  </div>
                  <br></br>
                  <Card.Text className="previous-sermons">
                    Previous Messages
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={6}>
                        <br></br>
                        <div className="videoWrapper">
                          <iframe
                            title="Previous Sermon 1 embed"
                            frameborder="0"
                            src="https://www.youtube.com/embed?listType=playlist&list=UU5jYWyaWW3b0r7MUrK1WVxw&index=2">
                          </iframe>
                        </div>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6}>
                        <br></br>
                        <div className="videoWrapper">
                          <iframe
                            title="Previous Sermon 2 embed"
                            frameborder="0"
                            src="https://www.youtube.com/embed?listType=playlist&list=UU5jYWyaWW3b0r7MUrK1WVxw&index=3">
                          </iframe>
                        </div>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}
