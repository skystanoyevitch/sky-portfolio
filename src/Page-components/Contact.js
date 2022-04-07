import React from "react";
// import { useEffect } from "react";
import Footer from "./Footer";
// import Nav from "./Nav";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { init, sendForm } from "emailjs-com";
// import toast from "react-hot-toast";

// const notify = () => toast("Here is your toast.");
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

	const buttonVarant = {
		hover: {
			scale: 1.03,
		},
	};

	// useEffect(() => {
	// 	reset({ first_name: "" }); // asynchronously reset your form values
	// }, [reset]);

	return (
		<div className="">
			{/* <Nav /> */}
			<div className="container mx-auto md:h-full flex flex-col justify-around xl:justify-center xl:gap-32 px-8 py-14 md:py-0 md:items-center md:my-24 md:px-20 lg:px-32 xl:my-0 xl:h-screen">
				<div className="text-center">
					<h1 className="text-primary font-playFair text-5xl xl:text-7xl xl:leading-normal px-8 lg:px-0">
						<span className="font-bold text-mainOrange">C</span>
						ontact
					</h1>
					<p className="text-primary text-lg md:text-3xl font-poppins font-light leading-7 xl:leading-normal pt-4 lg:pt-6">
						Need a Website Designed? Want to Colaborate? please
						don't hesitate to contact me using the form below..I
						look Forward to hearing from you.
					</p>
				</div>

				<div className="py-24 xl:pt-0 text-center md:text-left md:w-1/2">
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
								className="p-4 bg-white w-full"
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
								className="p-4 bg-white w-full"
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
								className="p-4 bg-white"
								name="email"
								placeholder="Email"
							/>

							<input
								type="text"
								{...register("subject", { maxLength: 15 })}
								className="p-4 bg-white"
								name="subject"
								placeholder="Subject"
							/>

							<textarea
								className="h-24 p-4 bg-white"
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
								boxShadow: "5px 5px 0 rgba(55, 65, 81, 1)",
							}}
							whileHover="hover"
							variants={buttonVarant}
							type="submit"
							value="submit"
							className="hover:bg-mainOrange hover:text-white bg-white border-4 border-gray-700 font-bold text-gray-700 font-poppins py-2 px-6 text-xl mt-4 mx-8 md:mx-0 rounded-full"
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
