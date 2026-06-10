import Box_violet from "../curves/Box_violet";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-[#DDEBDD] py-16 sm:py-20 lg:py-24">
      <Box_violet
        className="absolute right-[6%] top-[54%] z-0 h-20 w-10 rotate-[220deg] sm:right-[12%] sm:top-[46%] sm:h-24 sm:w-12 lg:right-[22%]"
      />

      <div className="pointer-events-none absolute left-[38%] top-0 hidden md:block">
        <svg width="80" height="50" viewBox="0 0 80 50" aria-hidden="true">
          <path d="M55 0C55 18 18 18 18 45" stroke="#FF7A7A" strokeWidth="2" fill="none" />
          <path d="M75 0C75 18 38 18 38 45" stroke="#FF7A7A" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
        <h2 className="gerbil-font text-4xl font-light leading-none text-black sm:text-5xl md:text-7xl">
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base text-gray-700 sm:text-lg">
          To make your stay special and even more memorable
        </p>

        <button className="mt-8 rounded-full bg-black px-8 py-3 text-sm text-white transition-all duration-300 hover:scale-105">
          Subscribe Now
        </button>
      </div>
    </section>
  );
}
