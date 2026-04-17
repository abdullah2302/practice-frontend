"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = ["Home", "Doctors", "Patients", "Pharmacy", "Pages", "Blog", "Admin"];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle window resize to automatically close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //jb mobile menu open hoga to body ka scroll disable kr denge taki user sirf menu pe focus kre, aur jab menu close ho jaye to scroll wapas enable kr denge
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`  w-full border-b bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "border-slate-100"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 sm:py-4">
         
          <Link 
            href="/home" 
            className="flex shrink-0 items-center  hover:opacity-90"
          >
            <Image
              src="/doctorimages/logo.svg"
              alt="DOCCURE"
              height={40}
              width={160}
              className="h-8 w-auto object-contain sm:h-10"
              priority
            />
          </Link>

          
          <nav className="hidden items-center gap-4 text-sm font-medium text-slate-700 lg:flex xl:gap-6">
            {navItems.map((item, index) => (
              <div key={item} className="relative group">
                <Link
                  href={index === 0 ? "/home" : "#"}
                  className={`relative flex items-center gap-1 whitespace-nowrap py-2 transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#2f86ff] after:transition-all after:duration-300 after:content-[''] ${
                    index === 0 
                      ? "text-[#2f86ff] after:w-full" 
                      : "after:w-0 hover:text-slate-950 group-hover:after:w-full"
                  }`}
                >
                  {item}
                  {index < navItems.length - 1 && index !== 0 && (
                    <ChevronDown className="h-3 w-3 text-slate-400" />
                  )}
                </Link>
              </div>
            ))}
          </nav>

         
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link 
              href="/contact" 
              className="hidden whitespace-nowrap rounded-full bg-[#2f86ff] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1a6be8] hover:scale-105 active:scale-95 sm:inline-flex sm:px-5 sm:py-2.5"
            >
              Sign Up
            </Link>
            <Link 
              href="/contact" 
              className="hidden whitespace-nowrap rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 sm:inline-flex sm:px-5 sm:py-2.5"
            >
              Register
            </Link>
            
           
          </div>
        </div>
      </header>

      
      {isMobileMenuOpen && (
        <>
          
          <div 
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
         
          <div className="fixed right-0 top-0 z-40 h-full w-full max-w-sm transform animate-slide-in-right bg-white shadow-xl lg:hidden">
            <div className="flex h-full flex-col">
              
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
                <Link 
                  href="/home" 
                  className="flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="/doctorimages/logo.svg"
                    alt="DOCCURE"
                    height={32}
                    width={128}
                    className="h-8 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              
              <nav className="flex-1 overflow-y-auto px-2 py-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item}
                    href={index === 0 ? "/home" : "#"}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-all ${
                      index === 0
                        ? "bg-sky-50 text-[#2f86ff]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-black">{item}</span>
                    {index < navItems.length - 1 && index !== 0 && (
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    )}
                  </Link>
                ))}
              </nav>

              
              <div className="border-t border-slate-100 p-4 space-y-3">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-full bg-[#2f86ff] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1a6be8] active:scale-95"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 active:scale-95"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

    
    
      
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </>
  );
}