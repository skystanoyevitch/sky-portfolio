import React, { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function Contact() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	// const handleChange = event => {
	//     setFirstName(event.target.first)
	//     setLastName(event.target.last)
	// }

	const handleSubmit = (event) => {
		event.preventDefault();
		alert("A name was submitted: " + firstName + " " + lastName);
	};
	return (
		<div className="w-screen h-screen">
			<Nav />
			<div className="container mx-auto h-screen grid grid-cols-2">
				<div className="grid gap-14">
					<h1
						className="flex items-end font-Zilla-Slab-Highlight"
						style={{ fontSize: 70 }}
					>
						Need a Website Built?
						<br />
						Want to Colaborate?
						<br />
						or just want to say hi...
					</h1>
					<p className="text-2xl font-Open-Sans tracking-wider leading-relaxed">
						If you are looking to have a Website or App built,
						please include those details and i will get back to you
						shortly to discuss further about it. I love talking to
						people, and value communication with my Clients, so
						please don't hesitate to contact me using the form.
					</p>
				</div>

				<div className="flex justify-center items-center">
					<div className="">
						<form onSubmit={handleSubmit}>
							<div className="flex">
								<div className="flex border-black border-solid border-2 rounded mr-6 h-14 w-60 pl-4">
									<input
										type="text"
										value={firstName}
										onChange={(e) =>
											setFirstName(e.target.value)
										}
										name="first"
										placeholder="First Name"
									/>
								</div>
								<div className="flex border-black border-solid border-2 rounded h-14 w-60 pl-4">
									<input
										type="text"
										value={lastName}
										onChange={(e) =>
											setLastName(e.target.value)
										}
										name="last"
										placeholder="Last Name"
									/>
								</div>
							</div>

							<div>
								<div className="flex border-black border-solid border-2 rounded h-14 pl-4 mt-8">
									<input
										type="text"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										name="email"
										placeholder="Email"
									/>
								</div>

								<div className="flex border-black border-solid border-2 rounded h-14 pl-4 mt-8">
									<input
										type="text"
										value={subject}
										onChange={(e) =>
											setSubject(e.target.value)
										}
										name="subject"
										placeholder="Subject"
									/>
								</div>

								<textarea
									className="border-black border-solid border-2 rounded h-48 w-full mt-8"
									type="text"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									name="message"
									placeholder="Message"
								></textarea>
							</div>

							<button type="submit" value="Submit">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
