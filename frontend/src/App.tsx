import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import MainLayout from "./MainLayout";
import Home from "./Home";
import FAQS from "./FAQS";
import PLRT from "./Services/PLRT";
import Hypnotherapy from "./Services/Hypnotherapy";
import Pranic from "./Services/PRANIC";
import REIHI from "./Services/REIKI";
import OCD from "./Services/OCD";
import Cleansing from "./Services/Cleansing";
import Contact from "./Contact";
import Error from "./Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="faqs" element={<FAQS />}></Route>
          <Route path="service/plrt" element={<PLRT />}></Route>
          <Route path="service/hypnotherapy" element={<Hypnotherapy />}></Route>
          <Route path="service/pranic" element={<Pranic />}></Route>
          <Route path="service/reiki" element={<REIHI />}></Route>
          <Route path="service/ocd" element={<OCD />}></Route>
          <Route path="service/cleansing" element={<Cleansing />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
