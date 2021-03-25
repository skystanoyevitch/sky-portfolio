
import './App.css';
import Nav from "./Page-components/Nav"
import MainContent from "./Page-components/Main"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


// Page Component Imports //
import Projects from "./Page-components/Projects"
// import Contact from "../Page-components/Contact"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
            <Route exact path="/">
              <MainContent />
            </Route>
            <Route path="./Page-components/Projects">
              <Projects />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
