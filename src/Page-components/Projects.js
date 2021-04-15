import React from 'react'

function Projects() {
    return (
    <div className="w-screen h-screen">
        <div className="container mx-auto h-screen py-4">
            <div className="flex h-1/2 justify-center items-center">
                <h1 className="text-center font-Open-Sans text-3xl mx-6" style={{fontSize: 30}}>"DESIGN IS INTELLIGENCE MADE VISIBLE."</h1>
                <h2><cite className="font-semibold">- Alina Wheeler</cite></h2>
            </div>

            <div className="grid grid-cols-2 gap-10 justify-center items-center">
                <div>
                        <h3 className="font-Open-Sans text-3xl font-extrabold mb-6" style={{fontSize: 40}}>Project One</h3>
                        <p className="text-2xl font-Open-Sans tracking-wider leading-relaxed">This was my Original Design for a Portfolio styled app
                        that was Designed using the Bulma CSS framework and JavaScript,
                        this concept was to create a mobile friendly wite that was fast and simple.
                        this Webapp has -                        
                        </p>
                        <ul className="text-2xl font-Open-Sans italic tracking-wider py-4">
                            <li className="pb-4">Smooth Animations</li>
                            <li className="pb-4">Responsive</li>
                            <li className="pb-4">Mobile First</li>
                            <li className="pb-4">Minimalistic Design</li>
                        </ul>
                </div>
                <div className="bg-this-is-sky bg-cover bg-right bg-no-repeat h-full rounded-lg" alt="coming soon.."></div>
            </div>


            <div className="grid grid-cols-2 gap-10 my-40 justify-center items-centerv">
            <div className="bg-skyCafe bg-cover bg-left bg-no-repeat h-full rounded-lg" alt="coming soon.."></div>
                <div>
                        <h3 className="font-Open-Sans text-3xl font-extrabold mb-6" style={{fontSize: 40}}>Sky's Cafe</h3>
                        <p className="text-2xl font-Open-Sans tracking-wider leading-relaxed overflow-ellipsis">
                        This Concept was Designed from the Ground up,
                        Inspired by my Love for all things coffee and coffe culture,
                        I wanted to bring the Cafe shope Vibes to the digital world while keeping functionality and usability are as vibrant as the flavors of the beans are.
                        This website was built on these Concepts - 
                        </p>
                        <ul className="text-2xl font-Open-Sans italic tracking-wider py-4">
                            <li className="pb-4">Aesthetic Design</li>
                            <li className="pb-4">Mobile Resposiveness</li>
                            <li className="pb-4">Clean feel</li>
                            <li className="pb-4">User Friendly</li>
                        </ul>
                </div>
            </div>
                
        </div>
    </div>

    )
}

export default Projects