import React, { useState } from "react";

function Portfolio() {
	const [buttonOpen, setButtonOpen] = useState(false);
	console.log(buttonOpen);
	return (
		<>
			<div className="h-screen text-white flex flex-col justify-center">
				<div className="h-1/2 container mx-auto w-80 md:w-full md:max-w-3xl">
					<div
						className={`${
							buttonOpen ? "h-60" : "h-20"
						} rounded-lg transition-all w-80 md:w-full md:max-w-3xl border border-[#9CCDE9] border-b-8 border-r-8 shadow-md`}
					>
						<button
							type="button"
							className="h-20 w-full"
							onClick={() => setButtonOpen(!buttonOpen)}
						>
							<div className="text-left pl-8 font-sriracha">PROJECT ONE</div>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Portfolio;
