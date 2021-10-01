import React, { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { useForm } from "react-hook-form";

function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

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

				<div className="pt-10 text-center md:text-left">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="flex flex-col px-8 md:px-0 lg:flex lg:flex-row xl:place-items-end space-y-8 pb-8 lg:space-x-9">
							{errors.first_name?.type === "required" &&
								console.log("First name is required")}
							<input
								{...register("first_name", { required: true })}
								type="text"
								className="p-4 border-primary border bg-secondary"
								name="first_name"
								placeholder="First Name"
							/>
							<input
								type="text"
								{...register("last")}
								className="p-4 border-primary border bg-secondary"
								name="last_name"
								placeholder="Last Name"
							/>
						</div>

						<div className="flex flex-col space-y-8 px-8 md:px-0">
							<input
								type="text"
								value={email}
								{...register("email")}
								onChange={(e) => setEmail(e.target.value)}
								className="p-4 border-primary border bg-secondary"
								name="email"
								placeholder="Email"
							/>

							<input
								type="text"
								value={subject}
								{...register("subject")}
								onChange={(e) => setSubject(e.target.value)}
								className="p-4 border-primary border bg-secondary"
								name="subject"
								placeholder="Subject"
							/>

							<textarea
								className="border-primary border h-24 p-4 bg-secondary"
								type="text"
								value={message}
								{...register("message")}
								onChange={(e) => setMessage(e.target.value)}
								name="message"
								placeholder="Message"
							></textarea>
						</div>

						<button
							type="submit"
							value="submit"
							className=" text-secondary p-2 text-xl font-semibold mt-8 mx-8 md:mx-0"
							style={{ background: "#B02E0C" }}
						>
							LETS DO THIS !
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
