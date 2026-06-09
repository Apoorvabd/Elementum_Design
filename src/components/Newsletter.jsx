import Box_violet from '../curves/Box_violet';
export default function Newsletter() {
  return (
    <section className="relative bg-[#DDEBDD] py-24 overflow-hidden">

      {/* Purple Shape */}
      {/* <div
        className="
        hidden md:block
        absolute
        right-8
        top-20
        w-20
        h-36
        bg-[#8B4CF3]
        rounded-t-full
        rounded-bl-full
        rotate-12
        "
      /> */}
      <Box_violet
  className="absolute right-80 top-52 rotate-[120deg] z-0" width={160} height={80} 
/>

      {/* Red Curves */}
      <div className="hidden md:block absolute left-[38%] top-0">
        <svg width="80" height="50" viewBox="0 0 80 50">
          <path
            d="M55 0C55 18 18 18 18 45"
            stroke="#FF7A7A"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M75 0C75 18 38 18 38 45"
            stroke="#FF7A7A"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2
          className="
          text-5xl
          md:text-7xl
          font-light
          leading-none
          text-black gerbil-font
          "
        >
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p className="mt-4 text-lg text-gray-700">
          To make your stay special and even more memorable
        </p>

        <button
          className="
          mt-8
          bg-black
          text-white
          px-8
          py-3
          rounded-full
          text-sm
          transition-all
          duration-300
          hover:scale-105
          "
        >
          Subscribe Now
        </button>
      </div>
    </section>
  );
}