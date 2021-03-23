import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function Nav() {
    return (
        <div className="container max-w-screen-2xl absolute">
            <div className=""> {/*TODO: add sticky nav*/}
                <nav className="flex justify-center">
                    <ul className="flex text-4xl p-x">
                        <li className={"m-10 p-3 border-gray-400 border rounded-xl shadow-md font-bungeeShade"}>HOME</li>
                        <li className={"m-10 p-3 border-gray-400 border rounded-xl shadow-md font-bungeeShade"}>PROJECTS</li>
                        <li className={"m-10 p-3 border-gray-400 border rounded-xl shadow-md font-bungeeShade"}>CONTACT</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav