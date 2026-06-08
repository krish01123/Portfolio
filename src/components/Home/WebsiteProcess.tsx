"use client";

import { useState } from "react";
import { ArrowDown } from "lucide-react";

const steps = [
  {
    number: "Step 1",
    title: "DISCOVERY CALL",
    description:
      "We discuss your goals, requirements, target audience, and project scope to create the perfect strategy.",
    points: ["Business Goals", "Target Audience", "Project Requirements"],
  },
  {
    number: "Step 2",
    title: "CONCEPT & STRATEGY",
    description:
      "A detailed roadmap and wireframes structure is prepared before design begins.",
    points: ["Wireframes", "Site Architecture", "Content Planning"],
  },
  {
    number: "Step 3",
    title: "WEB DESIGN",
    description:
      "We create a visually stunning and user-friendly website design that aligns with your brand identity.",
    points: ["Visual Design", "User Experience", "Responsive Design"],
  },
  {
    number: "Step 4",
    title: "DEVELOPMENT",
    description:
      "We bring the design to life with clean, efficient code, ensuring your website is fast, secure, and scalable.",
    points: [
      "Front-end Development",
      "Back-end Development",
      "Testing & Quality Assurance",
    ],
  },
  {
    number: "Step 5",
    title: "WEBSITE ONBOARDING",
    description:
      "We ensure a smooth transition to your new website with training and support.",
    points: ["Training", "Documentation", "Ongoing Support"],
  },
];

export default function WebsiteProcess() {
  const [showSteps, setShowSteps] = useState(false);
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white sm:py-20 md:py-24 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-16 flex justify-center sm:mb-20 md:mb-24">
          <div className="mb-0 flex flex-col items-center justify-center text-center">
            <p className="mb-4 text-[15px] uppercase tracking-[0.4rem] text-[#b89b73] md:text-xs ">
              THE PROCESS
            </p>
            <h2 className="font-light leading-none text-[#d8c2a0] text-3xl sm:text-6xl md:text-7xl lg:text-8xl">
              Your Website
            </h2>

            <p className="mt-2 font-light italic text-[#d8c2a0] text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              in 5 steps
            </p>
            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-500 md:text-base">
              Our process ensures that we create a website tailored to your
              business needs.
            </p>

            <div className="relative mt-10 flex flex-col items-center">
              <button
                onClick={() => setShowSteps(!showSteps)}
                className="z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-[#111] text-zinc-400 transition-all duration-300 hover:border-[#d9c2a0] hover:text-[d8c2a0]"
              >
                <ArrowDown
                  size={20}
                  className={`transition-transform duration-500 ${
                    showSteps ? "" : "rotate-180"
                  }`}
                />
              </button>
              <div
                className={`absolute left-1/2 top-12 w-px -translate-x-1/2 bg-zinc-700 transition-all duration-500 ${
                  showSteps
                    ? "h-[220px] sm:h-[320px] opacity-100"
                    : "h-0 opacity-0"
                }`}
              />
            </div>
          </div>
        </div>

        <div
          className={`relative overflow-hidden transition-all duration-700 ${
            showSteps ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="absolute left-6 h-[calc(100%+100px)] w-px bg-zinc-700 sm:left-1/2 sm:-translate-x-1/2 " />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative mb-12 flex w-full md:mb-16 lg:mb-20 ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              <button className="absolute left-6 top-8 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-amber-300 bg-[#111] text-sm font-bold tracking-wide text-amber-200 leading-none transition-all duration-300 hover:bg-amber-200 hover:text-black sm:left-1/2 sm:-translate-x-1/2">
                {String(index + 1).padStart(2, "0")}
              </button>

              <div className="ml-14 w-[calc(100%-56px)] sm:ml-0 sm:w-[42%] md:w-[40%] lg:w-[38%] xl:w-[35%]">
                <div className="border border-zinc-800 bg-[#151515] p-4 shadow-xl sm:p-6 md:p-7 lg:p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {step.number}
                  </p>

                  <h3 className="mt-3 text-base font-light text-amber-100 sm:text-xl md:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                    {step.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center text-sm text-zinc-400 md:text-base"
                      >
                        <span className="mr-2 text-amber-200">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
