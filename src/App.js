import "./App.css";
import { Nav } from "./Layout/Navigation/Nav";
import Homepage from "./Pages/Home/Homepage";
import ScrollToTop from "./Global-Components/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Page Component Imports //
import Portfolio from "./Pages/Portfolio/Portfolio";
import Footer from "./Layout/Navigation/Footer";

const navLinks = [
  { id: 0, name: "Home", to: "/" },
  { id: 1, name: "Portfolio", to: "/" },
];
const App = () => (
  <BrowserRouter>
    <Nav navLinks={navLinks} />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Portfolio" element={<Portfolio />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
