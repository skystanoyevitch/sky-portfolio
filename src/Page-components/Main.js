import React from "react";
import Footer from "./Footer"
// import image from "../images/laptop.jpg"

const MainContent = () => {
    return (
        <div className="w-screen h-screen">
            <div className="grid grid-cols-2 items-center justify-center h-screen divide-x-4 divide-black">

                <div className="grid grid-col-2">
                    <div className={"flex-col pl-4 font-Zilla-Slab-Highlight"}>
                        <div style={{fontSize: 90}}>WELCOME <br/> TO MY PORTFOLIO,</div>
                        <div style={{fontSize: 90}}>I'M</div>
                        <p className={"font-bold"} style={{fontSize: 130}}>SKY</p>
                    </div>
                    <div className="bg-profile-BG h-80 w-60 bg-contain bg-no-repeat rounded-lg"></div>
                </div>

                <div className="container px-20">
                    <h2 className="font-Open-Sans text-3xl py-6 font-extrabold" style={{fontSize: 40}}>WHO AM I?</h2>
                    <p className="text-2xl font-Open-Sans tracking-wider leading-relaxed">I am a <span className="bg-black text-white">Freelance Web Designer | Developer</span> living in 
                        the sunny side of San Diego, CA.
                        <br/>
                        When i'm not programming or designing i am at the beach or somewhere near it.
                        </p>
                        <h2 className="font-Open-Sans text-3xl py-6" style={{fontSize: 40}}>MY GOAL</h2>
                        <p className="text-2xl font-Open-Sans tracking-wider leading-relaxed">My goal is quite simple: i aim to build apps based on Modern Design principles with performance
                        in Mind... all aspects of my Goals lead to the same destination: Making sure that what i build for a client meets their expectations and beyond.
                        </p>
                        <p className="text-2xl font-Open-Sans tracking-wider leading-relaxed mt-4">Above you can find links to my projects and services {"&"} More.
                        <br/>
                        Feel free to have a look around and if you have any questions,
                        or are interested in having a website or app designed and built,
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