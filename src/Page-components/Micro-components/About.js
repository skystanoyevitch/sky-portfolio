import React from "react";

function About() {
    return (
        <div className="flex items-center py-44 px-24 justify-evenly">
            <div className=" w-1/3 h-96 p-10">
                <h2 className="text-5xl font-bold">Who am i?</h2>
                <h3 className="pt-3 pb-4 text-3xl">I go by the name <span className="font-semibold italic">Sky</span> </h3>
                <p className="font-light text-xl">
                I am a Freelance Web Developer | Designer living in the sunny side of San Diego,CA.
                that aims to provide a way for my
                Clients to grow, weather it's a Website to showcase their personality
                or a Website to connect them with their Customers.
                </p>
            </div>
            <div className="w-2/6">
                <div
                className=" w-full h-96 rounded-md"
                style={{ background: "#E57A44" }}
                >
                <div className="border-gray-400 border-2 w-full h-96 relative -right-4 -top-5 bg-aboutDesign bg-cover bg-no-repeat bg-center rounded-md shadow-xl"></div>
                </div>
            </div>
        </div>
    );
}

export default About;
