"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="bg-[#0b0b0b] text-[#d8c3a5] relative pt-10">
      <div className="mx-auto w-[92%] max-w-[1800px]">
        <div className="text-center">
          <span className="block text-[10px] md:text-xs tracking-[4px] uppercase text-[#d8c3a580] mb-4">
            Project In Mind?
          </span>

          <h1 className="font-light leading-none text-[42px] sm:text-[58px] md:text-[80px] lg:text-[110px] xl:text-[130px] 2xl:text-[150px]">
            Let's make your
            <br />
            <span className="italic font-serif">Webstie shine</span>
          </h1>

          <p className="mt-6 text-sm md:text-base text-[#d8c3a599] max-w-xl mx-auto">
            Best web design, Webflow and UI/UX design to help your business
            stand out.
          </p>

          <button className="mt-8 bg-[#d8c3a5] text-black px-6 py-3 text-xs tracking-wider hover:opacity-90 transition inline-flex items-center gap-2">
            GET IN TOUCH
            <ArrowUpRight size={20} />
          </button>

          <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:gap-x-10 lg:grid-cols-4 lg:gap-14">
            <div className="w-full min-w-0">
              <h2 className="text-xl sm:text-2xl  lg:text-3xl mt-6 md:mt-10 mb-4 md:mb-8 text-left">
                krish.
              </h2>

              <div className="space-y-5">
                <a
                  href="https://www.instagram.com/mhj_cris/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start sm:flex-row sm:items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <div className="w-14 h-14 rounded-full border-[#d8c3a533] flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/icons/Icon1.svg"
                      alt="instagram"
                      width={30}
                      height={30}
                      className="sm:w-7 sm:h-7"
                    />
                  </div>
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    Instagram
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/kris.mhj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start sm:flex-row sm:items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <div className="w-14 h-14 rounded-full border-[#d8c3a533] flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/icons/Icon2.svg"
                      alt="facebook"
                      width={30}
                      height={30}
                      className="sm:w-7 sm:h-7"
                    />
                  </div>
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    Facebook
                  </span>
                </a>
                <a
                  href="https://www.threads.com/@mhj_cris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start sm:flex-row sm:items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <div className="w-14 h-14 rounded-full border-[#d8c3a533] flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/icons/Icon3.svg"
                      alt="thread"
                      width={30}
                      height={30}
                      className="sm:w-7 sm:h-7"
                    />
                  </div>
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    Thread
                  </span>
                </a>
                <a
                  href="https://github.com/krish01123/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start sm:flex-row sm:items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <div className="w-14 h-14 rounded-full border-[#d8c3a533] flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/icons/Icon4.svg"
                      alt="github"
                      width={30}
                      height={30}
                      className="sm:w-7 sm:h-7"
                    />
                  </div>
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    GitHub
                  </span>
                </a>
              </div>
            </div>

            {/* Pages */}
            <div className="w-full min-w-0">
              <h3 className="text-xl sm:text-2xl lg:text-3xl mt-6 md:mt-10 mb-6 md:mb-10 text-left">
                Pages
              </h3>
              <div className="space-y-10">
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    Home
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    Services
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    About
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    Contact
                  </span>
                </a>
              </div>
              <button className="mt-4 bg-[#d8c3a5] text-black px-3 py-1.5 text-md md:text-sm flex items-center gap-1">
                MORE TEMPLATE <ArrowUpRight size={14} />
              </button>
            </div>

            {/* CMS */}
            <div className="w-full min-w-0">
              <h3 className="text-xl sm:text-2xl lg:text-3xl mt-6 md:mt-10 mb-6 md:mb-10 text-left">
                CMS
              </h3>
              <div className="space-y-10">
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    Work
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    Work Single
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    Blog
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    Blog Post
                  </span>
                </a>
              </div>
            </div>

            {/* Utiltiy Page */}
            <div className="w-full min-w-0 text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl mt-6 md:mt-10 mb-6 md:mb-10 text-left">
                Utility Pages
              </h3>

              <div className="space-y-10 ">
                <a
                  href="#"
                  className="flex justift-start items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    404 Error Page
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    Password <br /> Protected
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    Styleguide
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]ck"
                >
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    Licensing
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#d8c3a599] hover:text-[#d8c3a5]"
                >
                  <span className="tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                    Changelog
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-md text-[#d8c3a560] w-full text-center">
            © 2026 Made by Krish Maharjan
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 text-md text-[#d8c3a599] hover:text-[#d8c3a5] transition whitespace-nowrap "
          >
            TO TOP
            <span className="w-9 h-9 rounded-full border border-[#d8c3a540] flex items-center justify-center">
              <ArrowUp size={20} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
