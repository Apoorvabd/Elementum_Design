import { offers } from "../data/offers";

const OfferSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading + Curve */}
        <div className="flex items-start justify-between mb-20">
          
          <h2 className="text-4xl md:text-6xl leading-none">
            What we{" "}
            <span className="bg-[#DDE8D4] px-3 rounded-full">
              can
            </span>
            <br />
            offer you!
          </h2>

          {/* Curve */}
            <div className="hidden lg:block w-[600px] -mt-8">
              <svg
              viewBox="0 0 420 120"
              className="w-full h-auto"
            >
              <path
                d="
                  M0 100
                  C15 100, 20 25, 75 20
                  C140 18, 210 38, 285 45
                  C345 50, 390 55, 420 20
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
              <p className="text-sm text-gray-600 max-w-[220px]">
                {offer.smallText}
              </p>

              {/* Title + Image */}
              <div className="flex items-center gap-4">
                <h3 className="text-3xl md:text-5xl font-medium">
                  {offer.title}
                </h3>

                {offer.image && (
                  <img
                    src={offer.image}
                    alt=""
                    className="w-12 h-12 object-cover rounded-full"
                  />
                )}
              </div>

              {/* Arrow */}
              <span
                className="
                  text-4xl md:text-5xl
                  text-gray-500
                  transition-all
                  duration-300
                  group-hover:translate-x-2
                "
              >
                →
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OfferSection;