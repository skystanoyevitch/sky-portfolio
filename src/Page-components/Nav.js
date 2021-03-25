// React Imports //
import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

// Page Component Imports //
import Projects from "../Page-components/Projects"
import Contact from "../Page-components/Contact"


function Nav() {
    return (
        <Router>
            <div className="container max-w-screen-2xl absolute">
                <div className="">
                    <nav className="flex justify-center">
                        <ul className="flex text-4xl p-x">
                            <li className={"m-10 p-3 border-gray-400 border rounded-xl shadow-md font-bungeeShade"}><Link to="/">HOME</Link></li>
                            <li className={"m-10 p-3 border-gray-400 border rounded-xl shadow-md font-bungeeShade"}><Link to="/Projects.js">PROJECTS</Link></li>
                            <li className={"m-10 p-3 border-gray-400 border rounded-xl shadow-md font-bungeeShade"}><Link to="/Contact.js">CONTACT</Link></li>
                        </ul>
                    </nav>
                </div>
                    <Switch>
                        <Route path="/Projects.js">
                            <Projects />
                        </Route>
                        <Route path="/Contact">
                            <Contact />
                        </Route>
                    </Switch>
            </div>
        </Router>
    )
}

export default Nav