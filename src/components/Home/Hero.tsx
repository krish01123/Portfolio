import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-visible bg-black px-4">
      <div className="relative sm:-translate-y-16 md:-translate-y-10 lg:-translate-y-10 w-[260px] sm:w-[320px] md:w-[380px] lg:w-[450px] aspect-[4/5]">
        <Image
          src="/hero.jpg"
          alt="Portrait"
          fill
          className="object-cover object-top opacity-90"
          priority
        />
      </div>
      <div className="absolute left-1/2 top-[60%] w-full max-w-7xl -translate-x-1/2 px-4 text-center">
        <h1
          className="font-satoshi leading-none text-[#DAC5A7]"
          style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}
        >
          Web Designer
        </h1>
        <h2
          className="font-satoshi italic leading-none text-[#DAC5A7]"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
        >
          & Developer
        </h2>
        <p className="mx-auto mt-4 sm:mt-5 md:mt-6 max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-[#DAC5A780] px-4 sm:px-0">
          Web designer, developer,
          <br />
          Learning new technologies, and creating beautiful websites that are
          user-friendly and visually appealing.
        </p>
      </div>
    </section>
  );
}
