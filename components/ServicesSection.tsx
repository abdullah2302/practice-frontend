"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  { name: "Multi Speciality Treatments & Doctors", href: "#" },
  { name: "Lab Testing Services", href: "#" },
  { name: "Medicines & Supplies", href: "#" },
  { name: "Hospitals & Clinics", href: "#" },
  { name: "Health Care Services", href: "#" },
  { name: "Talk to Doctors", href: "#" },
  { name: "Home Care Services", href: "#" },
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.2; 

    const animate = () => {
      if (scrollContainer && !isHovered) {
        scrollPosition += speed;
        
       
        if (scrollPosition >= scrollContainer.scrollWidth / 3) {
          scrollPosition = 0;
        }
        
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
        animationId = requestAnimationFrame(animate);
      } else if (!isHovered) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovered]);


  const duplicatedServices = [...services, ...services, ...services];

  return (
    <section className="services-section overflow-hidden bg-[#2f86ff] py-3 md:py-4">
      <div className="relative">
       
       
  
        <div 
          className="horizontal-slide overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-10"
            style={{ display: "flex" }}
          >
            {duplicatedServices.map((service, index) => (
              <div
                key={`${service.name}-${index}`}
                className="services-slide flex-shrink-0"
              >
                <h6 className="m-0">
                  <a
                    href={service.href}
                    className="inline-block text-xs font-semibold text-white transition-all duration-300 hover:text-white/80 md:text-sm lg:text-base"
                    style={{ textDecoration: 'none' }}
                  >
                    {service.name}
                  </a>
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}