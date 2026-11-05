import Link from "next/link";
import {
  BLACK_FRIDAY_CTA_LABEL,
  BLACK_FRIDAY_QUOTE_HREF,
  BLACK_FRIDAY_THEME,
} from "../config/seasonal";

const highlights = [
  "Free measuring & fitting",
  "Professional consultation",
  "Custom blinds for every room",
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m3.25 8.15 3.05 3.05 6.45-6.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f9f9f9] px-5 py-14 md:px-12 md:py-20">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 overflow-hidden rounded-lg bg-[#f3f3f4] text-center shadow-[0_12px_34px_rgba(14,20,43,0.08)] lg:grid-cols-[1.1fr_0.9fr] lg:text-left">
        <div className="flex flex-col items-center justify-center px-6 py-10 md:px-12 md:py-14 lg:items-start xl:px-16">
          <p className={`text-sm font-semibold uppercase leading-5 tracking-[0.7px] ${BLACK_FRIDAY_THEME ? "text-[#806026]" : "text-[#00aeef]"}`}>
            {BLACK_FRIDAY_THEME ? "Black Friday Sale" : "Free quote and expert advice"}
          </p>
          <h2 className="mt-3 max-w-[620px] text-[30px] font-bold leading-[38px] text-[#001825] md:text-4xl md:leading-[46px]">
            {BLACK_FRIDAY_THEME ? "Love the Look? Let's Make It Yours." : "Ready to transform your windows?"}
          </h2>

          <p className="mt-5 max-w-[580px] text-base font-normal leading-[26px] text-[#46464d]">
            {BLACK_FRIDAY_THEME
              ? "Turn your ideas into beautifully fitted blinds. Tell us about your windows and take the first step towards a home you'll love coming back to."
              : "Have questions about our custom window solutions? Get in touch with our experts for a professional consultation and a free quote."}
          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
            {BLACK_FRIDAY_THEME ? (
              <>
                <Link
                  href={BLACK_FRIDAY_QUOTE_HREF}
                  className="flex min-h-12 items-center justify-center rounded-[2px] bg-[#e8c982] px-7 text-center text-sm font-semibold leading-5 tracking-[0.7px] text-[#151515] hover:bg-[#f1dca9]"
                >
                  {BLACK_FRIDAY_CTA_LABEL}
                </Link>
                <a href="tel:1800911949" className="flex min-h-12 items-center justify-center rounded-[2px] border border-[#c7c6ce] bg-white px-7 text-sm font-semibold leading-5 tracking-[0.7px] text-[#001825] hover:border-[#806026]">
                  CALL 1800 911 949
                </a>
              </>
            ) : (
              <>
                <a
                  href="tel:1800911949"
                  className="flex min-h-12 items-center justify-center rounded-[2px] bg-[#00aeef] px-7 text-sm font-semibold leading-5 tracking-[0.7px] text-white hover:bg-[#009bd6] hover:shadow-[0_8px_18px_rgba(0,174,239,0.22)]"
                >
                  CALL 1800 911 949
                </a>
                <Link
                  href="/contact"
                  className="flex min-h-12 items-center justify-center rounded-[2px] border border-[#c7c6ce] bg-white px-7 text-sm font-semibold leading-5 tracking-[0.7px] text-[#001825] hover:border-[#00aeef] hover:text-[#00aeef]"
                >
                  BOOK CONSULTATION
                </Link>
              </>
            )}
          </div>

          <div className="mt-8 grid w-full gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-[2px] bg-white px-4 py-3 text-sm font-semibold leading-5 text-[#001825] lg:justify-start"
              >
                <span className={BLACK_FRIDAY_THEME ? "text-[#806026]" : "text-[#00aeef]"}>
                  <CheckIcon />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[rgba(199,198,206,0.35)] bg-white px-6 py-10 md:px-12 lg:border-l lg:border-t-0 xl:px-14">
          {BLACK_FRIDAY_THEME ? (
            <div className="mx-auto flex h-full max-w-[460px] flex-col justify-center">
              <h3 className="text-2xl font-bold leading-8 text-[#001825]">Three Steps to Your New Blinds</h3>
              <ol className="mt-6 space-y-5">
                {[
                  ["Tell us about your windows", "Share your rooms, preferred styles and contact details."],
                  ["Find your perfect fit", "Get expert advice and a free quote tailored to your home."],
                  ["Let us handle the fitting", "Enjoy free measuring and professional fitting across Dublin."],
                ].map(([title, description], index) => (
                  <li key={title} className="flex gap-4 text-left">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8c982]/25 text-sm font-bold text-[#806026]" aria-hidden="true">{index + 1}</span>
                    <div>
                      <p className="text-sm font-semibold leading-6 text-[#001825]">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#46464d]">{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ) : (
            <div className="mx-auto flex h-full max-w-[460px] flex-col justify-center">
              <h3 className="text-2xl font-bold leading-8 text-[#001825]">
                Subscribe to our newsletter
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#46464d]">
                Get ideas, updates, and helpful advice for choosing blinds for
                your Dublin home.
              </p>

              <form className="mt-6 flex flex-col gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  className="min-h-[48px] flex-1 rounded-[2px] border border-[#c7c6ce] bg-white px-[17px] py-3.5 text-base text-[#001825] outline-none placeholder:text-[#6b7280] focus:border-[#00aeef]"
                />
                <button
                  type="submit"
                  className="min-h-[48px] rounded-[2px] bg-[#00aeef] px-8 text-sm font-semibold leading-5 tracking-[0.7px] text-white hover:bg-[#009bd6] hover:shadow-[0_8px_18px_rgba(0,174,239,0.22)]"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
