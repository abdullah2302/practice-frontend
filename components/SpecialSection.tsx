"use client";

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
  const marqueeCards = [...specialtyCards, ...specialtyCards];

  return (
    <section className="bg-white py-14 lg:py-16 flex ">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#2f86ff,#17b5f6)] px-4 py-1.5 text-[11px] font-semibold text-white">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
              Top Specialities
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
            </span>
          </div>

          <h2 className="mt-4 text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Highlighting the <span className="text-[#2f86ff]">Care &amp; Support</span>
          </h2>

          <div className="relative mt-8 lg:mt-10">
            
            <div className="overflow-hidden ">
              <div className="flex w-max gap-4 sm:gap-5">
                {marqueeCards.map((card, idx) => (
                  <article
                    key={`${card.name}-${idx}`}
                    className="group w-[240px] flex-none sm:w-[250px] md:w-[260px] lg:w-[250px]"
                  >
                    <div
                      className="relative h-[176px] overflow-hidden rounded-2xl bg-slate-200 transition-transform duration-300 group-hover:scale-105 sm:h-[182px]"
                      style={{
                        backgroundImage: `linear-gradient(0deg, rgba(15, 23, 42, 0.14), rgba(15, 23, 42, 0.14)), url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.12))] transition-opacity duration-300 group-hover:opacity-0" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.18)] transition-all duration-300 group-hover:border-[#2f86ff]/40 group-hover:shadow-[0_15px_35px_rgba(15,23,42,0.25)]">
                      <SpecialtyIcon name={card.icon} className="h-5 w-5 text-slate-600 transition-colors duration-300 group-hover:text-[#2f86ff]" />
                      </div>
                    </div>

                    <div className="pt-3 text-center">
                      <h3 className="text-lg font-extrabold leading-tight text-slate-900">
                        {card.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{card.count}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}