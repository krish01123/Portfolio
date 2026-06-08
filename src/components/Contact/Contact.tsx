import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Contactpage() {
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
    <section className="bg-black min-h-screen py-8 sm:py-20 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
          <div className="relative w-full h-[350px] sm:h-[500px] md:h-[650px] lg:h-[800px] overflow-hidden">
            <Image
              src="/hero.jpg"
              alt="Portrait"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="w-full">
            <div className="border border-[#1f1f1f] bg-[#0b0b0b] p-5 sm:p-8 md:p-10">
              <span className="text-[10px] sm:text-xs uppercase tracking-[3px] text-[#7d7364]">
                Contact
              </span>

              <h2 className="mt-3 text-[#d6c0a0] text-3xl sm:text-4xl md:text-5xl font-light">
                Let's get in touch.
              </h2>

              <form className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full bg-transparent border border-[#232323] px-4 py-3 text-white text-sm placeholder:text-[#6d6d6d] outline-none focus:border-[#d6c0a0] transition"
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-transparent border border-[#232323] px-4 py-3 text-white text-sm placeholder:text-[#6d6d6d] outline-none focus:border-[#d6c0a0] transition"
                />
                <textarea
                  rows={6}
                  placeholder="MESSAGE"
                  className="w-full bg-transparent border border-[#232323] px-4 py-3 text-white text-sm placeholder:text-[#6d6d6d] outline-none focus:border-[#d6c0a0] transition"
                />
                <button
                  type="submit"
                  className="w-full bg-[#d6c0a0] text-black text-[11px] uppercase tracking-[2px] py-3 transition hover:bg-[#c7ae89]"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {socials.map((socials) => (
                <a
                  key={socials.name}
                  href={socials.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#1f1f1f] bg-[#0b0b0b] px-4 py-4 flex items-center justify-between transition-all duration-300 hover:border-[#d6c0a0]"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={socials.icon}
                      alt={socials.name}
                      width={16}
                      height={16}
                    />

                    <span className="text-[11px] uppercase tracking-[2px] text-[#bba789]">
                      {socials.name}
                    </span>
                  </div>
                  <span className="text-[#bba789] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#d6c0a0]">
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
