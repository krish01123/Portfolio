import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  const socials = [
    {
      name: "Instagram",
      icon: "/icons/Icon1.svg",
      Link: "https://www.instagram.com/mhj_cris/",
    },
    {
      name: "Thread",
      icon: "/icons/Icon3.svg",
      Link: "https://www.threads.com/@mhj_cris",
    },
    {
      name: "Facebook",
      icon: "/icons/Icon2.svg",
      Link: "https://www.facebook.com/kris.mhj",
    },
    {
      name: "LinkedIn",
      icon: "/icons/Icon5.svg",
      Link: "https://www.linkedin.com/in/krish-maharjan-b80889376/",
    },
    {
      name: "Tiktok",
      icon: "/icons/Icon6.svg",
      Link: "https://www.tiktok.com/@server_syco",
    },
    {
      name: "Discord",
      icon: "/icons/Icon7.svg",
      Link: "https://discord.com/",
    },
  ];
  return (
    <section className="min-h-screen mt-10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="sticky top-10">
              <Image
                src="/hero.jpg"
                alt="Profile"
                width={700}
                height={900}
                className="w-full max-w-md mx-auto lg:max-w-none object-cover"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#DAC5A7]">
              Krish
            </h1>

            <h2 className="text-3xl sm:text-4xl md:text-5xl italic text-[#DAC5A7]">
              Maharjan
            </h2>
            <p className="mt-4 text-sm md:text-base max-w-xl text-[#DAC5A7]/60">
              Delivering Premium Web Design and Development Services to Boost
              Your Online Persence.
            </p>
            <div className="mt-12 flex justify-center lg:justify-start">
              <a
                href="#about"
                className="group flex items-center gap-4 text-[#DAC5A7]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DAC5A7] bg-[#DAC5A7]/[0.03] transition-all duration-300 group-hover:border-[#DAC5A7]/40 group-hover:bg-[#DAC5A7]/[0.08]">
                  <ArrowDown size={16} />
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#DAC5A7]/70">
                  About Me
                </span>
              </a>
            </div>

            <section className="mt-12">
              {/* About Card */}
              <div
                id="about"
                className="rounded-2xl border border-[#DAC5A7]/10 bg-[#DAC5A7]/[0.03] p-6 sm:p-8 md:p-10"
              >
                <h3 className="text-2xl text-[#DAC5A7] mb-4">
                  Your Partner in Bringing Your Web Design Vision to Life
                </h3>

                <p className="text-[#DAC5A799] leading-relaxed text-justify">
                  As a freelance web designer and developer, I bring a unique
                  combination of creativity and technical expertise to every
                  project. With a keen eye for design and a passion for
                  delivering user-friendly web experiences, I work closely with
                  clients to understand their needs and bring their vision to
                  life. My approach is rooted in collaboration and
                  communication, and I take pride in my ability to explain
                  technical concepts in simple terms. Whether I'm developing a
                  new website from scratch or optimizing an existing site for
                  search engines, I always strive for excellence in both form
                  and function. With a dedication to quality and a commitment to
                  staying on top of the latest trends and technologies, I am
                  confident in my ability to deliver exceptional results that
                  exceed my clients' expectations.
                </p>
                <div className="mt-6">
                  <Image
                    src="/about.png"
                    alt="about"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5">
                {socials.map((item) => (
                  <a
                    key={item.name}
                    href={item.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border border-[#DAC5A7]/20 bg-[#DAC5A7]/5 text-[#DAC5A7]/80 py-3 px-4 text-xs uppercase tracking-[0.15em] hover:bg-[#DAC5A7]/30 transition"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-4 h-4 opacity-80"
                      />
                      <span>{item.name}</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-[#DAC5A7] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                ))}
              </div>

              <div className="mt-6 border border-[#DAC5A7]/10 bg-[#DAC5A7]/[0.02]">
                {[
                  ["Awards SOTD", "2024"],
                  ["CSSDA SOTD", "2023"],
                  ["Designer of the Month", "2023"],
                  ["Awards Honorable Mention", "2022"],
                ].map(([title, year]) => (
                  <div
                    key={title}
                    className="flex items-center justify-between border-t border-[#DAC5A7]/10 px-6 py-6"
                  >
                    <span className="text-[#DAC5A7]/85 text-lg font-light">
                      {title}
                    </span>
                    <span className="text-[#DAC5A7]/45 text-sm">{year}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
