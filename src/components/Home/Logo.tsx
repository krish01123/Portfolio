import Image from "next/image";

export default function Logo() {
  const logos: string[] = [
    "/logo/logo1.svg",
    "/logo/logo2.svg",
    "/logo/logo3.svg",
    "/logo/logo4.svg",
    "/logo/logo5.svg",
    "/logo/logo6.svg",
  ];

  return (
    <section className="bg-black py-15 px-4">
      <div className="w-full bg-black mt-10 sm:mt-14 md:mt-20 lg:mt-24 overflow-hidden">
        <div className="logo-track">
          <div className="logo-group">
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                width={90}
                height={40}
                className="logo-item"
              />
            ))}
          </div>

          <div className="logo-group">
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={`second-${index}`}
                src={logo}
                alt={`Logo ${index + 1}`}
                width={90}
                height={40}
                className="logo-item"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
