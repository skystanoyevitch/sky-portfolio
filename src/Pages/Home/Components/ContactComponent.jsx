import React from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";

init("user_UjPKV0EnHoctjH33XHpvR");

function ContactComponent() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful, errors },
	} = useForm();

	const successMessage = "Success";

	const onSubmit = (data) => {
		sendForm("service_b25r6f3", "template_nfydqkj", "#contactForm").then(
			function (response) {
				console.log("SUCCESS!", response.status, response.text);
				reset();
			},
			function (error) {
				console.log("FAILED...", error);
			}
		);
	};

	return (
		<div>
			<div className="container mx-auto lg:max-w-lg text-center lg:pt-32 lg:pb-12">
				<h1 className="font-poppins font-bold text-gray-700 lg:text-5xl lg:pb-8 text-center">
					Get in Touch
				</h1>
				<p className="font-poppins text-lg">
					Need a Website? please don't hesitate to contact me with any
					questions you have using the form below,
					<br />I look Forward to hearing from you.
				</p>
			</div>
			<div className="container mx-auto border-2 border-orange-500 bg-white rounded-lg md:h-full xl:justify-center lg:max-w-screen-lg shadow-mainBoxShadow">
				<div className="text-center md:text-left md:w-full flex flex-col justify-around xl:p-16">
					<form
						onSubmit={handleSubmit(onSubmit)}
						id="contactForm"
						className="text-center"
					>
						<div className="text-center text-red-600">
							{errors.first_name && (
								<p>{errors.first_name.message}</p>
							)}
							{errors.last_name && (
								<p>{errors.last_name.message}</p>
							)}
							{errors.email && <p>{errors.email.message}</p>}
							{errors.message && <p>{errors.message.message}</p>}
						</div>
						<h3>{isSubmitSuccessful && successMessage}</h3>
						<div className="flex flex-col px-8 md:px-0 lg:flex lg:flex-row lg:place-items-end space-y-8 pb-8 lg:space-x-9">
							<input
								{...register("first_name", {
									required: {
										value: true,
										message: "First Name is Required",
									},
									maxLength: 15,
								})}
								type="text"
								className="p-4 bg-body w-full rounded-lg"
								name="first_name"
								placeholder="First Name"
							/>

							<input
								type="text"
								{...register("last_name", {
									required: {
										value: true,
										message: "Last Name is Required",
									},
								})}
								className="p-4 bg-body w-full rounded-lg"
								name="last_name"
								placeholder="Last Name"
							/>
						</div>

						<div className="flex flex-col space-y-8 px-8 md:px-0">
							<input
								type="text"
								{...register("email", {
									required: {
										value: true,
										message: "Email is Required",
									},
								})}
								className="p-4 bg-body rounded-lg"
								name="email"
								placeholder="Email"
							/>

							<input
								type="text"
								{...register("subject", { maxLength: 15 })}
								className="p-4 bg-body rounded-lg"
								name="subject"
								placeholder="Subject"
							/>

							<textarea
								className="h-24 p-4 bg-body rounded-lg"
								type="text"
								{...register("message", {
									required: {
										value: true,
										message: "Message Field is Required",
									},
									minLength: 10,
								})}
								// onChange={(e) => setMessage(e.target.value)}
								name="message"
								placeholder="Message"
							></textarea>
							{/* <p style={{ color: "red" }}>{messagesLeft}</p> */}
						</div>

						<button
							whileHover="hover"
							type="submit"
							value="submit"
							className="hover:bg-mainOrange hover:shadow-shadowGray hover:text-white text-gray-700 font-bold border-2 border-gray-700 font-poppins py-2 px-6 text-xl mt-4 mx-8 md:mx-0 rounded-lg"
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactComponent;
