import Link from "next/link";

export function SaleTagIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3h8l10 10a2 2 0 0 1 0 2.8L15.8 21a2 2 0 0 1-2.8 0L3 11V3Z" />
      <circle cx="7.5" cy="7.5" r="1" />
    </svg>
  );
}

export function BlackFridayBar() {
  return (
    <div className="border-b border-[#d9b76c]/30 bg-[#151515] px-5 py-2 md:px-12">
      <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-center text-xs font-semibold leading-5 tracking-[0.35px] text-white md:text-[13px]">
        <SaleTagIcon className="h-4 w-4 shrink-0 text-[#e8c982]" />
        <span>Black Friday Sale at Priceless Blinds</span>
        <Link
          href="/contact"
          className="text-[#e8c982] underline underline-offset-2 hover:text-white"
        >
          Book a free consultation
        </Link>
      </p>
    </div>
  );
}

export function HeroBlackFridayDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute right-5 top-5 h-16 w-16 border-r border-t border-[#e8c982]/50 md:right-8 md:top-8 md:h-28 md:w-28" />
      <div className="absolute bottom-24 right-5 h-16 w-16 border-b border-r border-[#e8c982]/30 md:right-8 md:h-28 md:w-28" />
    </div>
  );
}
