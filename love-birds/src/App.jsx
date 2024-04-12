import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import VendorHighlight from "./Components/VendorHighlight";
import FeatureHighlight from "./Components/FeatureHighlight";
import Footer from "./Components/Footer";

import Home from "./Page/Home";
import Vendors from "./Page/Vendors";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendors" element={<Vendors />} />
        {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
      </Routes>
    </div>
  );
}

export default App;
