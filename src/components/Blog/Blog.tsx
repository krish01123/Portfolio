import BlogCard from "./BlogCard";
import { blogs } from "@/data/blogs";

export default function Blog() {
  return (
    <section className="bg-black min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-2-2xl mx-auto">
          <h2 className="text-[#d4a574] text-5xl md:text-6xl font-light">
            Blog
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#6f6f6f] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            enim fugiat magni dolor deserunt rerum.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
