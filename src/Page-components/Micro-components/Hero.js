import React from "react";
// import heroImg from "../../images/hero-image.jpg";

function Hero() {
return (
<div className="w-screen h-screen">
    <div className="md:flex md:place-content-center md:place-items-center md:space-x-28 md:h-2/3 bg-blue-300">
        <div className="md:pl-14 md:flex md:flex-col md:max-w-xl">
            <h1 className="md:text-7xl font-bold">WELCOME</h1>
            <h2 className="md:text-4xl">to my website</h2>
            <p className="text-3xl pt-6">
                If you are looking for a way to help <span className="font-bold">Build</span> and <span className="font-bold">Define</span> your business for the modern world
                you are in the right place.
            </p>
        </div>
        <div className="border-black border-2 w-80 h-96 bg-secondary">
            <div className="border-black border-2 w-80 h-96 relative -right-4 -top-5 bg-profile-BG bg-cover bg-no-repeat bg-center">
            </div>
        </div>
    </div>
</div>
);
}

export default Hero;
