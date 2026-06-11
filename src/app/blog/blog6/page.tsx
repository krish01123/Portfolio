"use client";

import { blogs } from "@/data/blogs";
import Navbar from "@/components/Home/Navbar";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import BlogCard from "@/components/Blog/BlogCard";
import Slider from "@/components/Home/Slider";
import Footer from "@/components/Home/Footer";
import { useRouter } from "next/navigation";

export default function Blog1() {
  const relatedBlogs = blogs.filter((blog) => blog.id !== 6);
  const router = useRouter();
  return (
    <>
      <Navbar />
      <section className="bg-black text-white min-h-screen py-12 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="mt-10 mx-auto flex max-w-5xl flex-col items-center text-center">
            <h1 className="max-w-4xl font-extralight text-[#C9B08A] leading-[1.05] tracking-[-0.03em] text-[38px] xs:text-[44px] sm:text-[52px] md:text-[64px] lg:text-[78px]">
              The art of SEO writing: How to write content that ranks on Google
            </h1>
            <p className="mt-5 max-w-[620px] text-[#6F6F6F] leading-relaxed text-[12px] sm:text-[13px] md:text-[14px]">
              Optimize your website with expert tips on writing content that
              ranks high on Google.
            </p>

            <button
              onClick={() =>
                document.getElementById("blog")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#8A8A8A] transition hover:text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#242424]">
                <ArrowDown size={16} />
              </span>
              Read More
            </button>
          </div>

          <div className="mx-auto mt-14 max-w-6xl">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  label: "Date",
                  value: "23rd Aug 2023",
                },
                {
                  label: "Category",
                  value: "Web Design",
                },
                {
                  label: "Reading Time",
                  value: "5 Min",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border border-[#1A1A1A] bg-gradient-to-r from-[#111111] via-[#141414] to-[#111111] px-5 py-5 md:px-7 md:py-6"
                >
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#646464]">
                    {item.label}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.12em] text-[#B8B8B8]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-3 max-w-6xl">
            <div className="relative h-[220px] overflow-hidden border border-[#1A1A1A] sm:h-[320px] md:h-[450px] lg:h-[620px]">
              <Image
                src="/blog/Blog6.png"
                alt="Blog6"
                fill
                priority
                className=" object-cover"
              />
            </div>
          </div>

          <div id="blog" className="mx-auto mt-20 max-w-5xl">
            <div className="space-y-16">
              <div>
                <h2 className="text-[34px] font-extralight text-[#C9B08A]">
                  Elit ullamcorper dignissim
                </h2>
                <p className="mt-6 text-[14px] leading-[2] text-[#6F6F6F]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Porro non, eligendi dolorem odit autem error pariatur veniam,
                  repellendus placeat doloribus obcaecati ratione nemo id atque
                  voluptatem culpa! Dolore laborum cum ea! Ad inventore dolore
                  hic esse debitis blanditiis exercitationem dignissimos.
                </p>
              </div>

              <div>
                <h3 className="text-[28px] font-extralight text-[#C9B08A]">
                  Hendrerit dolor magna
                </h3>
                <p className="mt-5 text-[14px] leading-[2] text-[#6F6F6F]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                  quam molestiae distinctio, ducimus eveniet magni. Accusantium
                  ex cupiditate deserunt corrupti exercitationem illo ullam id,
                  nemo suscipit. Molestiae, debitis voluptatem. Placeat quisquam
                  aut provident dignissimos libero recusandae, est porro unde
                  minima?
                </p>
              </div>

              <div>
                <h3 className="text-[28px] font-extralight text-[#C9B08A]">
                  Hendrerit dolor magna
                </h3>
                <p className="mt-5 text-[14px] leading-[2] text-[#6F6F6F]">
                  Tristique sollicitudin nibh sit amet commodo. Sit amet justo
                  donec enim diam vulputate ut pharetra. Quis imperdiet massa
                  tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa
                  vitae tortor condimentum lacinia quis vel. Hendrerit dolor
                  magna eget est lorem ipsum dolor. Mollis aliquam ut porttitor
                  leo a diam sollicitudin tempor id. Suspendisse faucibus
                  interdum posuere.
                </p>
              </div>

              <div className="border border-[#1A1A1A] bg-gradient-to-br from-[#111111] via-[#131313] to-[#0D0D0D] p-8 md:p-12">
                <h3 className="text-[32px] font-extralight text-[#C9B08A]">
                  Conclusion
                </h3>
                <p className="mt-5 max-w-3xl text-[14px] leading-[2] text-[#6F6F6F]">
                  Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula
                  ullamcorper. Massa vitae tortor condimentum lacinia quis vel.
                  Hendrerit dolor magna eget est lorem ipsum dolor. Mollis
                  aliquam ut porttitor leo a diam sollicitudin tempor id.
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/about.png"
                      alt="Author"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[15px] text-white">
                      Trafalgar D. Water Law
                    </h4>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#6F6F6F]">
                      Framer Expert
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  name: "Instagram",
                  icon: "/icons/Icon1.svg",
                  Link: "https://www.instagram.com/mhj_cris/",
                },
                {
                  name: "Facebook",
                  icon: "/icons/Icon2.svg",
                  Link: "https://www.facebook.com/kris.mhj",
                },
                {
                  name: "Thread",
                  icon: "/icons/Icon3.svg",
                  Link: "https://www.threads.com/@mhj_cris",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-[#1A1A1A] bg-gradient-to-r from-[#111111] via-[#141414] to-[#111111] px-5 py-4 transition hover:border-[#2A2A2A]"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={16}
                      height={16}
                    />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#A0A0A0]">
                      {social.name}
                    </span>
                  </div>

                  <span className="text-[#8A8A8A]"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Related News */}
        <div className="mx-auto mt-32 max-w-6xl">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-[42px] md:text-[56px] font-extralight text-white">
              Related <span className="italic text-[#C9B08A]">News</span>
            </h2>

            <div className="flex items-center gap-10">
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    document.getElementById("related-scroll")?.scrollBy({
                      left: -350,
                      behavior: "smooth",
                    })
                  }
                  className="group flex h-11 w-11 items-center rounded-full justify-center border border-[#2A2A2A] bg-[#0B0B0B] transition-all duration-300 hover:border-[#DAC5A7] hover:bg-[#DAC5A7]"
                >
                  <ArrowLeft
                    size={18}
                    className="text-[#DAC5A7] transition-colors duration-300 group-hover:text-black"
                  />
                </button>

                <button
                  onClick={() =>
                    document.getElementById("related-scroll")?.scrollBy({
                      left: 350,
                      behavior: "smooth",
                    })
                  }
                  className="group flex h-11 w-11 items-center rounded-full justify-center border border-[#2A2A2A] bg-[#0B0B0B] transition-all duration-300 hover:border-[#DAC5A7] hover:bg-[#DAC5A7]"
                >
                  <ArrowRight
                    size={18}
                    className="text-[#DAC5A7] transition-colors duration-300 group-hover:text-black"
                  />
                </button>
              </div>
              <div className="h-6 w-px bg-[#2A2A2A]" />

              <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25] text-[#DAC5A7] transition hover:text-white">
                See All <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          <div
            id="related-scroll"
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          >
            {relatedBlogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => router.push(`/blog/blog${blog.id}`)}
                className="min-w-[300px] md:min-w-[380px] snap-start"
              >
                <BlogCard
                  href={blog.href}
                  image={blog.image}
                  date={blog.date}
                  title={blog.title}
                  description={blog.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Slider />
      <Footer />
    </>
  );
}
