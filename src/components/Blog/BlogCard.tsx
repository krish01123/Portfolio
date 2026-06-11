import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  href: string;
  image: string;
  date: string;
  title: string;
  description: string;
}

export default function BlogCard({
  href,
  image,
  date,
  title,
  description,
}: BlogCardProps) {
  return (
    <Link href={href}>
      <article className="group bg-[#111111] border border-[#1c1c1c] p-4 md:p-5 transition-all duration-300 hover:border-[#d4a574]/40 hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="w-full h-[180px] sm:h-[220px] md:h-[180px] object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="mt-4">
            <p className="text-[10px] tracking-wider uppercase text-[#7a7a7a]">
              {date}
            </p>
            <h3 className="mt-3 text-white text-lg leading-snug font-light">
              {title}
            </h3>
            <p className="mt-3 text-sm text-[#8f8f8f] leading-relaxed">
              {description}
            </p>

            <button className="mt-5 border border-[#4a4a4a] px-4 py-2 text-[10px] uppercase tracking-widest text-[#d4a574] transition hover:border-[#d4a574]">
              Read More
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}
