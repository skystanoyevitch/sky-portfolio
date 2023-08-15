import { allProjects } from "../../Portfolio/allProjects";
import { useInView } from "react-intersection-observer";

const aboutSectionVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
};

function Portfolio() {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});

	return (
		<section
			ref={ref}
			variants={aboutSectionVariant}
			initial="initial"
			animate={inView ? "animate" : "initial"}
			id="#portfolio"
			className="container mx-auto px-8 py-32 lg:py-0 lg:h-screen lg: flex flex-col lg:flex-col lg:place-content-center"
		>
			<div className="mb-6 lg:mb-16 text-center container mx-auto max-w-lg">
				<h1 className="text-2xl md:text-4xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
					Featured Projects
				</h1>
				<p className="text-md md:text-xl font-light pt-3 lg:text-2xl tracking-wide text-[#9CCDE9]">
					Below you'll find a list of personal projects (non-tutorial
					based) and work that i am proud of building.
				</p>
			</div>

			<div className=" rounded-md md:container mx-auto lg:max-w-4xl md:space-y-0 flex flex-col space-y-16 md:flex md:flex-row md:space-x-6 lg:space-x-16 p-8 lg:p-14 bg-gray-800">
				{allProjects.map((project, key) => {
					return (
						<ul
							key={key.id}
							className="container mx-auto lg:px-0 space-y-10"
						>
							<li className="h-40 w-60 md:w-full md:h-52 lg:h-80">
								<div className="h-full w-full">
									<div className="rounded-lg h-full w-full p-2 md:p-4 outline outline-[#9CCDE9] outline-2 md:outline-4 hover:outline-orange-700 hover:outline-4 transition-all ease-in-out">
										<div
											className={`${project.thumbnail} h-full w-full md:my-0 rounded-lg`}
										></div>
									</div>
								</div>
							</li>
						</ul>
					);
				})}
			</div>
		</section>
	);
}

export default Portfolio;
