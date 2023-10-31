import "./App.css";
import Homepage from "./Pages/Home/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Page Component Imports //
import Footer from "./Layout/Navigation/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";


const App = () => (
  <BrowserRouter>
    <div className="bg-[#000000]">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
