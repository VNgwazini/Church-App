import "./links.scss";
import { useState } from "react";
import {
  Row,
  Container,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';


import {
  linksData,
} from "../../data";
import LinksListItem from "../linksListItem/LinksListItem";

export default function Links() {
// eslint-disable-next-line
  const [data, setData] = useState(linksData);

  return (
    <>
    <Container className="links content-container pt-4" id="links" fluid="true">
      <FadeIn>
        <Row className="px-4">
          {data.map((item) => (
            <>
              <LinksListItem item={item}/>
            </>
          ))}
        </Row>
      </FadeIn>
    </Container>
    </>
  )
}
