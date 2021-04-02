import React from 'react'

function Projects() {
    return (
        <div className="w-screen h-screen">
            <div className="container mx-auto h-screen py-4">
                <div className="flex h-1/2 justify-center items-center">
            <div className="text-center text-2xl font-montserrat">Welcome to my Proejcts page , feel free to browse around and take a look at my finished projects.</div>

            </div>
                        <div className="flex overflow-hidden">
                            <div className="my-12 px-12 w-full overflow-hidden">
                                <div className="h-96 text-center bg-coming-soon bg-contain bg-center bg-no-repeat" alt="coming soon.."/>
                                <figcaption className="text-center">Project 1: Original Portfolio</figcaption>
                                <p className="whitespace-normal">This Project was my original Porfolio Design when learning Porgramming, using Bulma as the CSS framework.</p>
                            </div>
                            <div className="my-12 px-12 w-full overflow-hidden">
                                <div className="h-96 text-center bg-coming-soon bg-contain bg-center bg-no-repeat"></div>
                                <figcaption className="text-center">Project 2: Sky's Cafe</figcaption>
                                <p className="whitespace-normal">This Project was designed after a local coffee shop in my town,
                                                                under inspiration i redisnged the website to be more
                                                                functional and practical while keeping the cafe aesthetic and vibes present.</p>
                            </div>
                        </div>
            </div>
        </div>

    )
}

export default Projects