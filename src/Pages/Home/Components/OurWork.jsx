import HandShake from "../../../icons/HandShake";

function OurWork() {
	return (
		<div className="w-full h-[40vh] bg-relaxedDesign bg-cover bg-center bg-no-repeat">
			<div className="h-full bg-[#e75d48] bg-opacity-90">
				<section className="h-full container mx-auto">
					<div className="h-full flex flex-col justify-center lg:px-60 text-center">
						<h1 className="lg:text-4xl font-poppins font-semibold text-white">
							Maximize your online potential while you focus on
							the business part
							<br />
						</h1>
						{/* <h2 className="lg:text-6xl">🤝</h2> */}
						<div className="flex justify-center">
							<HandShake />
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default OurWork;
