import React from 'react'

function Nav() {
    return (
        <div className="container max-w-screen-2xl text-white absolute">
            <div className=""> {/*TODO: add sticky nav*/}
                <nav className="flex justify-center">
                    <ul className="flex flex-row">
                        <li className="pr-5 m-5">Home</li>
                        <li className="pr-5 m-5">Projects</li>
                        <li className="pr-5 m-5">Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav