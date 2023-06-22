import React from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
// import HandShake from "../../../icons/HandShake";

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
    sendForm("service_b25r6f3", "template_m47i27q", "#contactForm").then(
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
    <div
      className="p-8 container mx-auto w-2/3 lg:max-w-3xl mb-12 lg:mb-24"
      id="section-contact"
    >
      <div className="mx-auto lg:max-w-lg text-center mt-12 lg:mt-24 lg:mb-10">
        {/* <div className="flex justify-center pb-6">
          <HandShake />
        </div> */}
        <h1 className="font-poppins font-semibold text-2xl md:text-4xl pb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48] lg:text-4xl lg:pb-8 lg:text-center">
          Contact Me
        </h1>
        <p className="font-light tracking-wide text-[#9CCDE9] lg:text-2xl">
          Want to work together on a project or looking to hire a frontend dev?
          please don't hesitate to contact using the form below.
        </p>
      </div>
      <div className="container mx-auto pt-8 lg:pt-0 mt-12 lg:mt-0 md:h-full lg:max-w-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="contactForm"
          className="text-center md:text-left md:w-full flex flex-col justify-around md:px-12 lg:p-0"
        >
          <div className="text-center text-red-600">
            {errors.first_name && <p>{errors.first_name.message}</p>}
            {errors.last_name && <p>{errors.last_name.message}</p>}
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
              className="p-2 lg:p-4 bg-slate-700 w-full rounded-lg"
              name="first_name"
              placeholder="First Name"
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
              className="p-2 lg:p-4 bg-slate-700 rounded-lg"
              name="email"
              placeholder="Email"
            />

            <input
              type="text"
              {...register("subject", { maxLength: 15 })}
              className="p-2 lg:p-4 bg-slate-700 rounded-lg"
              name="subject"
              placeholder="Subject"
            />

            <textarea
              className="h-24 p-2 lg:p-4 bg-slate-700 rounded-lg"
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

          <div className="md:flex md:justify-center">
            <button
              type="submit"
              value="submit"
              className="w-32 bg-[#e75d48] text-white hover:bg-white hover:text-[#e75d48] font-semibold border-2 border-[#e75d48] font-poppins py-2 mx-8 my-6 md:mx-0 rounded-full"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactComponent;
