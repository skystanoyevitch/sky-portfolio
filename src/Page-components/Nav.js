// React Imports //
import React from "react"
import { Link } from "react-router-dom"


function Nav() {
    return (
        <div className="md:w-screen md:flex md:items-center shadow-lg">
            <h1 className="flex-1 text-center font-Zilla-Slab-Highlight md:text-6xl">SKY</h1>
            <nav className="md:flex md:justify-center flex-1">
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