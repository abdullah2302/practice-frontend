import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-center text-slate-900">
  
      <div className="pt-14 pb-8">
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
         
            <div className="lg:col-span-8">
              <div className="grid grid-cols-3 gap-1 sm:grid-cols-4">
               
                <div>
                  <h6 className="mb-4 text-base font-bold text-slate-900">Company</h6>
                  <ul className="space-y-2">
                    <li><Link href="/about" className="text-sm text-black hover:text-[#2f86ff] transition-colors">About</Link></li>
                    <li><Link href="/features" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Features</Link></li>
                    <li><Link href="#" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Works</Link></li>
                    <li><Link href="#" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Careers</Link></li>
                    <li><Link href="#" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Locations</Link></li>
                  </ul>
                </div>

               
                <div>
                  <h6 className="mb-4 text-base font-bold text-slate-900">Treatments</h6>
                  <ul className="space-y-2">
                    <li><Link href="/search" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Dental</Link></li>
                    <li><Link href="/search" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Cardiac</Link></li>
                    <li><Link href="/search" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Spinal Cord</Link></li>
                    <li><Link href="/search" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Hair Growth</Link></li>
                    <li><Link href="/search" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Anemia & Disorder</Link></li>
                  </ul>
                </div>

               
                <div>
                  <h6 className="mb-4 text-base font-bold text-slate-900">Specialities</h6>
                  <ul className="space-y-2">
                    <li><Link href="/search" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Transplant</Link></li>
                    <li><Link href="/search" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Cardiologist</Link></li>
                    <li><Link href="/search" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Oncology</Link></li>
                    <li><Link href="/search" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Pediatrics</Link></li>
                    <li><Link href="/search" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Gynacology</Link></li>
                  </ul>
                </div>

               
                <div>
                  <h6 className="mb-4 text-base font-bold text-slate-900">Utilities</h6>
                  <ul className="space-y-2">
                    <li><Link href="/pricing" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Pricing</Link></li>
                    <li><Link href="/contact" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Contact</Link></li>
                    <li><Link href="/contact" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Request A Quote</Link></li>
                    <li><Link href="#" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Premium Membership</Link></li>
                    <li><Link href="#" className="text-sm text-black hover:text-[#2f86ff] transition-colors">Integrations</Link></li>
                  </ul>
                </div>
              </div>
            </div>

         
            <div className="lg:col-span-2">
              <div>
                <h6 className="mb-4 text-base font-bold text-slate-900">Newsletter</h6>
                <p className="mb-3 text-sm text-slate-600">Subscribe & Stay Updated from the Doccure</p>
                <form className="flex flex-col gap-4 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 outline-none focus:border-[#2f86ff] focus:ring-1 focus:ring-[#2f86ff]"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f86ff] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1a6be8] hover:scale-105"
                  >
                    <IoSend className="h-4 w-4" />
                    Send
                  </button>
                </form>

                
                <div className="mt-2">
                  <h6 className="mb-3 text-base font-bold text-slate-900">Connect With Us</h6>
                  <ul className="flex gap-3">
                    <li>
                      <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-[#2f86ff] hover:text-white"
                        aria-label="Facebook"
                      >
                        <FaFacebook className="h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-[#2f86ff] hover:text-white"
                        aria-label="Twitter"
                      >
                        <FaTwitter className="h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-[#2f86ff] hover:text-white"
                        aria-label="Instagram"
                      >
                        <FaInstagram className="h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-[#2f86ff] hover:text-white"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-[#2f86ff] hover:text-white"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-[#2f86ff] hover:text-white"
                        aria-label="Pinterest"
                      >
                        <FaPinterest className="h-4 w-4" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2">
              <img src="/doctorimages/card-01.svg" alt="Visa" className="h-8 w-auto" />
              <img src="/doctorimages/card-02.svg" alt="Mastercard" className="h-8 w-auto" />
              <img src="/doctorimages/card-03.svg" alt="Amex" className="h-8 w-auto" />
              <img src="/doctorimages/card-04.svg" alt="PayPal" className="h-8 w-auto" />
              <img src="/doctorimages/card-05.svg" alt="Discover" className="h-8 w-auto" />
              <img src="/doctorimages/card-06.svg" alt="Stripe" className="h-8 w-auto" />
            </div>
      </div>
    </footer>
  );
}