import { ArrowUpRight } from "lucide-react";

export default function Service() {
  const services = [
    {
      number: "01",
      title: "Web Design",
      description:
        "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
      link: "ABOUT WEB DESIGN",
    },
    {
      number: "02",
      title: "Web Development",
      description:
        "Robust and scalable web development solutions that bring your ideas to life with clean code and modern technologies.",
      link: "ABOUT WEB DEVELOPMENT",
    },
    {
      number: "03",
      title: "UI/UX Design",
      description:
        "Intuitive and engaging UI/UX designs that enhance user satisfaction and drive conversions by focusing on user needs.",
      link: "ABOUT UI/UX DESIGN",
    },
  ];

  return (
    <section className="bg-black py-15 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {services.map((service) => (
            <div
              key={service.number}
              className="min-w-[280px] sm:min-w-[320px] md:min-[350px] snap-center border border-[#2A2A2A] bg-[#111111] p-8 transition-all duration-300 hover:border-[#DAC5A7] lg:min-2-0"
            >
              <span className="text-xs text-[#6B686B]">{service.number}</span>
              <h3 className="mt-4 text-xl font-medium text-[#DAC5A7]">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#8A8A8A]">
                {service.description}
              </p>
              <button className="mt-8 flex itmes-center gap-3 text-xs tracking-widest text-[#DAC5A7] uppercase">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#3A3A3A]">
                  <ArrowUpRight size={12} />
                </span>
                {service.link}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
