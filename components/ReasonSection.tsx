"use client";

import { useEffect } from "react";
import { CalendarCheck2, MessageCircleHeart, WalletCards } from "lucide-react";

const reasons = [
  {
    title: "Follow-Up Care",
    description: "We ensure continuity of care through regular follow-ups and communication, helping you stay on track with health goals.",
    icon: CalendarCheck2,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    title: "Patient-Centered",
    description: "We prioritize your comfort and preferences, tailoring our services to meet your individual needs and Care from Our Experts",
    icon: MessageCircleHeart,
    bgColor: "bg-blue-50",
    iconColor: "text-[#2f86ff]",
  },
  {
    title: "Convenient Access",
    description: "Easily book appointments online or through our dedicated customer service team, with flexible hours to fit your schedule.",
    icon: WalletCards,
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
];

export default function WhyBookWithUs() {
 

  return (
    <section className="reason-section relative isolate overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      <div className="relative z-20 mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="section-header section-header-one text-center ">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#2f86ff,#17b5f6)] px-4 py-1.5 text-[10px] sm:text-[11px] font-semibold text-white">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
              Why Book with Us
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
            </span>
          </div>
          <h2 className="section-title mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Compelling <span className="text-[#2f86ff]">Reasons</span> to Choose
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:flex sm:flex-col lg:grid-cols-3 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="reason-item   border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1  md:p-8"
              >
               
                <div className="flex justify-center mb-4">
                  <div
                    className={`avatar flex h-12 w-12 items-center justify-center rounded-full ${reason.bgColor} transition-all duration-300 group-hover:scale-110 md:h-14 md:w-14`}
                  >
                    <Icon
                      size={20}
                      className={`${reason.iconColor} md:size-24`}
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

           
                <h3 className="custom-title mb-2 text-center text-lg font-bold text-slate-900 md:text-xl">
                  {reason.title}
                </h3>

              
                <p className="text-center text-sm leading-relaxed text-slate-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

     

     
    </section>
  );
}