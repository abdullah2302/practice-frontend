"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I book an appointment with a doctor?",
    answer: "Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking.",
  },
  {
    question: "Can I request a specific doctor when booking my appointment?",
    answer: "Yes, you can usually request a specific doctor when booking your appointment, though availability may vary based on their schedule.",
  },
  {
    question: "What should I do if I need to cancel or reschedule my appointment?",
    answer: "If you need to cancel or reschedule your appointment, contact the doctor as soon as possible to inform them and to reschedule for another available time slot.",
  },
  {
    question: "What if I'm running late for my appointment?",
    answer: "If you know you will be late, it's courteous to call the doctor's office and inform them. Depending on their policy and schedule, they may be able to accommodate you or reschedule your appointment.",
  },
  {
    question: "Can I book appointments for family members or dependents?",
    answer: "Yes, in many cases, you can book appointments for family members or dependents. However, you may need to provide their personal information and consent to do so.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section-one relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#2f86ff,#17b5f6)] px-4 py-1.5 text-[10px] sm:text-[11px] font-semibold text-white">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
              FAQ'S
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
            </span>
          </div>
          <h2 className="section-title mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Your Questions are <span className="text-[#2f86ff]">Answered</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="faq-info space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-slate-50 rounded-xl"
                >
                  <span className="text-base font-semibold text-slate-900 md:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#2f86ff] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  style={{
                    maxHeight:
                      openIndex === index
                        ? contentRefs.current[index]?.scrollHeight + "px"
                        : "0px",
                  }}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <div className="border-t border-slate-100 px-5 pb-5 pt-3">
                    <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}