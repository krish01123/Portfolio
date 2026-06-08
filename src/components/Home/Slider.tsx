export default function Slider() {
  const itmes = Array(12).fill("LET'S TALK");

  return (
    <section className="bg-[#4c4038] border-y border-[#6b5b51] overflow-hidden">
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {[...itmes, ...itmes].map((text, index) => (
            <div
              key={index}
              className="flex items-center shrink-0 px-4 sm:px-6 md:px-8"
            >
              <span className="mx-3 sm:mx-4 text-[#d6c6b8">+++</span>
              <span className="text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.25em] text-[d6c6b8] uppercase">
                {text}
              </span>
              <span className="mx-3 sm:mx-4 text-[#d6c6b8">+++</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
