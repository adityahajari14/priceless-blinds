import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Contact – Priceless Blinds - Priceless Blinds",
  description:
    "Contact Priceless Blinds for wooden blinds, vertical blinds, Integral Blinds, Conservatory Blinds, Metal Venetian blinds, all over Dublin, Ireland.",
};

const addressLines = [
  "Stadium Business Park",
  "Unit 9, The Business Centre",
  "Ballycoolin Road",
  "Dublin 11, D11 FT22, Ireland",
];
const mapAddress = addressLines.join(", ");
const mapPlaceName = "Priceless Blinds Dublin";
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  mapPlaceName,
)}&ll=53.4000942,-6.3406409&z=19&t=m&hl=en&gl=IE&output=embed`;

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 shrink-0 text-[#263947]"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.25a7.2 7.2 0 0 0-7.2 7.2c0 5.35 6.31 11.78 6.58 12.05a.87.87 0 0 0 1.24 0c.27-.27 6.58-6.7 6.58-12.05A7.2 7.2 0 0 0 12 2.25Zm0 10.04a2.84 2.84 0 1 1 0-5.68 2.84 2.84 0 0 1 0 5.68Z" />
    </svg>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b-2 border-[rgba(0,24,37,0.2)] pb-2.5 text-[30px] font-bold leading-[40px] text-[#001825] md:text-[40px] md:leading-[48px]">
      {children}
    </h2>
  );
}

export default function ContactPage() {
  return (
    <main>
      <section className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#001825] px-5 py-16 md:min-h-[440px] md:px-12 md:py-20">
        <Image
          src="/home/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[rgba(0,24,37,0.66)]" />

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
          <p className="mb-4 text-sm font-bold uppercase leading-5 tracking-[1.4px] text-[#00aeef]">
            SEND US A MESSAGE
          </p>
          <h1 className="text-[40px] font-bold leading-[50px] text-white md:text-[56px] md:leading-[64px]">
            Contact – Priceless Blinds
          </h1>
          <p className="mt-5 text-[16px] leading-7 text-[rgba(255,255,255,0.88)] md:text-lg">
            Need some help?
          </p>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-white px-5 py-14 md:px-12 md:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 overflow-hidden bg-[#dff4fb] lg:grid-cols-2">
          <div className="relative min-h-[360px] bg-[#d5eef7] md:min-h-[420px]">
            <iframe
              title={`${mapPlaceName} address map: ${mapAddress}`}
              src={mapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex items-center px-7 py-12 md:px-12 lg:px-16">
            <div className="max-w-[430px]">
              <div className="flex items-center gap-4">
                <LocationIcon />
                <h2 className="text-[26px] font-bold leading-9 text-[#252a40]">
                  Ireland Address
                </h2>
              </div>

              <div className="mt-5 text-base leading-8 text-[#263947]">
                {addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <a
                href="tel:1800911949"
                className="mt-5 inline-flex text-base font-semibold leading-6 text-[#c59a5b] hover:text-[#00aeef]"
              >
                t: 1800911949
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f8fafc] px-5 py-14 md:px-12 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[920px] rounded-lg border border-[rgba(199,198,206,0.3)] bg-white p-7 shadow-[0_10px_28px_rgba(14,20,43,0.05)] md:p-10">
          <SectionHeading>Send a message</SectionHeading>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
