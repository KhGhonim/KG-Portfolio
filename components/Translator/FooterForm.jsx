"use client";

import { useForm, ValidationError } from "@formspree/react";
import Recieved from "../../Assets/Email Recieved.json";
import Lottie from "lottie-react";

export default function FooterForm() {
  const [state, handleSubmit] = useForm("mzzprgaw");

  if (state.succeeded) {
    return <Lottie animationData={Recieved} loop={false} className="w-1/2" />;
  }
  return (
    <div className="flex flex-shrink-0 flex-row items-center justify-center self-center shadow-md lg:justify-end">
      <form onSubmit={handleSubmit} className="flex flex-row">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@email.com"
          className="w-4/5 rounded-l-lg p-3 sm:w-2/3"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <button
          disabled={state.submitting}
          type="submit"
          className="w-2/5 rounded-r-lg bg-blue-800 p-3 font-semibold text-white sm:w-1/3"
        >
          Send
        </button>
      </form>
    </div>
  );
}
