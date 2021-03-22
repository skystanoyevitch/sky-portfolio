import React from "react";
import Footer from "./Footer"
// import image from "../images/laptop.jpg"

const MainContent = () => {
    return (
        <div className="w-screen h-screen">
            <div className="flex flex-col h-full bg-gray-200">
                <div className="flex items-center justify-center h-screen">
                    <div className={"flex-col"}>
                        <div className={"text-2xl text-center"}>Welcome to my page</div>
                        <div className={"text-2xl text-center"}>my name is</div>
                        <p className={"font-permanentMarker text-center"} style={{fontSize: 50}}>Sky</p>
                        <p className={"text-3xl"}>{"< Front-End Web Developer >"}</p>
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