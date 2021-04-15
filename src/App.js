
import './App.css';
import Nav from "./Page-components/Nav"
import MainContent from "./Page-components/Main"
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom"

// Page Component Imports //
import Projects from "./Page-components/Projects"
import Contact from './Page-components/Contact';

const App = ({location}) => (
    <Router>
      <>
      {/* {location.pathname !== "/Projects" && <Nav />} */}
      <Nav />
        <Switch>
            <Route exact path="/">
              <MainContent />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
        </Switch>
      </>
    </Router>
  );


export default withRouter(App)
