import React from "react";
// import { useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { init, sendForm } from "emailjs-com";
init("user_UjPKV0EnHoctjH33XHpvR");

function Contact() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful, errors },
	} = useForm();
	// const message = watch("message") || "";
	// const messagesLeft = 1500 - message.length;
	const successMessage = "Success";

	const onSubmit = (data) => {
		sendForm("contact_form_id", "template_nfydqkj", "#contactForm").then(
			function (response) {
				console.log("SUCCESS!", response.status, response.text);
				reset();
			},
			function (error) {
				console.log("FAILED...", error);
			}
		);
	};

	// useEffect(() => {
	// 	reset({ first_name: "" }); // asynchronously reset your form values
	// }, [reset]);

	return (
		<div className="">
			{/* <Nav /> */}
			<div className="container mx-auto md:h-full flex flex-col justify-around xl:justify-center xl:gap-32 px-8 py-14 md:py-0 md:items-center md:my-24 md:px-20 lg:px-32 xl:my-0 xl:h-screen">
				<div className="text-center">
					<h1 className="font-playFair text-5xl md:text-6xl xl:text-8xl px-8 lg:px-0">
						Contact Me
					</h1>
					<p className="text-gray-500 text-lg md:text-2xl xl:text-2xl font-poppins font-light text-gray-00 leading-loose pt-8 lg:pt-10 xl:max-w-5xl">
						If you are looking to have a Website or App Designed,
						please include those details and i will get back to you
						shortly to discuss further about it.
					</p>
				</div>

				<div className="pt-10 xl:pt-0 text-center md:text-left md:w-1/2">
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
								className="p-4 bg-secondaryBtn rounded-full w-full"
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
								className="p-4 bg-secondaryBtn rounded-full w-full"
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
								className="p-4 bg-secondaryBtn rounded-full"
								name="email"
								placeholder="Email"
							/>

							<input
								type="text"
								{...register("subject", { maxLength: 15 })}
								className="p-4 bg-secondaryBtn rounded-full"
								name="subject"
								placeholder="Subject"
							/>

							<textarea
								className="h-24 p-4 bg-secondaryBtn rounded-full"
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

						<motion.button
							style={{
								boxShadow: "5px 5px 0 rgba(255, 192, 173, 0.8)",
							}}
							type="submit"
							value="submit"
							className="border border-black hover:bg-mainOrange hover:border-btnOrange hover:text-white font-poppins py-2 px-6 text-xl font-light mt-4 mx-8 md:mx-0 rounded-full"
						>
							Send
						</motion.button>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
