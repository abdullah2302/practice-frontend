"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Heart,
  Bone,
  Brain,
  Baby,
  MessageCircleHeart,
  Activity,
} from "lucide-react";

const specialtyCards = [
  {
    name: "Cardiology",
    count: "254 Doctors",
    image: "/doctorimages/speciality-02.jpg",
    icon: "cardiology",
  },
  {
    name: "Orthopedics",
    count: "151 Doctors",
    image: "/doctorimages/speciality-03.jpg",
    icon: "orthopedics",
  },
  {
    name: "Neurology",
    count: "176 Doctors",
    image: "/doctorimages/speciality-04.jpg",
    icon: "neurology",
  },
  {
    name: "Pediatrics",
    count: "124 Doctors",
    image: "/doctorimages/speciality-05.jpg",
    icon: "pediatrics",
  },
  {
    name: "Psychiatry",
    count: "112 Doctors",
    image: "/doctorimages/speciality-06.jpg",
    icon: "psychiatry",
  },
  {
    name: "Endocrinology",
    count: "104 Doctors",
    image: "/doctorimages/speciality-07.jpg",
    icon: "endocrinology",
  },
];

function SpecialtyIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "cardiology":
      return <Heart className={className} />;
    case "orthopedics":
      return <Bone className={className} />;
    case "neurology":
      return <Brain className={className} />;
    case "pediatrics":
      return <Baby className={className} />;
    case "psychiatry":
      return <MessageCircleHeart className={className} />;
    case "endocrinology":
      return <Activity className={className} />;
    default:
      return null;
  }
}

export default function TopSpecialtiesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 20);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 20
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
      checkScrollPosition();
      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#2f86ff,#17b5f6)] px-3 py-1 text-[10px] font-semibold text-white sm:px-4 sm:py-1.5 sm:text-[11px]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
            Top Specialities
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
          </span>
        </div>

       
        <h2 className="mt-3 text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:mt-4 sm:text-3xl md:text-4xl">
          Highlighting the <span className="text-[#2f86ff]">Care & Support</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 sm:mt-4 sm:text-base">
          Find the right specialist for your health needs from our network of experienced doctors
        </p>

        <div className="relative mt-8 sm:mt-10 lg:mt-12">
         
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white shadow-lg p-2 text-slate-700 hover:bg-slate-50 lg:p-3 hidden sm:flex"
              aria-label="Scroll left"
            >
              <svg className="h-4 w-4 lg:h-5 lg:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          
         
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white shadow-lg p-2 text-slate-700 hover:bg-slate-50 lg:p-3 hidden sm:flex"
              aria-label="Scroll right"
            >
              <svg className="h-4 w-4 lg:h-5 lg:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

         
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-3 lg:gap-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {specialtyCards.map((card, idx) => (
              <article
                key={`${card.name}-${idx}`}
                className="group flex-shrink-0 w-[260px] sm:w-auto"
              >
                <div className="cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                  
                  <div className="relative h-[176px] overflow-hidden rounded-2xl bg-slate-200 sm:h-[182px] md:h-[200px] lg:h-[220px]">
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      sizes="(max-width: 640px) 260px, (max-width: 768px) 280px, (max-width: 1024px) 300px, 320px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                   
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                   
                    <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white shadow-lg transition-all duration-300 group-hover:border-[#2f86ff] group-hover:shadow-xl md:h-16 md:w-16">
                      <SpecialtyIcon 
                        name={card.icon} 
                        className="h-5 w-5 text-slate-700 transition-colors duration-300 group-hover:text-[#2f86ff] md:h-6 md:w-6" 
                      />
                    </div>
                  </div>

                 
                  <div className="pt-3 text-center">
                    <h3 className="text-base font-extrabold text-slate-900 sm:text-lg md:text-xl">
                      {card.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                      {card.count}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

       
      
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}