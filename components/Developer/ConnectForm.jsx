"use client";

import { useForm } from "@formspree/react";
import { IoSend } from "react-icons/io5";
import Recieved from "../../Assets/Email Recieved.json";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function ConnectForm() {
  const [state, handleSubmit] = useForm("mzzprgaw");
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    if (state.succeeded) {
      setShowForm(false);
      const timer = setTimeout(() => {
        setShowForm(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <>
      {showForm ? (
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            name="name"
            className="w-full p-2 border border-border rounded outline-0 text-black"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border border-border rounded outline-0 text-black"
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone"
            className="w-full p-2 border border-border rounded outline-0 text-black"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Your message here"
            className="w-full p-2 border border-border rounded outline-0 text-black"
            required
          ></textarea>
          <div className="flex justify-center md:justify-end items-center">
            <button
              disabled={state.submitting}
              type="submit"
              className="bg-red-500 text-white hover:bg-red-700 transition-all duration-300 ease-in-out p-2 rounded  flex justify-center items-center gap-2"
            >
              Submit Message <IoSend />
            </button>
          </div>
        </form>
      ) : (
        <Lottie animationData={Recieved} loop={false} className="w-1/2" />
      )}
    </>
  );
}
