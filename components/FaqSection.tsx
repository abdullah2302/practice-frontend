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
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-500 px-4 py-1 text-xs font-semibold text-white">
            FAQ'S
          </span>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
            Your Questions are <span className="text-blue-500">Answered</span>
          </h2>
        </div>

        
        <div className="mt-8 space-y-3 md:mt-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-200 bg-white"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between px-4 py-3 text-left md:px-5 md:py-4"
              >
                <span className="text-sm font-semibold text-slate-900 md:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-blue-500 transition-transform duration-300 md:h-5 md:w-5 ${
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
                className="overflow-hidden transition-all duration-300"
              >
                <div className="border-t border-slate-100 px-4 pb-4 pt-2 md:px-5 md:pb-5">
                  <p className="text-sm text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}