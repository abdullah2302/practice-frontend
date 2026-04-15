"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const navItems = ["Home", "Doctors", "Patients", "Pharmacy", "Pages", "Blog", "Admin"];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-10000 bg-white">
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/home" className="flex items-center text-[28px] font-extrabold  text-[#2f86ff]">
          <Image
            src=""
            alt="DOCCURE"
            height={40}
            width={160}
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={item}
              href="#"
              className={`relative transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#2f86ff] after:transition-all after:duration-300 after:content-[''] ${index === 0 ? "text-[#2f86ff] after:w-full" : "after:w-0 hover:text-slate-950 hover:after:w-full"}`}
            >
              {item}
              {index < navItems.length - 1 ? <span className="ml-1 text-slate-400">▾</span> : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#2f86ff] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1a6be8] hover:scale-105 sm:inline-flex">
            Sign Up
          </Link>
          <Link href="/contact" className="hidden inline-flex items-center justify-center whitespace-nowrap rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:scale-105 sm:inline-flex">
            Register
          </Link>
         
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 text-slate-900 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item}
                href={index === 0 ? "/home" : "#"}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${index === 0
                  ? "bg-sky-50 text-[#2f86ff]"
                  : "text-slate-900 hover:bg-slate-50 hover:text-slate-950"}`}

                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>

        </div>
      )}
    </header>
  );
}