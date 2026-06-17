"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

type SubmitState = {
  type: "idle" | "success" | "error";
  message: string;
};

function Field({
  as = "input",
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  as?: "input" | "textarea";
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  const className =
    "w-full rounded-[2px] border border-[rgba(199,198,206,0.7)] bg-white px-4 py-3.5 text-base leading-6 text-[#001825] outline-none placeholder:text-[#747882] focus:border-[#00aeef] focus:ring-2 focus:ring-[rgba(0,174,239,0.12)]";

  if (as === "textarea") {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        aria-label={placeholder}
        rows={6}
        required={required}
        className={`${className} min-h-[160px] resize-y`}
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      aria-label={placeholder}
      required={required}
      className={className}
    />
  );
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("access_key", WEB3FORMS_ACCESS_KEY);
    formData.set("subject", "New contact message from Priceless Blinds");
    formData.set("from_name", "Priceless Blinds");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        throw new Error("Submission failed");
      }

      form.reset();
      setSubmitState({
        type: "success",
        message: "Thanks, your message has been sent.",
      });
    } catch {
      setSubmitState({
        type: "error",
        message: "Sorry, your message could not be sent. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Field name="name" placeholder="Name" />
        <Field name="email" type="email" placeholder="Email" />
      </div>
      <Field name="phone" type="tel" placeholder="Phone" />
      <Field as="textarea" name="message" placeholder="How can we help?" />

      {submitState.message ? (
        <p
          aria-live="polite"
          className={`text-sm font-semibold leading-5 ${
            submitState.type === "success" ? "text-[#1d6b3a]" : "text-[#b42318]"
          }`}
        >
          {submitState.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 flex min-h-12 w-full items-center justify-center rounded-[2px] bg-[#001825] px-8 text-center text-sm font-semibold leading-5 tracking-[0.7px] text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#00aeef] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto md:justify-self-start"
      >
        {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
      </button>
    </form>
  );
}
