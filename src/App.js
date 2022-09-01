import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Gallery from "./Pages/Gallery/Gallery";
import OurHome from "./Pages/OurHomes/OurHome";
import Investors from "./Pages/Investors/Investors";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ourHome" element={<OurHome />} />
        <Route path="/investors" element={<Investors />} />
      </Routes>
    </div>
  );
}

export default App;
