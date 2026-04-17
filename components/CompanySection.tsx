"use client";

import Image from "next/image";

const companies = [
  { name: "Company 1", logo: "/doctorimages/company-01.svg" },
  { name: "Company 2", logo: "/doctorimages/company-02.svg" },
  { name: "Company 3", logo: "/doctorimages/company-03.svg" },
  { name: "Company 4", logo: "/doctorimages/company-04.svg" },
  { name: "Company 5", logo: "/doctorimages/company-05.svg" },
  { name: "Company 6", logo: "/doctorimages/company-06.svg" },
  { name: "Company 7", logo: "/doctorimages/company-07.svg" },
];

export default function TrustedPartners() {

  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="company-section bg-black py-12 md:py-16">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
       
        <div className="section-header text-center">
          <p className="m-0 text-sm font-semibold text-white/80">
            Trusted Partners with Doccure
          </p>
        </div>

        
        <div className="company-slider mt-8 md:mt-10">
          <div className="relative overflow-hidden">
            <div className="horizontal-slide overflow-hidden">
              <div className="animate-marquee flex gap-8 whitespace-nowrap md:gap-12">
                {duplicatedCompanies.map((company, index) => (
                  <div
                    key={`${company.name}-${index}`}
                    className="slide-item flex flex-shrink-0 items-center justify-center"
                  >
                    <div className="relative h-8 w-24 md:h-10 md:w-28">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        sizes="(max-width: 768px) 96px, 112px"
                        className="object-contain opacity-70 transition-all duration-300 hover:opacity-100"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: fit-content;
        }
        .horizontal-slide:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}