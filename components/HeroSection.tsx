"use client";
import {
  CalendarCheck2,
  Users,
  Building2,
  HeartPulse,
  Pill,
  FlaskConical,
  House,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { Video, PhoneOff, Mic, ChevronDown } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const [isSpecialtyOpen, setIsSpecialtyOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("Select Speciality");
  const[search,setSearch] = useState("");

  const specialties = [
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Psychiatry",
  ];

  const socialStrip: { name: string; color: string; Icon: LucideIcon }[] = [
    { name: "Book Appointment", color: "bg-sky-500", Icon: CalendarCheck2 },
    { name: "Talk to Doctors", color: "bg-blue-600", Icon: Users },
    { name: "Hospitals & Clinics", color: "bg-pink-500", Icon: Building2 },
    { name: "Healthcare", color: "bg-cyan-500", Icon: HeartPulse },
    { name: "Medicine & Supplies", color: "bg-violet-500", Icon: Pill },
    { name: "Lab Testing", color: "bg-orange-500", Icon: FlaskConical },
    { name: "Home Care", color: "bg-teal-600", Icon: House },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-700 via-blue-600 to-blue-400 text-white">
        
        <div className=" absolute right-0 top-0 z-[1] hidden lg:block">
          <div className="relative h-24 w-auto sm:h-32 md:h-48 lg:h-96 xl:h-[40rem]">
            <Image
              src="/doctorimages/banner-element-02.webp"
              alt=""
              height={800}
              width={600}
              className="object-contain opacity-50"
            />
          </div>
        </div>

        <div className=" absolute bottom-0 left-0 z-0 hidden lg:block">
          <div className="relative h-16 w-auto sm:h-20 md:h-28 lg:h-60 xl:h-80">
            <Image
              src="/doctorimages/banner-element-01.webp"
              alt="تصویر لگاؑو"
              height={600}
              width={800}
              className="object-contain opacity-50"
            />
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 xl:py-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-12">
            
            <div className="relative z-10 space-y-4 sm:space-y-5 md:space-y-6">
              
              <div className="inline-flex w-full max-w-max flex-wrap items-center justify-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-900 shadow-lg sm:justify-start sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
                <span className="flex -space-x-2">
                  <div className="relative h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10">
                    <Image
                      src="/doctorimages/doctor-thumb-22.webp"
                      alt="User 1"
                      height={600}
                      width={600}
                      className="rounded-full border-2 border-white object-cover"
                    />
                  </div>
                  <div className="relative h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10">
                    <Image
                      src="/doctorimages/doctor-thumb-23.webp"
                      alt="User 2"                     
                       height={600}
                      width={600}
                      className="rounded-full border-2 border-white object-cover"
                    />
                  </div>
                  <div className="relative h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10">
                    <Image
                      src="/doctorimages/doctor-thumb-24.webp"
                      alt="User 3"
                      height={600}
                      width={600}
                      className="rounded-full border-2 border-white object-cover"
                    />
                  </div>
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm">5K+ Appointments</span>
                <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm">★★★★★</span>
                <span className="text-slate-600 text-[10px] sm:text-xs md:text-sm">5.0 Ratings</span>
              </div>

              <div className="max-w-3xl space-y-2 sm:space-y-3 md:space-y-4">
                <h1 className="text-xl font-bold leading-tight text-center sm:text-left sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  Discover Health: Find Your Trusted
                  
                  Doctors Today
                </h1>
              </div>

              <div className="flex w-full max-w-3xl flex-col gap-3">
                <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white text-slate-700 shadow-lg sm:flex-row sm:items-center">
                  
                  <div className="relative sm:min-w-[180px] md:min-w-[200px]">
                    <button
                      type="button"
                      onClick={() => setIsSpecialtyOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between gap-2 border-b border-slate-100 px-4 py-3 text-xs font-medium whitespace-nowrap sm:border-b-0 sm:border-r sm:px-5 sm:py-4 sm:text-sm"
                    >
                      <span className="text-sm sm:text-base">❖</span>
                      <span className="flex-1 text-left">{selectedSpecialty}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${
                          isSpecialtyOpen ? "rotate-180" : "rotate-0"
                        }`}
                        strokeWidth={2.25}
                      />
                    </button>

                    {isSpecialtyOpen && (
                      <div className="absolute left-0 top-full z-30 mt-1 w-full rounded-xl border border-slate-200 bg-white p-1 shadow-lg sm:mt-2 sm:w-56">
                        {specialties.map((specialty) => (
                          <button
                            key={specialty}
                            type="button"
                            onClick={() => {
                              setSelectedSpecialty(specialty);
                              setIsSpecialtyOpen(false);
                            }}
                            className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
                          >
                            {specialty}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 items-center gap-2 px-4 py-3 relative z-20">
  <span className="text-sm sm:text-base">⌕</span>
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search for Medical Procedures, hospitals"
    className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400 text-xs sm:text-sm"
  />
</div>

                  <button className="mx-3 mb-3 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 sm:mx-2 sm:my-2 sm:rounded-full sm:px-6 sm:py-2.5 md:px-7">
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-6 hidden md:block">
              <div className="relative flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] h-auto aspect-square mx-auto">
                  <Image
                    src="/doctorimages/banner-doctor.svg"
                    alt="Doctor"
                    height={800}
                    width={600}
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                  
                  <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white px-3 py-2 shadow-lg sm:gap-3 sm:px-4 md:-bottom-8">
                    <Link
                      href="#"
                      aria-label="Video call"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition-all hover:scale-110 hover:bg-blue-700 sm:h-10 sm:w-10 md:h-11 md:w-11"
                    >
                      <Video className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" strokeWidth={2.25} />
                    </Link>
                    <Link
                      href="#"
                      aria-label="End call"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white transition-all hover:scale-110 hover:bg-red-600 sm:h-10 sm:w-10 md:h-11 md:w-11"
                    >
                      <PhoneOff className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" strokeWidth={2.25} />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Mic mute"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition-all hover:scale-110 hover:bg-blue-700 sm:h-10 sm:w-10 md:h-11 md:w-11"
                    >
                      <Mic className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" strokeWidth={2.25} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 w-full px-3 sm:-mt-10 sm:px-4 md:-mt-12 lg:-mt-14 lg:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl bg-white/95 px-3 py-4 shadow-lg backdrop-blur-sm sm:rounded-3xl sm:px-5 sm:py-5 md:px-6 lg:px-8 lg:py-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-7 lg:gap-5">
            {socialStrip.map((item) => (
              <div 
                key={item.name} 
                className="group flex flex-col items-center gap-2 rounded-xl p-2 transition-all hover:bg-slate-50 sm:gap-2.5 sm:p-3"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md transition-all group-hover:scale-110 sm:h-12 sm:w-12 md:h-14 md:w-14 ${item.color}`}>
                  <item.Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" aria-hidden="true" />
                </div>
                <span className="text-center text-[10px] font-semibold text-slate-700 sm:text-xs md:text-sm">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}