import Image from "next/image";

export default function Self() {
  return (
    <section className="relative min-h-screen overflow-hidden text-[#d6c2a1]">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Krish Maharjan"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/60" />

      <h1 className="absolute left-1/2 top-4 z-10 -translate-x-1/2 whitespace-nowrap font-serif font-light tracking-wide text-[#d6c2a1]/90 text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[11rem]">
        Krish Maharjan
      </h1>

      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1600px] items-end px-5 pb-12 sm:px-8 md:px-12 lg:px-20">
        <div className="grid w-full gap-10 md:grid-cols-2">
          <div className="max-w-md">
            <h2 className="text-xl font-light text-white sm:text-2xl md:text-3xl lg:text-4xl">
              A website that leaves
            </h2>

            <p className="text-2xl italic text-[#d6c2a1] sm:text-3xl md:text-4xl">
              a lasting impression!
            </p>
          </div>

          <div className="max-w-md md:ml-auto">
            <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
              Hi, I'm Krish Maharjan - a web designer, developer. I'm passionate
              about creating unique and effective solutions for my clients, and
              I bring a personal touch to every project. Let's work together to
              bring your vision to life!
            </p>

            <div className="mt-6 flex gap-3">
              {["Dr", "Be", "In", "Ig"].map((item) => (
                <button
                  key={item}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6c2a1]/30 text-xs text-[#d6c2a1] transition hover:border-[#d6c2a1]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
    </section>
  );
}
