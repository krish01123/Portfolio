"use client";

import Counter from "@/components/Counter";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden pt-[120px] md:pt-[140px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h1 className="font-light text-[#d6c3a3] leading-[0.95] tracking-tight text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem]">
            Web
          </h1>

          <h1 className="font-light text-[#d6c3a3] leading-[0.95] tracking-tight text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem]">
            Design
          </h1>

          <h1 className="italic font-serif text-[#d6c3a3] leading-[0.95] tracking-tight text-[1.8rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4.8rem] 2xl:text-[5.5rem]">
            & Framer
          </h1>

          <p className="mx-auto mt-3 max-w-[280px] text-[10px] text-gray-500 sm:max-w-[380px] sm:text-xs md:max-w-[500px] md:text-sm lg:max-w-[600px]">
            Best web design, development, and framework services to help your
            business stand out.
          </p>

          <button
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="mt-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-gray-300 transition-all duration-300 hover:text-[#d6c3a3]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3a3a3a] transition-all duration-300 hover:border-[#d6c3a3]">
              <ArrowDown
                size={16}
                className="transition-transform duration-300 hover:translate-y-1"
              />
            </span>
            <span>My Services</span>
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <div className="w-full max-w-[220px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[550px] xl:max-w-[650px]">
            <Image
              src="/laptop.png"
              alt="Laptop Mockup"
              width={1600}
              height={1000}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Counter */}
      <div className="mt-10 w-full border-t border-[#111] bg-[#050505]">
        <div className="grid grid-cols-4">
          <div className="py-5 sm:py-6 md:py-8 text-center border-r border-[#111]">
            <p className="text-[8px] sm:text-[9px] md:text-sm uppercase tracking-[0.2em] text-[#d8c3a5] font-medium">
              Clients
            </p>
            <h3 className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-4xl lg:text-5xl font-light text-[#d6c3a3]">
              <Counter end={150} suffix="+" />
            </h3>
          </div>
          <div className="py-5 sm:py-6 md:py-8 text-center border-r border-[#111]">
            <p className="text-[8px] sm:text-[9px] md:text-sm uppercase tracking-[0.2em] text-[#d8c3a5] font-medium">
              Projects
            </p>
            <h3 className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-4xl lg:text-5xl font-light text-[#d6c3a3]">
              <Counter end={300} suffix="+" />
            </h3>
          </div>
          <div className="py-5 sm:py-6 md:py-8 text-center border-r border-[#111]">
            <p className="text-[8px] sm:text-[9px] md:text-sm uppercase tracking-[0.2em] text-[#d8c3a5] font-medium">
              Happy Clients
            </p>
            <h3 className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-4xl lg:text-5xl font-light text-[#d6c3a3]">
              <Counter end={100} suffix="+" />
            </h3>
          </div>
          <div className="py-5 sm:py-6 md:py-8 text-center border-r border-[#111]">
            <p className="text-[8px] sm:text-[9px] md:text-sm uppercase tracking-[0.2em] text-[#d8c3a5] font-medium">
              Followers
            </p>
            <h3 className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-4xl lg:text-5xl font-light text-[#d6c3a3]">
              <Counter end={100} suffix="K" />
            </h3>
          </div>
        </div>
      </div>

      {/* My Service */}
      <section
        id="services"
        className="w-full bg-[#050505] py-10 sm:py-12 md:py-14 lg:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-24">
          <div className="rounded-2xl border border-[#171717] bg-[#080808] p-6 sm:p-8 md:p-10">
            <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#8c7b62]">
                Web Design
              </p>
              <h2 className="mt-2 font-light text-[#d6c3a3] leading-tight tracking-tight text-[1.5rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem] xl:text-[3.2rem]">
                Transforming Your
                <br />
                Ideas into Reality
              </h2>
            </div>

            <div className="mx-auto max-w-3xl overflow-hidden rounded-sm border border-[#151515]">
              <Image
                src="/project1.png"
                alt="Web Design Process"
                width={1800}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-8 md:mt-10">
              {[
                {
                  title: "Concept",
                  text: "I take time to understand your business needs and audience to develop a unique concept for your website. I'll create wireframes that server as the foundation for your site's design and functionality.",
                },
                {
                  title: "UI/ UX Design",
                  text: "I'll design a user-friendly interface that is visually appealing and engages your target audience. Your website will be created to meet your brand's needs and goals while ensuring a seamless user experience.",
                },
                {
                  title: "Prototype",
                  text: "With our interactive prototype, you'll have the abiltiy to test your website's functionality before it goes live. This ensures that your website's design and user experience are optimized for your audience's needs and preferences.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-4 md:gap-8 py-6 md:py-8 border-t border-[#171717]"
                >
                  <div>
                    <h3 className="uppercase tracking-[0.2em] text-10px sm:text-xs text-[#8c7b62]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-[12px] sm:text-[13px] md:text-sm lg:text-base max-w-2xl">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-24">
          <div className="rounded-2xl border border-[#171717] bg-[#080808] p-6 sm:p-8 md:p-10">
            <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#8c7b62]">
                Development
              </p>
              <h2 className="mt-2 font-light text-[#d6c3a3] leading-tight tracking-tight text-[1.5rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem] xl:text-[3.2rem]">
                Developing High-Performance
                <br />
                Website and Web Application
              </h2>
            </div>

            <div className="mx-auto max-w-3xl overflow-hidden rounded-sm border border-[#151515]">
              <Image
                src="/project4.png"
                alt="Web Design Process"
                width={1800}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-8 md:mt-10">
              {[
                {
                  title: "Framer",
                  text: "I specialize in developing web applications using Framer. From custom animations to complex interactions, I bring your web app to life.",
                },
                {
                  title: "CMS Integration",
                  text: "I can help you streamline your content management process by integrating a CMS into your website. Say goodbye to manual updates and hello to efficiency.",
                },
                {
                  title: "Web Design System",
                  text: "I use a modular design approach to create a web design system that ensures consistency throughout your website. This results in a professional and cohesive online presence.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-4 md:gap-8 py-6 md:py-8 border-t border-[#171717]"
                >
                  <div>
                    <h3 className="uppercase tracking-[0.2em] text-10px sm:text-xs text-[#8c7b62]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-[12px] sm:text-[13px] md:text-sm lg:text-base max-w-2xl">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-24">
          <div className="rounded-2xl border border-[#171717] bg-[#080808] p-6 sm:p-8 md:p-10">
            <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#8c7b62]">
                Seo & Content
              </p>
              <h2 className="mt-2 font-light text-[#d6c3a3] leading-tight tracking-tight text-[1.5rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem] xl:text-[3.2rem]">
                Boosting your Website's Organic
                <br />
                Search Traffic
              </h2>
            </div>

            <div className="mx-auto max-w-3xl overflow-hidden rounded-sm border border-[#151515]">
              <Image
                src="/project3.png"
                alt="Web Design Process"
                width={1800}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-10 sm:mt-12 md:mt-16">
              {[
                {
                  title: "Research",
                  text: "I conduct thorough research to identify the best keywords and strategies to improve your website's search engine ranking.",
                },
                {
                  title: "Seo Ranking",
                  text: "My SEO services are designed to improve your website's visibility on search engines, increasing your organic traffic and driving more leads and sales.",
                },
                {
                  title: "Seo Support",
                  text: "With ongoing SEO support, I ensure that your website stays up-to-date with the latest SEO best practices, keeping you ahead of the competition.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-4 md:gap-8 py-6 md:py-8 border-t border-[#171717]"
                >
                  <div>
                    <h3 className="uppercase tracking-[0.2em] text-10px sm:text-xs text-[#8c7b62]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-[12px] sm:text-[13px] md:text-sm lg:text-base max-w-2xl">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
