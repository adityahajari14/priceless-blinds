"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BLACK_FRIDAY_CTA_LABEL,
  BLACK_FRIDAY_QUOTE_HREF,
  BLACK_FRIDAY_THEME,
} from "../config/seasonal";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-windows-blinds-in-ireland" },
  {
    label: "Blinds",
    href: "/ireland-blinds-quality-blinds-in-dublin",
    menu: "blinds",
  },
  { label: "Blinds By Room", href: "/dining-room-blinds", menu: "rooms" },
  { label: "Before & After", href: "/before-and-after-blinds" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Locations", href: "/locations" },
];

const blindsMenu = [
  { label: "Vertical Blinds", href: "/vertical-blinds-in-dublin-ireland" },
  { label: "Roller Blinds", href: "/roller-blinds-dublin-ireland" },
  { label: "Roman Blinds", href: "/roman-blinds-in-dublin-ireland" },
  { label: "Vision Blinds", href: "/vision-blinds-in-dublin-ireland" },
  { label: "Velux Blinds", href: "/velux-blinds-in-dublin-ireland" },
  { label: "Conservatory Blinds", href: "/conservatory-blinds-in-dublin" },
  { label: "Wooden Blinds", href: "/wooden-blinds-in-dublin-ireland" },
  {
    label: "Waterproof Blinds",
    href: "/pvc-waterproof-blinds-in-dublin-ireland",
  },
  { label: "Integral Blinds", href: "/integral-blinds-in-dublin-ireland" },
  { label: "Metal Venetian Blinds", href: "/metal-venetian-blinds-in-dublin" },
];

const mobileBlindsMenu = [
  {
    label: "All Blinds",
    href: "/ireland-blinds-quality-blinds-in-dublin",
  },
  ...blindsMenu,
];

