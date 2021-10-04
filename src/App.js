import "./App.css";
import Nav from "./Page-components/Nav";
import MainContent from "./Page-components/Main";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	withRouter,
} from "react-router-dom";

// Page Component Imports //
import Showcase from "./Page-components/Showcase";
import Contact from "./Page-components/Contact";
// import Footer from "./Page-components/Footer";


const App = ({ location }) => (
	<Router>
		<>
			{/* {location.pathname !== "/Projects" && <Nav />} */}
			<Nav style={{ color: '#114B5F' }} />
			<Switch>
				<Route exact path="/">
					<MainContent />
				</Route>
				<Route path="/Showcase">
					<Showcase />
				</Route>
				<Route path="/Contact">
					<Contact />
				</Route>
			</Switch>
		</>
	</Router>
);

export default withRouter(App);
