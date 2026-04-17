"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Heart,
  Calendar,
  MapPin,
  Stethoscope,
  Brain,
  HeartPulse,
  Baby,
  Star,
} from "lucide-react";

const doctorCards = [
  {
    name: "Dr. Nicholas Tello",
    specialty: "Pediatrics",
    location: "Ogden, IA",
    availability: "60 Min",
    fee: "$350",
    rating: "4.6",
    image: "/doctorimages/doctor-grid-01.jpg",
  },
  {
    name: "Dr. Harold Bryant",
    specialty: "Neurology",
    location: "Virginia, MS",
    availability: "40 Min",
    fee: "$500",
    rating: "4.8",
    image: "/doctorimages/doctor-grid-02.jpg",
  },
  {
    name: "Dr. Sandra Jones",
    specialty: "Cardiology",
    location: "Berkley, VT",
    availability: "30 Min",
    fee: "$550",
    rating: "4.8",
    image: "/doctorimages/doctor-grid-03.jpg",
  },
  {
    name: "Dr. Charles Scott",
    specialty: "Neurology",
    location: "Nashville, TX",
    availability: "40 Min",
    fee: "$600",
    rating: "4.8",
    image: "/doctorimages/doctor-grid-04.jpg",
  },
  {
    name: "Dr. Lisa Wilson",
    specialty: "Pediatrics",
    location: "Springfield, IL",
    availability: "50 Min",
    fee: "$400",
    rating: "4.7",
    image: "/doctorimages/doctor-grid-05.jpg",
  },
];

function SpecialtyIcon({ specialty }: { specialty: string }) {
  switch (specialty) {
    case "Pediatrics":
      return <Baby className="h-4 w-4" />;
    case "Neurology":
      return <Brain className="h-4 w-4" />;
    case "Cardiology":
      return <HeartPulse className="h-4 w-4" />;
    default:
      return <Stethoscope className="h-4 w-4" />;
  }
}

export default function FeaturedDoctorsSection() {
  const [savedDoctors, setSavedDoctors] = useState<string[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(maxScroll - scrollLeft > 2);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

  
    checkScrollability();

    
    container.addEventListener("scroll", checkScrollability);

    
    window.addEventListener("resize", checkScrollability);

    return () => {
      container.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 320; 

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });

  
    requestAnimationFrame(checkScrollability);
    setTimeout(checkScrollability, 260);
  };

  const toggleSave = (doctorName: string) => {
    if (savedDoctors.includes(doctorName)) {
      setSavedDoctors(savedDoctors.filter((name) => name !== doctorName));
    } else {
      setSavedDoctors([...savedDoctors, doctorName]);
    }
  };

  return (
    <section className="w-full bg-[#f4f6f8] py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#2f86ff,#17b5f6)] px-4 py-1.5 text-[10px] sm:text-[11px] font-semibold text-white">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
            Featured Doctors
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
          </span>
        </div>

        <h2 className="mt-3 sm:mt-4 text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
          Our <span className="text-[#2f86ff]">Highlighted</span> Doctors
        </h2>
        <p className="mt-2 sm:mt-3 text-center text-xs sm:text-sm text-slate-500 px-2">
          Board-certified specialists ready to provide exceptional care
        </p>

       
        <div className="relative mt-6 sm:mt-8 lg:mt-10">
         
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute -left-2 md:left-[-20px] top-1/2 -translate-y-1/2 z-20 
              bg-white shadow-xl rounded-full p-3 transition-all duration-200 border border-gray-200
              hidden md:flex items-center justify-center hover:bg-gray-50
              ${!canScrollLeft ? 'opacity-40 cursor-not-allowed' : 'hover:scale-110 active:scale-95'}`}
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute -right-2 md:right-[-20px] top-1/2 -translate-y-1/2 z-20 
              bg-white shadow-xl rounded-full p-3 transition-all duration-200 border border-gray-200
              hidden md:flex items-center justify-center hover:bg-gray-50
              ${!canScrollRight ? 'opacity-40 cursor-not-allowed' : 'hover:scale-110 active:scale-95'}`}
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="gap-4 grid gap-6 sm:grid-cols-4 lg:grid-cols-3 lg:gap-8">
              {doctorCards.map((doctor) => (
                <article
                  key={doctor.name}
                  className="w-[84vw] max-w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] flex-shrink-0 snap-start rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#ebf3ff] to-[#dcecff]">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, 320px"
                      quality={85}
                      className="h-full "
                    />

                    <div className="absolute left-3 top-3 bg-amber-500 px-2.5 py-0.5 rounded-md text-[10px] font-bold text-white flex items-center gap-0.5">
                      <Star className="h-2.5 w-2.5 fill-white" />
                      <span>{doctor.rating}</span>
                    </div>

                  
                    <button
                      onClick={() => toggleSave(doctor.name)}
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-red-50 transition-colors"
                    >
                      <Heart
                        className={`h-4 w-4 transition-colors ${
                          savedDoctors.includes(doctor.name) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                        }`}
                      />
                    </button>

                    <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-[#2f86ff]">
                      <SpecialtyIcon specialty={doctor.specialty} />
                    </div>
                  </div>

                  <div className="flex flex-col p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-700">
                        {doctor.specialty}
                      </span>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold text-emerald-700">
                        Available
                      </span>
                    </div>

                    <div className="mt-3">
                      <h3 className="text-base font-bold text-slate-900 line-clamp-1">
                        {doctor.name}
                      </h3>
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
                        <MapPin className="h-3 w-3 flex-shrink-0" />
                        <span>{doctor.location}</span>
                        <span className="text-slate-300 mx-0.5">•</span>
                        <span>{doctor.availability}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                      <div>
                        <p className="text-[11px] font-medium text-slate-500">
                          Consultation Fee
                        </p>
                        <p className="text-xl font-extrabold text-[#ef6f3c]">
                          {doctor.fee}
                        </p>
                      </div>
                      <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-[#2f86ff] transition-colors">
                        <Calendar className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}