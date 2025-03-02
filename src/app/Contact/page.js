"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import TrueFocus from "../ReactBits/TrueFocus";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Please enter your name with at least 3 characters.") // Ensure min length is checked first
    .trim()
    .required("Please enter your name."), // Required validation
  email: yup
    .string()
    .email("Invalid email")
    .required("Please enter your email."),
  message: yup
    .string()
    .min(10, "Please enter your message with at least 10 characters.")
    .required("Please enter your message."),
  consent: yup.bool().oneOf([true], "Please agree before submitting"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur", // Validation triggers on blur (when leaving input field)
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await emailjs.send(
        "service_aohjxoi",
        "template_fbnwt1q",
        data,
        "mKWg1LJcuQKH6yWVO"
      );

      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonColor: "#10B981",
      });

      reset();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message, please try again.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row justify-center gap-12 px-6 py-16 text-white mt-18"
    >
      {/* Left Side */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-6xl font-bold text-customGreen text-left md:w-fit mb-4">
          <TrueFocus
            sentence="Get In Touch"
            manualMode={false}
            blurAmount={2.5}
            borderColor="cyan"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Searching for the last piece to perfect your team? Let’s chat – I
          might be the one!
        </p>
        {/* Image visible only on lg screens */}
        <img
          src="/images/getintouch.png"
          alt="Get-In-Touch"
          className="hidden md:block w-full max-w-md mt-10 select-none mx-auto rounded-xl"
        />
      </div>

      {/* Right Side - Contact Form */}
      <div className="bg-black/30 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          {/* Name Input */}
          <div>
            <input
              type="text"
              {...register("name")}
              placeholder="Your Full Name"
              className={`bg-black/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen w-full 
          ${errors.name ? "border-2 border-red-500" : "border-gray-700"}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              {...register("email")}
              placeholder="Your Email Address"
              className={`bg-black/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen w-full 
          ${errors.email ? "border-2 border-red-500" : "border-customGreen"}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message Input */}
          <div>
            <textarea
              {...register("message")}
              placeholder="Write your message..."
              rows={4}
              className={`bg-black/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen w-full 
          ${errors.message ? "border-2 border-red-500" : "border-gray-700"}`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div>
            <label className="flex items-start space-x-3 text-sm text-gray-400">
              <input
                type="checkbox"
                {...register("consent")}
                className={`h-4 w-4 text-customGreen bg-gray-700 border-none rounded focus:ring-customGreen 
            ${errors.consent ? "ring-2 ring-red-500" : ""}`}
              />
              <span>I agree to store my data and be contacted.</span>
            </label>
            {errors.consent && (
              <p className="text-red-500 text-sm mt-1">
                {errors.consent.message}
              </p>
            )}
          </div>

          {/* Submit & Reset Buttons */}
          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={`py-3 rounded-lg font-semibold text-lg shadow-lg transition w-full
          ${
            isValid
              ? "bg-customGreen text-black hover:bg-green-400"
              : "bg-gray-600 cursor-not-allowed text-gray-300"
          }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>

            {/* Reset Button */}
            <button
              type="button"
              onClick={() => reset()}
              className="py-3 rounded-lg font-semibold text-lg shadow-lg transition w-full bg-gray-700 text-white hover:bg-gray-600"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
