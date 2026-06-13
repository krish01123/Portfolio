"use client";

import { plans } from "@/data/Pricing";
import { faqs } from "@/data/faqs";
import { useState } from "react";

export default function Pricing() {
  const [openFaqs, setOpenFaqs] = useState(-1);
  return (
    <section className="bg-black text-[#D9C5A1] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mt-10 mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Experience the Power of
          </h2>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic font-serif mt-2">
            Premium Web Design
          </h3>

          <p className="mt-6 text-xs sm:text-sm md:text-base text-[#8E8678] leading-relaxed">
            Choose a package that suits your needs and budget.
            <br className="hidden sm:block" />
            Transparent pricing with no hidden fees.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 lg:gap-8">
          {plans.map((plans) => (
            <div
              key={plans.name}
              className={`w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[360px]
                 relative overflow-hidden rounded-2xl p-5 sm:p-6 lg:p-7 border
    ${
      plans.popular
        ? "border-[#D9C5A1] scale-[1.03] shadow-[0_0_30px_rgba(217,197,161,0.15)] ring-1 ring-[#D9C5A1]/30"
        : "border-[#2B241A]"
    }
    bg-gradient-to-b from-[#121212] to-[#0b0b0b]
  `}
            >
              {plans.popular && (
                <div className="absolute top-4 right-4 bg-[#D9C6A1] text-black uppercase tracking-[3px] text-[10px] sm:text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                  Top Choice
                </div>
              )}
              <span className="uppercase text-[11px] tracking-[2px] font-bold text-[#DAC5A7]">
                {plans.name}
              </span>

              <h4 className="mt-4 text-3xl sm:text-4xl font-light">
                {plans.price}
              </h4>

              <p className="mt-4 text-sm text-[#8E8578] leading-7 min-h-[90px]">
                {plans.description}
              </p>

              <div className="mt-8">
                {plans.features.map((features) => (
                  <div
                    key={features}
                    className="border-b border-[#2B241A] py-3 text-xs uppercase tracking-[1.5px]"
                  >
                    {features}
                  </div>
                ))}
              </div>

              <button
                className={`mt-8 w-full py-3 rounded-md text-xs tracking-[2px] uppercase transition-all duration-300 
                ${
                  plans.popular
                    ? "bg-[#D9C5A1] text-black hover:bg-[#e5d4b3]"
                    : "bg-[#1a1a1a] border border-[#D9C5A1] text-[#D9C5A1] hover:bg-[#D9C6A1] hover:text-black"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-black text-[#D9C5A1] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mt-10 mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Experience the Power of
            </h2>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic font-serif mt-2">
              Premium Web Design
            </h3>

            <p className="mt-6 text-xs sm:text-sm md:text-base text-[#8E8678] leading-relaxed">
              Choose a package that suits your needs and budget.
              <br className="hidden sm:block" />
              Transparent pricing with no hidden fees.
            </p>
          </div>

          <div className="mt-32 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[16px] uppercase tracking-[3px] text-[#8E8678]">
                FAQ
              </p>

              <h2 className="mt-3 text-5xl md:text-6xl font-light leading-none text-[#D9C5A1]">
                Common
              </h2>

              <h3 className="text-5xl md:text-6xl italic font-serif leading-none text-[#D9C5A1] mt-1">
                Questions
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faqs, index) => (
                <div
                  key={index}
                  className="border border-[#2B241A] bg-[#0d0d0d] rounded-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqs(openFaqs === index ? -1 : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-sm md:text-base text-[#A99E8C] pr-4">
                      {faqs.question}
                    </span>

                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#3a3126] text-[#D9C5A1] text-lg shrink-0">
                      {openFaqs === index ? "-" : "+"}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openFaqs === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-sm leading-7 text-[#8E8678]">
                      {faqs.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
