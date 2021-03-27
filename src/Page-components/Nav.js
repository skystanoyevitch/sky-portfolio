// React Imports //
import React from "react"
import { Link } from "react-router-dom"


function Nav() {
    return (
        <div className="w-screen absolute">
            <nav className="flex justify-center">
                <ul className="flex text-4xl p-x">
                    <li className={"m-10 p-3 border-gray-400 border rounded-xl shadow-md font-bungeeShade"}><Link to="/">HOME</Link></li>
                    <li className={"m-10 p-3 border-gray-400 border rounded-xl shadow-md font-bungeeShade"}><Link to="/Projects">PROJECTS</Link></li>
                    <li className={"m-10 p-3 border-gray-400 border rounded-xl shadow-md font-bungeeShade"}><Link to="/Contact">CONTACT</Link></li>
                </ul>
            </nav>
        </div>

    )
}

export default Nav