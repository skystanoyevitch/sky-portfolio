import "./App.css";
import Nav from "./Layout/Navigation/Nav";
import Homepage from "./Pages/Home/Homepage";
import ScrollToTop from "./Global-Components/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Page Component Imports //
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Layout/Navigation/Footer";

const App = () => (
	<BrowserRouter>
		<Nav />
		<ScrollToTop />
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/Portfolio" element={<Portfolio />} />
			<Route path="/Contact" element={<Contact />} />
		</Routes>
		<Footer />
	</BrowserRouter>
);

export default App;
