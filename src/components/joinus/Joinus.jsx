import "./joinus.scss";
import {
  Row,
  Col,
  Container,
  Card,
  ListGroup,
} from 'react-bootstrap/'


export default function Joinus() {

  return (
    <>
      <Container className="joinus content-container" id="home">

        <Container className="hours content-container py-4" id="home" fluid="false">
          <Row>
            <Col className="map d-flex justify-content-center align-items-center py-4" >
              <Card className="card-size flex-grow-1">
                <Card.Title className="text-center">Latest Message</Card.Title>
                <Card.Body className="text-center">
                  <div className="videoWrapper">
                    <iframe
                      height="315"
                      width="560"
                      src="https://www.youtube.com/embed?start=1&autoplay=1&mute=1&listType=playlist&list=UU5jYWyaWW3b0r7MUrK1WVxw&autoplay=1"
                      frameBorder="0"
                      title="Latest Sermon embed"
                      className=""
                      loading="lazy"
                      allowFullScreen={true}
                      allow={{autoplay: true, clipboardWrite: true, encryptedMedia: true, pictureInPicture: true, webShare: true}}
                    >
                    </iframe>
                  </div>
                  <br></br>
                  <Card.Text className="previous-sermons">
                    Previous 3 Sermons
                    <Row>
                      <Col>
                        <br></br>
                        <div className="videoWrapper">
                          <iframe
                            title="Previous Sermon 1 embed"
                            src="https://www.youtube.com/embed?listType=playlist&list=UU5jYWyaWW3b0r7MUrK1WVxw&index=2">
                          </iframe>
                        </div>
                      </Col>
                      <Col>
                        <br></br>
                        <div className="videoWrapper">
                          <iframe
                            title="Previous Sermon 2 embed"
                            src="https://www.youtube.com/embed?listType=playlist&list=UU5jYWyaWW3b0r7MUrK1WVxw&index=3">
                          </iframe>
                        </div>
                      </Col>
                      <Col>
                        <br></br>
                        <div className="videoWrapper">
                          <iframe
                            title="Previous Sermon 3 embed"
                            src="https://www.youtube.com/embed?listType=playlist&list=UU5jYWyaWW3b0r7MUrK1WVxw&index=4">
                          </iframe>
                        </div>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center" lg={6} md={12} sm={12} xs={12}>
              <Card className="card-size">
                <Card.Title className="text-center py-4">Join Us For Worship</Card.Title>
                <Card.Body className="text-center">
                  <Card.Subtitle className="text-center text-muted day">
                    Wednesday
                  </Card.Subtitle>
                  <ListGroup variant="flush">
                    <ListGroup.Item>MID-WEEK PRAYER MEETING: <span style={{ color: "maroon" }}>TBD...</span></ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                  <br></br>
                  <Card.Subtitle className="text-center text-muted day">
                    Friday
                  </Card.Subtitle>
                  <ListGroup variant="flush">
                    <ListGroup.Item>"PAUSE" - EVENING WORSHIP: <span style={{ color: "maroon" }}>7:00 P.M.</span></ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                  <br></br>
                  <Card.Subtitle className="text-center text-muted day">
                    Saturday
                  </Card.Subtitle>
                  <ListGroup variant="flush">
                    <ListGroup.Item>BREAKFAST: <span style={{ color: "maroon" }}>9:00 A.M.</span></ListGroup.Item>
                    <ListGroup.Item>MORNING PRAYER: <span style={{ color: "maroon" }}>9:35 A.M.</span></ListGroup.Item>
                    <ListGroup.Item>SABBATH SCHOOL: <span style={{ color: "maroon" }}>10:00 A.M.</span></ListGroup.Item>
                    <ListGroup.Item>DIVINE WORSHIP: <span style={{ color: "maroon" }}>11:00 A.M.</span></ListGroup.Item>
                    <ListGroup.Item>POTLUCK LUNCH: <span style={{ color: "maroon" }}>1:00 P.M.</span></ListGroup.Item>
                  </ListGroup>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center" lg={6} md={12} sm={12} xs={12}>
              <Card className="card-size-social">
                <Card.Title className="text-center py-4">Social Media Updates</Card.Title>
                <Card.Body className="text-center">
                  <Card.Subtitle className="text-center text-muted day">
                    <div>
                      <iframe
                        title="Facebook Posts embed"
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61572554996177&tabs=timeline%2C%20events&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" height="500"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                      </iframe>
                    </div>
                  </Card.Subtitle>
                  <Card.Text>
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
