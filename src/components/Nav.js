import React from 'react'

function Nav() {
    return (
        <div className="container max-w-screen-2xl absolute">
            <div className=""> {/*TODO: add sticky nav*/}
                <nav className="flex justify-center">
                    <ul className="flex text-4xl tracking-widest">
                        <li className={"m-10 p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl shadow-2xl"}>HOME</li>
                        <li className={"m-10 p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl shadow-2xl"}>PROJECTS</li>
                        <li className={"m-10 p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl shadow-2xl"}>CONTACT</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav