import React from "react";
// import { useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { useForm } from "react-hook-form";
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
		<div className="w-screen h-screen">
			<Nav />
			<div className="container mx-auto md:h-full flex flex-col justify-around px-4 py-14 md:py-0 md:grid md:grid-cols-2 md:justify-items-center md:items-center lg:py-32 lg:px-10">
				<div className="text-center md:text-left">
					<div className="font-anton text-2xl md:text-4xl xl:text-7xl tracking-wide px-8">
						Let me help <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-700">YOU!</span>
					</div>
					<p className="text-md md:text-2xl xl:text-3xl font-robotoThin tracking-wider leading-relaxed pt-10 px-8">
						If you are looking to have a Website or App Designed,
						please include those details and i will get back to you
						shortly to discuss further about it. I love talking to
						people, and value communication with my Clients, so
						please don't hesitate to contact me using the form.
					</p>
				</div>

				<div className="pt-10 text-center md:text-left">
					<form onSubmit={handleSubmit(onSubmit)} id="contactForm">
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
								className="p-4 border-primary border bg-secondary rounded-md"
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
								className="p-4 border-primary border bg-secondary rounded-md"
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
								className="p-4 border-primary border bg-secondary rounded-md"
								name="email"
								placeholder="Email"
							/>

							<input
								type="text"
								{...register("subject", { maxLength: 15 })}
								className="p-4 border-primary border bg-secondary rounded-md"
								name="subject"
								placeholder="Subject"
							/>

							<textarea
								className="border-primary border h-24 p-4 bg-secondary rounded-md"
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
							type="submit"
							value="submit"
							className=" text-secondary p-2 text-xl font-semibold mt-4 mx-8 md:mx-0 rounded-lg"
							style={{ background: "#B02E0C" }}
						>
							SUBMIT
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
