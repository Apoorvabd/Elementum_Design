import Yellow from "../curves/Curves.yellow";
import LongArrow from "../curves/LongArrow";
import { offers } from "../data/offers";

const OfferSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 mb-10">

        {/* Heading + Curve */}
        <div className="flex items-start justify-between mb-20">
          
          <h1 className="text-4xl md:text-7xl gerbil-font leading-[0.86]">
            What we{" "}
            <span className="bg-[#DDE8D4] px-3 rounded-full">
              can
            </span>
            <br />
            offer you!
          </h1>
          <Yellow  width={440}
  height={19}
  strokeWidth={7}
  className="relative top-[112px] -left-[760px] -z-10 "/>

          {/* Curve */}
            <div className="absolute left-[50%] lg:block top-[2200px] w-[700px] -mt-8
             ">
      <svg
  viewBox="0 0 420 120"
  className="w-full h-auto"
>
{/* Shadow */}
<path
  d="
    M 0 145
    C 8 215, 5 85, 60 38
    C 100 10, 160 0, 210 30
    C 260 50, 310 70, 350 35
    C 380 10, 400 -20, 420 -60
  "
  fill="none"
  stroke="#A8A8A8"
  strokeWidth="4"
  strokeLinecap="round"
  transform="translate(2,5)"
  opacity="0.4"
/>
  {/* Main Curve */}
  <path
    d="
      M 0 145
      C 8 215, 5 85, 60 38
      C 100 10, 160 0, 210 30
      C 260 50, 310 70, 350 35
      C 380 10, 400 -20, 420 -60
    "
    fill="none"
    stroke="#FF6B6B"
    strokeWidth="2.5"
    strokeLinecap="round"
  />
</svg>
          </div>

        </div>

        {/* Rows */}
        <div className="border-t border-gray-300">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="
                grid
                grid-cols-[220px_1fr_auto]
                items-center
                gap-8
                py-8
                border-b
                border-gray-300
                cursor-pointer
                group
              "
            >
              {/* Left Text */}
              <p className="text-lg text-gray-800 max-w-[190px]">
                {offer.smallText}
              </p>

              {/* Title + Image */}
              <div className="flex items-center gap-4">
                <h3 className="text-3xl md:text-5xl font-medium gerbil-font">
                  {offer.title}
                </h3>

                {offer.image && (
                  <img
                    src={offer.image}
                    alt="fjfj"
                    className="w-12 h-12 object-cover rounded-full border-4 border-zinc-900"
                  />
                )}
              </div>

              {/* Arrow */}
              <LongArrow/>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OfferSection;