"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Deny Hendrawan",
    location: "United States",
    title: "Nice Treatment",
    description: "I had a wonderful experience the staff was friendly and attentive, and Dr. Smith took the time to explain everything clearly.",
    image: "/doctorimages/patient22.webp",
   
  },
  {
    name: "Brooks Steave",
    location: "Dallas, CA",
    title: "Nice Support",
    description: "My experience was excellent. The staff was polite and attentive, and the doctor took the time to explain every step clearly.",
    image: "/doctorimages/patient2.webp",
    
  },
  {
    name: "Sofia Doe",
    location: "Los Boston, USA",
    title: "Excellent Service",
    description: "I had a wonderful experience the staff was friendly and attentive, and Dr. Smith took the time to explain everything clearly.",
    image: "/doctorimages/patient23.webp",
    
  },
  {
    name: "Johnson DWayne",
    location: "San Francisco, CA",
    title: "Good Hospitability",
    description: "Genuinely cares about his patients. He helped me understand my condition and worked with me to create a plan.",
    image: "/doctorimages/patient21.webp",
   
  },
];

const counters = [
  { value: "500+", label: "Doctors Available", lineColor: "bg-blue-600" },
  { value: "18+", label: "Specialities", lineColor: "bg-green-600" },
  { value: "30K", label: "Bookings Done", lineColor: "bg-purple-600" },
  { value: "97+", label: "Hospitals & Clinic", lineColor: "bg-pink-600" },
  { value: "317+", label: "Lab Tests Available", lineColor: "bg-orange-600" },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonial-section-one relative overflow-hidden bg-slate-50 py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/doctorimages/testimonial-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        
        <div className="section-header section-header-one text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#2f86ff,#17b5f6)] px-4 py-1.5 text-[10px] sm:text-[11px] font-semibold text-white">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
              Testimonials
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
            </span>
          </div>
          <h2 className="section-title mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            15k Users <span className="text-[#2f86ff]">Trust Doccure</span> Worldwide
          </h2>
        </div>

        
        <div className="testimonials-slider mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.name} className="slide-item">
                <div className="testimonials-item group relative z-10 h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:border-[#2f86ff] hover:bg-[#2f86ff] hover:shadow-xl transition-all duration-300">
                  <div className="testimonials-info">
                  
                    

                    
                    <div className="testimonial-content">
                      <h3 className="title mb-2 text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300">
                        {testimonial.title}
                      </h3>
                      <p className="description text-sm text-slate-600 group-hover:text-white transition-colors duration-300">
                        {testimonial.description}
                      </p>
                    </div>

                   
                    <div className="testimonial-author mt-4 flex gap-3">
                      <div className="relative h-12 w-12 rounded-full ">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="author-name font-semibold text-slate-900 group-hover:text-white transition-colors duration-300">
                          {testimonial.name}
                        </p>
                        <p className="author-location text-sm text-slate-500 group-hover:text-white/90 transition-colors duration-300">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="testimonial-counter counter-section mt-16  p-8  md:p-12">
          <div className="grid   sm:grid-cols-6 lg:grid-cols-5">
            {counters.map((counter, idx) => (
              <div
                key={counter.label}
                className="counter-item text-center"
              >
                <h4 className="text-3xl font-extrabold text-black md:text-4xl lg:text-5xl">
                  {counter.value}
                </h4>
               
                <p className="mt-2 text-sm font-medium text-black">
                  {counter.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}