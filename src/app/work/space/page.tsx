"use client";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Slider from "@/components/Home/Slider";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function SpacePage() {
  const cards = [
    {
      title: "Challenge",
      text: "Our client was struggling to attract and retain customers due to an outdated and non-responsive website that didn't align with their brand identity.",
    },
    {
      title: "Goal",
      text: "Our goal was to create a modern and visually appealing website that reflected the client's brand and delivered a seamless user experience. The website needed to be responsive, easy to navigate, and optimized for search engines to improve their online visibility.",
    },
    {
      title: "Result",
      text: "Our team developed a custom website design that was not only visually stunning but also user-friendly and optimized for search engines. The client's website now showcases their products and services in a professional and engaging manner, and has seen a significant increase in organic traffic and customer engagement. The client is thrilled with the final result and has received positive feedback from their customers.",
    },
  ];
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-[#DAC5A7] tracking-wide">
              Space
            </h1>
            <p className="mt-3 text-[#DAC5A7]/60 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
              Modern and visually appealing website that reflected the client's
              brand.
            </p>
          </div>

          <div className="mt-8 md:mt-12 ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-[#DAC5A7]">
              <Stat title="Client" value="Krish Maharjan" />
              <Stat title="Timeline" value="3 weeks " />
              <Stat title="Platform" value="Laptop" />
              <Stat title="Website" value="Krish.com" />
            </div>
            <div className="flex justify-center mt-5">
              <button
                onClick={() =>
                  document.getElementById("details")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="mt-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#DAC5A7] transition-all duration-300 hover:text-[#d6c3a3]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DAC5A7]/15 transition-all duration-300 hover:border-[#d6c3a3]">
                  <ArrowDown
                    size={16}
                    className="transition-transform duration-300 hover:translate-y-1"
                  />
                </span>
                <span>More Details</span>
              </button>
            </div>
          </div>

          <div className="mt-10 md:mt-14 lg:mt-16">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/Project1.png"
                alt="Space Laptop"
                width={1400}
                height={900}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div
            id="details"
            className="mt-12 md:mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
          >
            <div>
              <span className="text-[#DAC5A7]/60 uppercase tracking-widest text-xs">
                About
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#DAC5A7] leading-tight">
                Concept, Design, and Development.
                <br />
                All-in-one.
              </h2>
            </div>

            <div className="space-y-4">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="bg-[#111111] border border-[#DAC5A7]/5 p-5 md:p-6 rounded-sm"
                >
                  <h3 className="text-sm md:text-base font-medium text-[#DAC5A7]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[#DAC5A7]/60 text-sm leading-relaxed">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Slider />
      <Footer />
    </>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-[#DAC5A7]/15 border border-white/5 py-4 px-4 text-center">
      <p className="text-[10px] uppercase tracking-wider text-[#DAC5A7]">
        {title}
      </p>
      <p className="mt-2 text-sm md:text-base">{value}</p>
    </div>
  );
}
