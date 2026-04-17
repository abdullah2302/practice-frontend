"use client";

import { Search, UserCircle, Calendar, Blend, Play } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    title: "Search For Doctors",
    description: "Search for a doctor based on specialization, location, or availability for your Treatements",
    icon: Search,
    bgColor: "bg-[#2f86ff]",
    number: "01",
  },
  {
    title: "Check Doctor Profile",
    description: "Explore detailed doctor profiles on our platform to make informed healthcare decisions.",
    icon: UserCircle,
    bgColor: "bg-orange-500",
    number: "02",
  },
  {
    title: "Schedule Appointment",
    description: "After choose your preferred doctor, select a convenient time slot, & confirm your appointment.",
    icon: Calendar,
    bgColor: "bg-cyan-500",
    number: "03",
  },
  {
    title: "Get Your Solution",
    description: "Discuss your health with the doctor and the personalized advice & with solution.",
    icon: Blend,
    bgColor: "bg-indigo-500",
    number: "04",
  },
];

export default function BookWithUs() {
  return (
    <section className="bookus-section relative overflow-hidden bg-[#000103] py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
       
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          
          <div className="bookus-img relative">
            <div className="grid gap-3">
              <div>
                <img
                  src="/doctorimages/book-01.webp"
                  alt="Doctor consultation"
                  className="w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <img
                    src="/doctorimages/book-02.webp"
                    alt="Medical care"
                    className="w-full  object-cover"
                  />
                </div>
                <div>
                  <img
                    src="/doctorimages/book-03.webp"
                    alt="Healthcare"
                    className="w-full  object-cover"
                  />
                </div>
              </div>
            </div>

           
            
          </div>

          {/* //right side wala content */}
          <div className="space-y-6">
            <div className="section-header">
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#2f86ff,#17b5f6)] px-4 py-1.5 text-[10px] sm:text-[11px] font-semibold text-white">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                  About US
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                </span>
              </div>
              <h2 className="section-title mt-4 text-3xl font-extrabold  text-white sm:text-4xl lg:text-5xl">
                We are committed to <br /> understanding your{" "}
                <span className="bg-gradient-to-r from-[#2f86ff] to-[#17b5f6] bg-clip-text text-transparent">
                  unique <br /> needs and delivering care.
                </span>
              </h2>
              <p className="mt-4 text-slate-300">
                As a trusted healthcare provider in our community, we are passionate about promoting health and wellness beyond the clinic.
              </p>
            </div>

          
            <div className="faq-info space-y-3">
             
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-white">
                  <span className="text-lg">Our Vision</span>
                </div>
                <div className="px-5 pb-5 text-slate-300">
                  <p>We envision a community where everyone has access to high-quality healthcare and the resources they need to lead healthy, fulfilling lives.</p>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-white">
                  <span className="text-lg">Our Mission</span>
                </div>
                <div className="px-5 pb-5 text-slate-300">
                  <p>To provide accessible, high-quality healthcare services that empower individuals to achieve optimal health and well-being.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="bookus-sec mt-16 relative">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="book-item group relative p-6 pb-12 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative z-10">
                   
                    <div
                      className={`book-icon mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${step.bgColor}  group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                   
                    <div className="book-info">
                      <h3 className="custom-title mb-2 text-lg font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-300">
                        {step.description}
                      </p>
                    </div>

                  </div>

                
                  <div className="book-no absolute bottom-2 left-1/2 z-10 -translate-x-1/2">
                    <h4 className="text-4xl font-bold text-white/20 transition-colors duration-300 group-hover:text-[#2f86ff]">
                      {step.number}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

       
          
        </div>
      </div>

     
    </section>
  );
}