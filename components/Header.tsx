import Navbar from "./Navbar";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import Link from "next/link"; 

const SocialIcon = ({ Icon }: { Icon: IconType }) => <Icon className="h-4 w-4" aria-hidden="true" />;

export default function Header() {
  return (
    <>
      <section className="hidden border-b border-slate-200 bg-white md:block">
        <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-2 px-4 py-2 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:w-auto sm:justify-start">
            <span className="flex items-center gap-1.5">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[9px] text-white">i</span>
              info@example.com
            </span>
            <span className="flex items-center gap-1.5">+1 66589 14556</span>
          </div>

          <div className="flex w-full items-center justify-center gap-2 sm:w-auto sm:justify-end sm:gap-3">
            <details className="relative hidden md:block">
              <summary className="flex cursor-pointer list-none items-center gap-2   px-2.5 py-1 text-[11px] font-semibold text-slate-700 transition-colors hover:border-[#2f86ff] hover:text-[#2f86ff]">
                <span className="text-sm ">🇺🇸</span>
                English
                <span className="text-[10px]  text-slate-400">▾</span>
              </summary>

              <div className="absolute right-0 top-full z-20 mt-2 w-44 overflow-hidden  border border-slate-200 bg-white p-1 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                <button type="button" className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[11px] font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#2f86ff]">
                  <span className="text-sm leading-none">🇺🇸</span>
                  English
                </button>
                <button type="button" className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[11px] font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#2f86ff]">
                  <span className="text-sm leading-none">🇫🇷</span>
                  French
                </button>
                <button type="button" className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[11px] font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#2f86ff]">
                  <span className="text-sm leading-none">🇦🇪</span>
                  Arabic
                </button>
              </div>
            </details>
            <Link className="flex h-8 w-8 items-center justify-center  text-slate-700 transition-colors hover:border-[#2f86ff] hover:text-[#2f86ff] sm:h-7 sm:w-7" href="#" aria-label="Facebook">
              <SocialIcon Icon={FaFacebookF} />
            </Link>
            <Link className="flex h-8 w-8 items-center justify-center  text-slate-700 transition-colors hover:border-[#2f86ff] hover:text-[#2f86ff] sm:h-7 sm:w-7" href="#" aria-label="X">
              <SocialIcon Icon={FaXTwitter} />
            </Link>
            <Link className="flex h-8 w-8 items-center justify-center  text-slate-700 transition-colors hover:border-[#2f86ff] hover:text-[#2f86ff] sm:h-7 sm:w-7" href="#" aria-label="Instagram">
              <SocialIcon Icon={FaInstagram} />
            </Link>
            <Link className="flex h-8 w-8 items-center justify-center  text-slate-700 transition-colors hover:border-[#2f86ff] hover:text-[#2f86ff] sm:h-7 sm:w-7" href="#" aria-label="LinkedIn">
              <SocialIcon Icon={FaLinkedinIn} />
            </Link>
          </div>
        </div>
      </section>
      <Navbar />
    </>
  );
}