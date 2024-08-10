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
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            name="name"
            className="border-border w-full rounded border p-2 text-black outline-0"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="border-border w-full rounded border p-2 text-black outline-0"
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone"
            className="border-border w-full rounded border p-2 text-black outline-0"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Your message here"
            className="border-border w-full rounded border p-2 text-black outline-0"
            required
          ></textarea>
          <div className="flex items-center justify-center md:justify-end">
            <button
              disabled={state.submitting}
              type="submit"
              className="flex items-center justify-center gap-2 rounded bg-red-500 p-2 text-white transition-all duration-300 ease-in-out hover:bg-red-700"
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
