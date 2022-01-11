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
   <Welcome/>
   <Container className="home content-container d-flex justify-content-center py-4" id="home" fluid="true">
     <iframe
       width="560"
       height="315"
       src="https://www.youtube.com/embed/bDOEkIxqQPA?start=1&autoplay=1&mute=1"
       title="YouTube video player"
       frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       allowfullscreen
     >
     </iframe>
   </Container>
   <Links/>
   <Joinus/>
   <Map/>
   <Projects/>
   </>
 )
}
