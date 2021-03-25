import React from "react";
import Footer from "./Footer"
// import image from "../images/laptop.jpg"

const MainContent = () => {
    return (
        <div className="w-screen h-screen">
            <div className="flex flex-col h-full bg-gray-300">
                <div className="flex items-center justify-center h-screen">
                    <div>
                        <div className={"flex-col text-center"}>
                            <div className={"text-2xl font-montserrat"}>Welcome to my portfolio</div>
                            <div className={"text-2xl font-montserrat"}>my name is</div>
                            <p className={"font-majorMonoDisplay"} style={{fontSize: 70}}>Sky</p>
                        </div>

                        {/* TODO: replace flex with Grid */}
                        {/* <p className={"text-3xl font-mono flex-wrap"}>as a {"< Front-End Web Developer >"} i love to build and design fast mobile centric web apps</p> */}
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default MainContent