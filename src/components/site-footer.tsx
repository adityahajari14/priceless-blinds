import Image from "next/image";
import Link from "next/link";
import { BLACK_FRIDAY_THEME } from "../config/seasonal";
import { SaleTagIcon } from "./black-friday-decor";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-windows-blinds-in-ireland" },
  {
    label: "Types of blinds",
    href: "/ireland-blinds-quality-blinds-in-dublin",
  },
  { label: "Areas we cover", href: "/locations" },
  { label: "Before & after", href: "/before-and-after-blinds" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Sitemap", href: "/sitemap" },
];

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[18px] w-[18px] shrink-0"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.12 13.06v2.45a1.22 1.22 0 0 1-1.34 1.22 12.1 12.1 0 0 1-5.28-1.87 11.93 11.93 0 0 1-3.67-3.67 12.1 12.1 0 0 1-1.87-5.3A1.22 1.22 0 0 1 5.17 4.55h2.45a1.22 1.22 0 0 1 1.22 1.05c.08.59.24 1.16.45 1.72a1.22 1.22 0 0 1-.27 1.28L7.98 9.64a9.78 9.78 0 0 0 3.67 3.67l1.04-1.04a1.22 1.22 0 0 1 1.28-.27c.56.21 1.13.37 1.72.45a1.22 1.22 0 0 1 1.04 1.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
      <h2 className="text-lg font-bold leading-7 text-[#001825]">{title}</h2>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-xs font-normal leading-4 text-[#46464d] hover:text-[#00aeef]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(199,198,206,0.5)] bg-[#f8fafc]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-5 py-12 md:grid-cols-4 md:gap-6 md:px-12 md:py-14">
        <div className="flex flex-col items-center gap-4 text-center md:col-span-2 md:items-start md:pb-5 md:text-left">
          <Link href="/" aria-label="Priceless Blinds home">
            <Image
              src="/priceless-blinds-logo.png"
              alt="Priceless Blinds"
              width={129}
              height={48}
              className="h-12 w-[129.34px]"
            />
          </Link>

          <p className="max-w-[448px] text-base font-normal leading-6 text-[#46464d]">
            Professional and reliable solution providers all over Dublin,
            Ireland. Delivering quality manufactured window blinds to your
            doorstep.
          </p>

          <a
            href="tel:1800911949"
            className="flex h-11 items-center gap-2 rounded-[2px] bg-[#00aeef] px-6 text-sm font-semibold leading-5 tracking-[0.7px] text-white hover:bg-[#009bd6] hover:shadow-[0_8px_18px_rgba(0,174,239,0.22)]"
          >
            <PhoneIcon />
            <span>Call 1800 911 949</span>
          </a>
        </div>

        <FooterLinks title="Quick Links" links={quickLinks} />
        <FooterLinks title="Legal" links={legalLinks} />
      </div>

      <div className="border-t border-[rgba(199,198,206,0.3)] px-5 pb-6 pt-[25px] md:px-12">
        {BLACK_FRIDAY_THEME ? (
          <p className="mb-2 flex items-center justify-center gap-2 text-center text-xs font-semibold leading-4 text-[#001825]">
            <SaleTagIcon className="h-4 w-4 shrink-0 text-[#806026]" />
            <span>
              Black Friday Sale at Priceless Blinds —{" "}
              <Link href="/contact" className="underline underline-offset-2 hover:text-[#806026]">
                book your free consultation
              </Link>
            </span>
          </p>
        ) : null}
        <p className="text-center text-xs font-normal leading-4 text-[#46464d]">
          © Copyright 2026 Priceless Blinds. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
