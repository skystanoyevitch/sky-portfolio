import React, { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
init("user_UjPKV0EnHoctjH33XHpvR");

function Contact() {
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm();
	// const [firstName, setFirstName] = useState("");
	// const [lastName, setLastName] = useState("");
	// const [email, setEmail] = useState("");
	// const [subject, setSubject] = useState("");
	// const [message, setMessage] = useState("");
	const message = watch("message") || "";
	const messagesLeft = 1500 - message.length;

	const onSubmit = (data) => {
		sendForm("contact_form_id", "template_nfydqkj", "#contactForm").then(
			function (response) {
				console.log("SUCCESS!", response.status, response.text);
			},
			function (error) {
				console.log("FAILED...", error);
			}
		);
	};

	// const handleChange = event => {
	//     setFirstName(event.target.first)
	//     setLastName(event.target.last)
	// }

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	alert("A name was submitted: " + firstName + " " + lastName);
	// };

	return (
		<div className="w-screen h-screen">
			<Nav />
			<div className="container mx-auto md:h-full flex flex-col justify-around px-4 py-14 md:py-0 md:grid md:grid-cols-2 md:justify-items-center md:items-center lg:pt-32 lg:px-10">
				<div className="text-center md:text-left">
					<div className="font-anton text-2xl md:text-3xl lg:text-4xl xl:text-7xl tracking-wide px-8">
						Let Me Help You
					</div>
					<p className="text-md md:text-2xl xl:text-3xl font-robotoThin tracking-wider leading-relaxed pt-10 px-8">
						If you are looking to have a Website or App built,
						please include those details and i will get back to you
						shortly to discuss further about it. I love talking to
						people, and value communication with my Clients, so
						please don't hesitate to contact me using the form.
					</p>
				</div>

				{/* <div className="pt-10 text-center md:text-left"> */}
					{/* <form onSubmit={handleSubmit(onSubmit)} id="contactForm"> */}
						{/* {errors.first_name?.type === "required" && (
							<div style={{ color: "red" }}>
								First name is required
							</div>
						)}
						<div className="flex flex-col px-8 md:px-0 lg:flex lg:flex-row xl:place-items-end space-y-8 pb-8 lg:space-x-9">
							<input
								{...register("first_name", {
									required: true,
									maxLength: 3,
								})}
								type="text"
								className="p-4 border-primary border bg-secondary"
								name="first_name"
								placeholder="First Name"
							/>
							<input
								type="text"
								{...register("last_name", { required: true })}
								className="p-4 border-primary border bg-secondary"
								name="last_name"
								placeholder="Last Name"
							/>
						</div>

						<div className="flex flex-col space-y-8 px-8 md:px-0">
							<input
								type="text"
								{...register("email", { required: true })}
								className="p-4 border-primary border bg-secondary"
								name="email"
								placeholder="Email"
							/>

							<input
								type="text"
								{...register("subject", { required: true })}
								className="p-4 border-primary border bg-secondary"
								name="subject"
								placeholder="Subject"
							/>

							<textarea
								className="border-primary border h-24 p-4 bg-secondary"
								type="text"
								{...register("message", { required: true })}
								// onChange={(e) => setMessage(e.target.value)}
								name="message"
								placeholder="Message"
							></textarea>
							<p style={{ color: "red" }}>{messagesLeft}</p>
						</div>

						<button
							type="submit"
							value="submit"
							className=" text-secondary p-2 text-xl font-semibold mt-8 mx-8 md:mx-0"
							style={{ background: "#B02E0C" }}
						>
							LETS DO THIS !
						</button> */}
					{/* </form> */}
				{/* </div> */}
			</div>
			<form name="contact" method="POST" data-netlify="true" className="container mx-auto flex flex-col w-60 justify-center">
							<p>
								<label>
									Your Name: <input type="text" name="name" />
								</label>
							</p>
							<p>
								<label>
									Your Email:{" "}
									<input type="email" name="email" />
								</label>
							</p>
							<p>
								<label>
									Your Role:{" "}
									<select name="role[]" multiple>
										<option value="leader">Leader</option>
										<option value="follower">
											Follower
										</option>
									</select>
								</label>
							</p>
							<p>
								<label>
									Message:{" "}
									<textarea name="message"></textarea>
								</label>
							</p>
							<p>
								<button type="submit">Send</button>
							</p>
						</form>
			<Footer />
		</div>
	);
}

export default Contact;
