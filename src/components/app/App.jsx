import "./app.scss";
import Home from "../home/Home";
import Joinus from "../joinus/Joinus";
import Map from "../map/Map";
import OfferedServices from "../offeredServices/OfferedServices";
import Signature from "../signature/Signature";
import Links from "../links/Links";


export default function App() {

  return (
    <>
      <Home />
      <OfferedServices />
      <Links />
      <Joinus />
      <Map />
      <Signature />
    </>
  )
}
