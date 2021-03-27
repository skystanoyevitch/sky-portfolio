import React from "react";
import Footer from "./Footer"
// import image from "../images/laptop.jpg"

const MainContent = () => {
    return (
            <div className="w-screen h-screen bg-gray-300">
                <div className="flex items-center justify-center h-screen">
                        <div className={"flex-col text-center"}>
                            <div className={"text-2xl font-montserrat"}>Welcome to my portfolio</div>
                            <div className={"text-2xl font-montserrat"}>my name is</div>
                            <p className={"font-majorMonoDisplay"} style={{fontSize: 70}}>Sky</p>
                        </div>
                </div>
                    <div className="absolute bottom-0">
                        <Footer />
                    </div>
            </div>
    )
}

export default MainContent