import React from "react";
import Hero from "./Micro-components/Hero";
import About from "./Micro-components/About";
import Footer from "./Footer"

const MainContent = () => {
    return (
    <div className="h-screen w-screen">
        <Hero />
        <About />
        <Footer />
    </div>
    )
}

export default MainContent
