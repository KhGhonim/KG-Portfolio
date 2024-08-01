"use client";
import { useForm, ValidationError } from "@formspree/react";
import Recieved from "../../Assets/Email Recieved.json";
import Lottie from "lottie-react";
import Link from "next/link";


export default function TranslatorForm() {
  const [state, handleSubmit] = useForm("mzzprgaw");

  if (state.succeeded) {
    return <Lottie animationData={Recieved} loop={false} className="w-1/2 h-96" />;
  } 

  return (
    <div className="w-full mx-auto  relative z-30 max-md:pt-56 ">
      <div className="w-11/12 mx-auto md:border-r-2 md:border-l-2  border-black md:py-10">
        <div className="max-w-5xl mx-auto   px-4 sm:px-6 lg:px-8  p-6 bg-background rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-700 text-center mb-4">
            KEEP IN TOUCH
          </h2>
          <h3 className="text-5xl font-semibold text-[#1E1D20] text-center  mb-2">
            CONTACT FORM
          </h3>
          <p className="text-base md:text-lg mb-4 text-center py-4">
            You can{" "}
            <Link
              href="mailto:khaledonem89@gmail.com"
              className="text-red-500 hover:underline"
            >
              click here
            </Link>{" "}
            to send me an email message via your standard email client, or fill
            in the fields below.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block  mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-border rounded"
                placeholder="Name"
              />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="mb-4">
              <label className="block  mb-1" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-border rounded"
                placeholder="Email address"
              />
              <ValidationError
                prefix="email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-4">
              <label className="block  mb-1" htmlFor="message">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 border border-border rounded"
                placeholder="Your message"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                disabled={state.submitting}
                type="submit"
                className="bg-black text-white hover:bg-black/80 py-2 px-4 rounded-lg flex "
              >
                SUBMIT
              </button>
            </div>
            <ValidationError
              className="text-white bg-red-500 w-1/2  rounded-md p-2 my-4 text-center"
              errors={state.errors}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
