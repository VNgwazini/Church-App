import "./home.scss";
import { 
  Container,
} from 'react-bootstrap/'
import Map from "../map/Map";
import Welcome from "../welcome/Welcome";
import Projects from "../projects/Projects";
import Joinus from "../joinus/Joinus";
import Links from "../links/Links";

export default function Home() {

  return (
    <>
    <Container className="home content-container pt-4" id="home" fluid="true">
      <img
        src="https://allnationsafricanchurch.com/wp-content/uploads/2017/08/thecorss.jpg"
        alt="Cross"
      />
      </Container>
    <Welcome/>
    <Links/>
    <Joinus/>
    <Map/>
    <Projects/>
    </>
  )
}
