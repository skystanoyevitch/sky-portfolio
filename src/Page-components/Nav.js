// React Imports //
import React from "react"
import { Link } from "react-router-dom"


function Nav() {
    return (
        <div className="w-screen absolute">
            <nav className="flex justify-center">
                <ul className="flex text-4xl p-x tracking-widest">
                    <li className={"m-10 p-3  font-Ubuntu"}><Link to="/">HOME</Link></li>
                    <li className={"m-10 p-3  font-Ubuntu"}><Link to="/Projects">PROJECTS</Link></li>
                    <li className={"m-10 p-3  font-Ubuntu"}><Link to="/Contact">CONTACT</Link></li>
                </ul>
            </nav>
        </div>

    )
}

export default Nav