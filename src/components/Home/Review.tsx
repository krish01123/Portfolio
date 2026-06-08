import Image from "next/image";

const review = [
  {
    name: "Ram Parsad Devokta",
    role: "CEO, Company",
    company: "Google",
    title: "Amazing Results with Krish Premium Web Design Services.",
    review:
      "Krish is a fresher web designer who is trying to create a stunning website for my business. He was attentive to my needs and provided timely and professional support throughout the entire process.",
    image: "/avatar/avatar1.png",
  },
  {
    name: "John Smith",
    role: "Founder",
    company: "Visionary Ventures",
    title: "Amazing Results with Krish Web Design Services.",
    review:
      "Krish is a web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process.",
    image: "/avatar/avatar2.png",
  },
  {
    name: "David Kim",
    role: "Founder",
    company: "Nest Nepal",
    title: "Nice Webflow and Customer Services: Excellent Work, Great Results.",
    review:
      "Working with Krish on my website redesign was fantastic. His expertise in Webflow helped us achieve outstanding results.",
    image: "/avatar/avatar3.png",
  },
  {
    name: "Karen Lee",
    role: "Marketing Manager",
    company: "Bright Digital",
    title: "Professional, Collaborative Web Design Experience with Krish.",
    review:
      "The process was enjoyable from start to finish. Krish listened carefully to our requirements and delivered exactly what we envisioned.",
    image: "/avatar/avatar4.png",
  },
  {
    name: "Andrew Thompson",
    role: "Business Owner",
    company: "Thompson Consulting",
    title: "Good in Web Design: Second to None.",
    review:
      "From planning to launch, everything was handled professionally. The quality of work exceeded expectations.",
    image: "/avatar/avatar5.png",
  },
  {
    name: "Ryan Chen",
    role: "Co-Founder",
    company: "ScaleUp Systems",
    title: "High-Quality Web Design: Exceptional Attention to Detail.",
    review:
      "Every aspect of the project reflected professionalism and precision. Highly recommended for anyone seeking design work.",
    image: "/avatar/avatar6.png",
  },
];

export default function Review() {
  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 lg:py-28 text-white overflow-hidden">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light">
            What my
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic font-serif text-[#C7A16A]">
            clients say
          </h3>
          <p className="mt-4 text-sm md:text-base text-zinc-400 max-w-2xl mx-auto">
            See what my clients have to say about working with me and the result
            I helped them achieve.
          </p>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="review-track flex gap-6 w-max">
            {[...review, ...review].map((item, index) => (
              <div
                key={index}
                className="relative w-[380px] md:w-[420px] flex-shrink-0 rounded-sm border border-[#242424] bg-gradient-to-br from-[#111111] via-[#161616] to-[#0d0d0d] p-6 md:p-8 hover:border-[#C7A16A]/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Quote */}
                <div className="mb-6 text-[#C7A16A]">
                  <svg
                    width="22"
                    height="22"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17h4l2-4V7H7v6h3l-3 4zm10 0h4l2-4V7h-6v6h3l-3 4z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-medium leading-snug text-white">
                  {item.title}
                </h3>

                {/* Review */}
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {item.review}
                </p>

                {/* User */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-zinc-400">{item.role}</p>
                    <p className="text-xs text-[#C7A16A] mt-0.5">
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,161,106,0.12),transparent_40%)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}