import React from "react";
// import heroImg from "../../images/hero-image.jpg";

function Hero() {
    return (
        <div className="w-screen">
        <div
            className="md:flex md:place-content-center md:place-items-center md:space-x-28 py-56"
            style={{ background: "#2B3D41", color: "white" }}
        >
            <div
            className="w-80 h-96 rounded-md"
            style={{ background: "#B9F5D8" }}
            >
            <div className="border-gray-400 border-2 w-80 h-96 relative -right-4 -top-5 bg-profile-BG bg-cover bg-no-repeat bg-center rounded-md shadow-xl"></div>
            </div>
            <div className="md:pl-14 md:flex md:flex-col md:max-w-xl">
            <h1 className="font-Open-Sans md:text-7xl font-bold">HEY THERE!</h1>
            {/* <h2 className="md:text-4xl">to my website</h2> */}
            <p className="font-thin text-2xl pt-6">
                If you are looking for a way to help{" "}
                <span className="font-bold" style={{ color: "#B9F5D8" }}>Build</span> and{" "}
                <span className="font-bold" style={{ color: "#B9F5D8" }}>Define</span> your business for the
                modern world,  you are in the right place.
            </p>
            <button
                className="rounded-lg w-40 py-2 mt-14 font-bold text-black"
                style={{ background: "#93C5FD" }}
            >
                I'M INTERESTED
            </button>
            </div>
        </div>
        </div>
    );
}

export default Hero;
