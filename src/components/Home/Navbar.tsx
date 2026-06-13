"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "SERVICES", path: "/services" },
    { name: "WORK", path: "/work" },
    { name: "ABOUT", path: "/about" },
    { name: "BLOG", path: "/blog" },
    { name: "PAGES", path: "/pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 md:px-10 py-5">
      <div className="mx-auto max-w-[1150px] flex items-center justify-between rounded-xl border border-[#DAC5A726] bg-[#DAC5A70D] px-5 py-3 backdrop-blur-md">
        <h1 className="text-xl md:text-2xl font-light text-[#DAC5A7]">
          krish.
        </h1>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-xs lg:text-xs tracking-[0.15em] text-[#DAC5A7]/70 transition-colors duration-300 hover:text-[#DAC5A7]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <a
          href="/contact"
          className="hidden md:block bg-[#DAC5A7] px-5 py-3 tracking-[0.15em] text-black transition hover:opacity-90"
        >
          LET'S TALK
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#DAC5A7]"
        >
          {open ? "X" : "☰"}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-xl border border-[#DAC5A726] bg-[#DAC5A70D] backdrop-blur-md md:hidden">
          <div className="flex flex-col p-5 gap-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-sm tracking-[0.15em] text-[#DAC5A7]/70"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-[#DAC5A7] px-4 py-3 text-sm text-black">
              LET'S TALK
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
