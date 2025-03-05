"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const schema = yup.object().shape({
  name: yup.string().min(3, "Please enter your name with at least 3 characters.").trim().required("Please enter your name."),
  email: yup.string().email("Invalid email").required("Please enter your email."),
  message: yup.string().min(10, "Please enter your message with at least 10 characters.").required("Please enter your message."),
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
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send("service_aohjxoi", "template_fbnwt1q", data, "mKWg1LJcuQKH6yWVO");

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

  // Use InView hooks for triggering animations when elements enter viewport
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.section
      id="contact"
      ref={contactRef}
      className="flex flex-col md:flex-row justify-center gap-12 px-6 py-16 text-white mt-18"
      initial={{ opacity: 0 }}
      animate={contactInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Left Side */}
      <motion.div
        className="max-w-lg text-center md:text-left"
        initial={{ y: 50, opacity: 0 }}
        animate={contactInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-6xl font-bold text-customGreen text-left md:w-fit mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-6">
          Searching for the last piece to perfect your team? Let’s chat – I might be the one!
        </p>
        <motion.img
          src="/images/getintouch.png"
          alt="Get-In-Touch"
          className="hidden md:block w-full max-w-md mt-10 select-none mx-auto rounded-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={contactInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.div>

      {/* Right Side - Contact Form */}
      <motion.div
        ref={formRef}
        className="bg-black/30 p-6 rounded-2xl shadow-lg w-full max-w-md"
        initial={{ y: 50, opacity: 0 }}
        animate={formInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          {/* Name Input */}
          <motion.div whileFocus={{ scale: 1.02 }}>
            <input
              type="text"
              {...register("name")}
              placeholder="Your Full Name"
              className={`bg-black/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen w-full 
          ${errors.name ? "border-2 border-red-500" : "border-gray-700"}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </motion.div>

          {/* Email Input */}
          <motion.div whileFocus={{ scale: 1.02 }}>
            <input
              type="email"
              {...register("email")}
              placeholder="Your Email Address"
              className={`bg-black/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen w-full 
          ${errors.email ? "border-2 border-red-500" : "border-customGreen"}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </motion.div>

          {/* Message Input */}
          <motion.div whileFocus={{ scale: 1.02 }}>
            <textarea
              {...register("message")}
              placeholder="Write your message..."
              rows={4}
              className={`bg-black/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen w-full 
          ${errors.message ? "border-2 border-red-500" : "border-gray-700"}`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </motion.div>

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
            {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent.message}</p>}
          </div>

          {/* Submit & Reset Buttons */}
          <div className="flex space-x-4">
            <motion.button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={`py-3 rounded-lg font-semibold text-lg shadow-lg transition w-full
          ${isValid ? "bg-customGreen text-black hover:bg-green-400" : "bg-gray-600 cursor-not-allowed text-gray-300"}`}
              whileHover={{ scale: isValid ? 1.05 : 1 }}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </motion.button>

            {/* Reset Button */}
            <motion.button
              type="button"
              onClick={() => reset()}
              className="py-3 rounded-lg font-semibold text-lg shadow-lg transition w-full bg-gray-700 text-white hover:bg-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              Reset
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.section>
  );
}
