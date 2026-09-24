import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-[#1E1B4B]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6366F1] text-sm text-white shadow-md shadow-[#6366F1]/20">
            T
          </span>

          <span>
            Tri<span className="text-[#6366F1]">mm</span>
          </span>
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          <li>
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-medium text-[#64748B] transition hover:bg-[#EEF2FF] hover:text-[#6366F1]"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="rounded-lg px-4 py-2 text-sm font-medium text-[#64748B] transition hover:bg-[#EEF2FF] hover:text-[#6366F1]"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/shorten"
              className="rounded-lg px-4 py-2 text-sm font-medium text-[#64748B] transition hover:bg-[#EEF2FF] hover:text-[#6366F1]"
            >
              Shorten
            </Link>
          </li>

          {/* Buttons */}
          <li className="ml-4 flex items-center gap-2 border-l border-[#E2E8F0] pl-4">
            <Link href="/shorten">
              <button className="rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#6366F1]/20 transition hover:bg-[#4F46E5] hover:shadow-lg active:scale-[0.98]">
                Try Now →
              </button>
            </Link>

            <Link href="https://github.com/Sanketthul?tab=repositories">
              <button className="rounded-xl border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-semibold text-[#1E1B4B] transition hover:border-[#C7D2FE] hover:bg-[#EEF2FF]">
                GitHub
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Try Button */}
        <Link href="/shorten" className="md:hidden">
          <button className="rounded-xl bg-[#6366F1] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#6366F1]/20">
            Try Now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
