"use client";
import { useForm, ValidationError } from "@formspree/react";
import Recieved from "../../Assets/Email Recieved.json";
import Lottie from "lottie-react";
import Link from "next/link";

export default function TranslatorForm() {
  const [state, handleSubmit] = useForm("mzzprgaw");

  if (state.succeeded) {
    return (
      <Lottie animationData={Recieved} loop={false} className="h-96 w-1/2" />
    );
  }

  return (
    <div id="contact" className="relative z-30 mx-auto w-full max-md:pt-56">
      <div className="mx-auto w-11/12 border-black md:border-l-2 md:border-r-2 md:py-10">
        <div className="bg-background mx-auto max-w-5xl rounded-lg p-6 px-4 shadow-md sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-red-700">
            KEEP IN TOUCH
          </h2>
          <h3 className="mb-2 text-center text-5xl font-semibold text-[#1E1D20]">
            CONTACT FORM
          </h3>
          <p className="mb-4 py-4 text-center text-base md:text-lg">
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
              <label className="mb-1 block" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border-border w-full rounded border p-2"
                placeholder="Name"
              />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-border w-full rounded border p-2"
                placeholder="Email address"
              />
              <ValidationError
                prefix="email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block" htmlFor="message">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                className="border-border w-full rounded border p-2"
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
                className="flex rounded-lg bg-black px-4 py-2 text-white hover:bg-black/80"
              >
                SUBMIT
              </button>
            </div>
            <ValidationError
              className="my-4 w-1/2 rounded-md bg-red-500 p-2 text-center text-white"
              errors={state.errors}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
