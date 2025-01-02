import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import VendorHighlight from "./Components/VendorHighlight";
import FeatureHighlight from "./Components/FeatureHighlight";
import Footer from "./Components/Footer";

import Home from "./Page/Home";
import VendorSearch from "./Page/VendorSearch";
import WeddingBudget from "./Page/WeddingBudget";
import VendorProfile from "./Page/VendorProfile";

import { ProfileProvider } from "./Contexts/ThemeContext";

function App() {

  
  return (
    <div>
      <ProfileProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendor-search"  element={<VendorSearch/>} />
          <Route path="/wedding-budget" element={<WeddingBudget />} />
          <Route path="/vendor-profile" element={<VendorProfile />} />
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
        </Routes>
      </ProfileProvider>
    </div>
  );
}

export default App;