const roomMenu = [
  { label: "Dining Room Blinds", href: "/dining-room-blinds" },
  { label: "Living Room Blinds", href: "/living-room-blinds" },
  { label: "Bedroom Blinds", href: "/bedroom-blinds" },
  { label: "Bathroom Blinds", href: "/bathroom-blinds" },
  { label: "Kitchen Blinds", href: "/kitchen-blinds-in-ireland" },
  { label: "Office Blinds in Dublin", href: "/office-blinds-in-dublin" },
];

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[15px] w-[15px] shrink-0"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.94 10.88v2.04a1.02 1.02 0 0 1-1.12 1.02 10.08 10.08 0 0 1-4.4-1.56 9.94 9.94 0 0 1-3.06-3.06 10.08 10.08 0 0 1-1.56-4.42 1.02 1.02 0 0 1 1.01-1.12h2.04a1.02 1.02 0 0 1 1.02.88c.07.49.2.97.37 1.43a1.02 1.02 0 0 1-.23 1.07l-.86.86a8.16 8.16 0 0 0 3.06 3.06l.86-.86a1.02 1.02 0 0 1 1.07-.23c.46.17.94.3 1.43.37a1.02 1.02 0 0 1 .87 1.04Z"
        fill="#001825"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[4.32px] w-[7px] shrink-0"
      viewBox="0 0 7 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M.78.88 3.5 3.6 6.22.88"
        stroke="#46464D"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isOpen ? (
        <path
          d="M4 4 16 16M16 4 4 16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M3 5.5h14M3 10h14M3 14.5h14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function BlindsDropdown() {
  return (
    <div className="absolute left-1/2 top-full z-30 hidden w-[282px] -translate-x-1/2 rounded-b-[2px] bg-white shadow-[0_10px_24px_rgba(14,20,43,0.1)] group-hover:block group-focus-within:block">
      <div className="h-0.5 w-full bg-[#00aeef]" />
      {blindsMenu.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex min-h-12 items-center border-b border-[#e3e3e3] px-5 text-base font-semibold leading-6 text-[#252a40] hover:bg-[#f8fafc] hover:text-[#001825]"
        >
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}

function RoomsDropdown() {
  return (
    <div className="absolute left-1/2 top-full z-30 hidden w-[282px] -translate-x-1/2 rounded-b-[2px] bg-white shadow-[0_10px_24px_rgba(14,20,43,0.1)] group-hover:block group-focus-within:block">
      <div className="h-0.5 w-full bg-[#00aeef]" />
      {roomMenu.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex min-h-12 items-center border-b border-[#e3e3e3] px-5 text-base font-semibold leading-6 text-[#252a40] hover:bg-[#f8fafc] hover:text-[#001825]"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

function MobileSubMenu({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: { label: string; href: string }[];
  onNavigate: () => void;
}) {
  return (
    <details className="group border-b border-[#e7e7e7] [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-1 text-[15px] font-semibold leading-5 text-[#252a40]">
        <span>{label}</span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f4f8fb] text-[#46464d] transition-transform group-open:rotate-180">
          <ChevronIcon />
        </span>
      </summary>

      <div className="pb-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="flex min-h-10 items-center border-t border-[#edf0f2] px-4 text-sm font-semibold leading-5 text-[#46464d] hover:bg-[#f8fafc] hover:text-[#001825]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);
  const isNavItemActive = (item: (typeof navItems)[number]) => {
    if (item.menu === "blinds") {
      return (
        isActive(item.href) ||
        blindsMenu.some((menuItem) => pathname.startsWith(menuItem.href))
      );
    }

    if (item.menu === "rooms") {
      return roomMenu.some((menuItem) => pathname.startsWith(menuItem.href));
    }

    return isActive(item.href);
  };

  return (
    <header className="relative z-40 border-b border-[rgba(199,198,206,0.3)] bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-12">
        <div className="flex min-h-20 items-center justify-between gap-6 py-4 md:h-20 md:py-0">
          <Link href="/" aria-label="Priceless Blinds home" onClick={closeMenu}>
            <Image
              src="/priceless-blinds-logo.png"
              alt="Priceless Blinds"
              width={129}
              height={48}
              priority
              className="h-12 w-[129.34px]"
            />
          </Link>

          <div className="hidden flex-wrap items-center justify-end gap-x-6 gap-y-3 lg:flex">
            <a
              href="tel:1800911949"
              className="flex items-center gap-2 text-sm font-semibold leading-5 tracking-[0.7px] text-[#001825] hover:text-[#00aeef]"
            >
              <PhoneIcon />
              <span>1800 911 949</span>
            </a>

            <Link
              href={BLACK_FRIDAY_THEME ? BLACK_FRIDAY_QUOTE_HREF : "/contact"}
              className={`flex h-11 items-center justify-center rounded-[2px] px-6 text-center text-sm font-semibold leading-5 tracking-[0.7px] shadow-[0_4px_10px_rgba(14,20,43,0.06)] ${BLACK_FRIDAY_THEME ? "bg-[#e8c982] text-[#151515] hover:bg-[#f1dca9]" : "bg-[#00aeef] text-white hover:bg-[#009bd6] hover:shadow-[0_8px_18px_rgba(0,174,239,0.22)]"}`}
            >
              {BLACK_FRIDAY_THEME ? BLACK_FRIDAY_CTA_LABEL : "BOOK CONSULTATION"}
            </Link>
          </div>

          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-[2px] border border-[#dfe6eb] text-[#001825] shadow-[0_4px_12px_rgba(14,20,43,0.04)] hover:border-[#00aeef] hover:text-[#00aeef] lg:hidden"
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-menu"
            className="border-t border-[#e7e7e7] pb-5 pt-2 lg:hidden"
          >
            <nav aria-label="Mobile navigation">
              <ul>
                {navItems.map((item) => {
                  if (item.menu === "blinds") {
                    return (
                      <li key={item.href}>
                        <MobileSubMenu
                          label={item.label}
                          items={mobileBlindsMenu}
                          onNavigate={closeMenu}
                        />
                      </li>
                    );
                  }

                  if (item.menu === "rooms") {
                    return (
                      <li key={item.href}>
                        <MobileSubMenu
                          label={item.label}
                          items={roomMenu}
                          onNavigate={closeMenu}
                        />
                      </li>
                    );
                  }

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={[
                          "flex min-h-12 items-center border-b border-[#e7e7e7] px-1 text-[15px] leading-5",
                          isNavItemActive(item)
                            ? "font-bold text-[#0e142b]"
                            : "font-semibold text-[#46464d] hover:text-[#0e142b]",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-5 grid gap-3">
              <a
                href="tel:1800911949"
                className="flex h-11 items-center justify-center gap-2 rounded-[2px] border border-[#dfe6eb] text-sm font-semibold leading-5 tracking-[0.7px] text-[#001825]"
              >
                <PhoneIcon />
                <span>1800 911 949</span>
              </a>

              <Link
                href={BLACK_FRIDAY_THEME ? BLACK_FRIDAY_QUOTE_HREF : "/contact"}
                onClick={closeMenu}
                className={`flex h-11 items-center justify-center rounded-[2px] px-5 text-center text-sm font-semibold leading-5 tracking-[0.7px] ${BLACK_FRIDAY_THEME ? "bg-[#e8c982] text-[#151515] hover:bg-[#f1dca9]" : "bg-[#00aeef] text-white shadow-[0_8px_18px_rgba(0,174,239,0.18)]"}`}
              >
                {BLACK_FRIDAY_THEME ? BLACK_FRIDAY_CTA_LABEL : "BOOK CONSULTATION"}
              </Link>
            </div>
          </div>
        ) : null}

        <nav
          aria-label="Main navigation"
          className="hidden h-11 items-center lg:flex lg:justify-center lg:overflow-visible"
        >
          <ul className="flex h-full min-w-max items-center gap-7 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.href} className="group relative h-full">
                <Link
                  href={item.href}
                  className={[
                    "flex h-full items-center gap-1 whitespace-nowrap text-[13px] leading-5",
                    isNavItemActive(item)
                      ? "border-b-2 border-[#0e142b] pb-0.5 font-bold text-[#0e142b]"
                      : "font-semibold tracking-[0.35px] text-[#46464d] hover:text-[#0e142b]",
                  ].join(" ")}
                >
                  <span>{item.label}</span>
                  {item.menu ? <ChevronIcon /> : null}
                </Link>
                {item.menu === "blinds" ? <BlindsDropdown /> : null}
                {item.menu === "rooms" ? <RoomsDropdown /> : null}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
