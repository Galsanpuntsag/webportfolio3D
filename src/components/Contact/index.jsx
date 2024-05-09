"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send email using emailjs
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_USER_ID"
      );
      alert("Email sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div>
      <h3 className="font-bold text-3xl m-5">Contact Me</h3>
      <div className=" bg-slate-950 w-96 lg:w-[800px] p-8 rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-4 lg:w-full"
        >
          <label className="flex flex-col">
            <span className="font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="py-4  bg-tertiary px-6 rounded-lg"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="py-4 bg-tertiary text-white
               px-6 rounded-lg"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="py-4  bg-tertiary px-6 rounded-lg"
            />
          </label>
          <button
            type="submit"
            className="py-3 px-8 outline-none w-fit rounded-xl font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
