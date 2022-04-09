import "./app.scss";
import FadeIn from 'react-fade-in';
import Home from "../home/Home";
import Joinus from "../joinus/Joinus";
import Map from "../map/Map";
import OfferedServices from "../offeredServices/OfferedServices";
import Signature from "../signature/Signature";
// import Projects from "../projects/Projects";
import Links from "../links/Links";

 
export default function App() {
 
 return (
   <>
   <FadeIn>
     <Home/>
     <OfferedServices/>
     <Joinus/>
     {/* <Projects/> */}
    <Links/>
    <Map/>
     <Signature/>
   </FadeIn>
   </>
 )
}
