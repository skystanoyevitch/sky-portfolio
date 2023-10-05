import "./App.css";
import Homepage from "./Pages/Home/Homepage";
import ScrollToTop from "./Global-Components/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Page Component Imports //
import Footer from "./Layout/Navigation/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";

// const navLinks = [
//   { id: 0, name: "Home", to: "/" },
//   { id: 1, name: "Portfolio", to: "/portfolio" },
// ];
const App = () => (
  <BrowserRouter>
    <div className="bg-[#1A1D25]">
      {/* <Nav navLinks={navLinks} /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
