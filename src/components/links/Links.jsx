import "./links.scss";
import { useState } from "react";
import {
  Row,
  Container,
} from 'react-bootstrap/'

import {
  linksData,
} from "../../data";
import LinksListItem from "../linksListItem/LinksListItem";

export default function Links() {
  // eslint-disable-next-line
  const [data, setData] = useState(linksData);

  return (
    <>
      <Container className="links content-container pb-4" id="projects">
        <Row className="mx-4">
          {data.map((item, index) => (
            <LinksListItem key={item.id || index} item={item} />
          ))}
        </Row>
      </Container>
    </>
  )
}
