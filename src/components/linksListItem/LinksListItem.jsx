import "./linksListItem.scss";
import { 
  Col,
  Card,
} from 'react-bootstrap/'

export default function LinksListItem({item}) {
  return (
        <Col className="d-flex justify-content-center text-center linksListItem py-4" lg={3} md={6} sm={6}>
          <a 
            href={item.link}
            target="_blank" rel="noreferrer"
          >
          <h5 className="py-2">{item.imgAlt}</h5>  
          <Card className="shadow card-size">
              <Card.Img 
                src={item.imgSrc}
                alt={item.imgAlt}
                className="img-thumbnail"
                style={{border: "transparent"}}
              />
              <Card.Title>{item.title}</Card.Title>
              <Card.Body>
                <Card.Text>
                  {item.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
  )
}
