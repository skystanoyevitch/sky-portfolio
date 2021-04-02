import React from "react";
import Footer from "./Footer"
// import image from "../images/laptop.jpg"

const MainContent = () => {
    return (
        <div className="w-screen h-screen">
            <div className="grid grid-cols-2 items-center justify-center h-screen divide-x-8 divide-black">
                <div className="grid grid-col-1">
                    <div className={"flex-col px-4 font-Zilla-Slab-Highlight"}>
                        <div className={""} style={{fontSize: 90}}>Welcome <br/> to my portfolio,</div>
                        <div className={""} style={{fontSize: 90}}>I'm</div>
                        <p className={"font-bold"} style={{fontSize: 130}}>SKY</p>
                    </div>
                </div>
                <div className="container px-20">
                    <h2 className="font-Open-Sans text-3xl py-6">ABOUT ME</h2>
                    <p className="text-2xl font-Open-Sans tracking-wider leading-relaxed">I am currently working as a <span className="bg-black text-white">freelance Web designer | Developer</span> living in 
                        the sunny side of southern California.</p>
                        <h2 className="font-Open-Sans text-3xl py-6">MY GOAL</h2>
                        <p className="text-2xl font-Open-Sans tracking-wider leading-relaxed">My goal is to provide a modern Look with performance
                        as a priority while keeping it professional.
                        Above you can find linkes to my projects and services..
                        Feel free to have a look around and if you have any questions,
                        would like to work together
                        or are interested in having a website designed and built,
                        please don't hesitate to Contact me.
                        </p>
                        
                    
                    <div className="text-2xl pt-10 text-center"><cite>- Have a wonderful day!</cite></div>
                </div>
            </div>
            <div className="absolute bottom-0">
                <Footer />
            </div>
        </div>
    )
}

export default MainContent