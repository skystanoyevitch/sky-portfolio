import "./App.css";
import Nav from "./Page-components/Nav";
import MainContent from "./Page-components/Main";
import ScrollToTop from "./Page-components/Helper-components/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Page Component Imports //
import Showcase from "./Page-components/Showcase";
import Contact from "./Page-components/Contact";
// import Footer from "./Page-components/Footer";

const App = ({ location }) => (
	<BrowserRouter>
		{/* {location.pathname !== "/Projects" && <Nav />} */}
		<Nav />
		<ScrollToTop />
		<Routes>
			<Route path="/" element={<MainContent />} />
			<Route path="/Showcase" element={<Showcase />} />
			<Route path="/Contact" element={<Contact />} />
		</Routes>
	</BrowserRouter>
);

export default App;
