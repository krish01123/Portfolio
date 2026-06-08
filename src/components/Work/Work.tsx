import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Space",
    category: "Web Design",
    image: "/project1.png",
  },
  {
    title: "Nova",
    category: "Web Design",
    image: "/project2.png",
  },
  {
    title: "Sonic",
    category: "Web Design",
    image: "/project3.png",
  },
  {
    title: "Solar",
    category: "Web Design",
    image: "/project4.png",
  },
];

export default function SelectedWork() {
  return (
    <section className="bg-black text-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 xl:px-16 2xl:px-24 3xl:px-40 3xl:py-32">
      <div className="mt-4 flex flex-col items-center text-center mb-12 md:mb-16 lg:mb-20">
        <h2 className="font-light text-[#d6c3a5] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
          Work
        </h2>

        <p className="mt-4 max-w-xl text-sm md:text-base text-[#8f8473] leading-relaxed">
          My latest web design projects and see how we can help bring your ideas
          to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 2xl:gap-8 3xl:gap10 ">
        {projects.map((project) => (
          <article
            key={project.title}
            className="relative group overflow-hidden rounded-lg bg-zinc-900 aspect-[4/5] sm:aspect-[16/12] md:aspect-[16/10] lg:aspect-[16/10] 2xl:aspect-[16/9]"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover transition-all duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-trasnparent" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/10 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 3xl:w-20 3xl:h-20">
                <ArrowUpRight size={20} />
              </div>
            </div>

            <div className="absolute left-3 right-3 bottom-3 md:left-4 md:right-4 md:bottom-4 flex items-center justify-between px-3 py-2 md:px-4 md:py-3 backdrop-blur-md bg-white/10 border border-white/10">
              <h3 className="text-sm sm:text-base lg:text-lg 3xl:text-2xl">
                {project.title}
              </h3>
              <span className="uppercase tracking-wider text-[9px] sm:text-[10px] md:text-xs text-zinc-300">
                {project.category}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
