// React Imports //
import React from "react"
import { Link } from "react-router-dom"


function Nav() {
    return (
        <div className="md:w-screen md:flex md:items-center absolute text-white">
            <nav className="md:flex md:justify-center flex-1">
                <ul className="flex text-2xl p-x tracking-widest font-extrabold">
                    <li className={"m-10 p-3  font-robotoThin"}><Link to="/">HOME</Link></li>
                    <li className={"m-10 p-3  font-robotoThin"}><Link to="/Projects">PROJECTS</Link></li>
                    <li className={"m-10 p-3  font-robotoThin"}><Link to="/Contact">CONTACT</Link></li>
                </ul>
            </nav>
        </div>

    )
}

export default Nav