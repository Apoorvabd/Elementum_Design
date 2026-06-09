import Yellow from "../curves/Curves.yellow";
import LongArrow from "../curves/LongArrow";
import { offers } from "../data/offers";
import SectionContainer from "./SectionContainer";

const OfferSection = () => {
  return (
    <SectionContainer className="py-16 sm:py-20 lg:py-24">
      <div className="relative mb-12 sm:mb-16 lg:mb-20">
        <h2 className="gerbil-font relative z-10 text-4xl leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl">
          What we{" "}
          <span className="inline-block rounded-full bg-[#DDE8D4] px-3">
            can
          </span>
          <br />
          offer you!
        </h2>

        <Yellow
          strokeWidth={9}
          className="absolute left-0 top-[88%] -z-0 hidden h-6 w-64 sm:block sm:w-80 md:w-60 lg:max-w-md"
        />

        <div className="pointer-events-none absolute right-0 top-0 hidden w-[42%] max-w-2xl md:block">
          <svg viewBox="0 0 420 120" className="h-auto w-full" aria-hidden="true">
            <path
              d="M 0 145 C 8 215, 5 85, 60 38 C 100 10, 160 0, 210 30 C 260 50, 310 70, 350 35 C 380 10, 400 -20, 420 -60"
              fill="none"
              stroke="#A8A8A8"
              strokeWidth="4"
              strokeLinecap="round"
              transform="translate(2,5)"
              opacity="0.4"
            />
            <path
              d="M 0 145 C 8 215, 5 85, 60 38 C 100 10, 160 0, 210 30 C 260 50, 310 70, 350 35 C 380 10, 400 -20, 420 -60"
              fill="none"
              stroke="#FF6B6B"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="border-t border-gray-300">
        {offers.map((offer) => (
          <article
            key={offer.id}
            className="group grid gap-4 border-b border-gray-300 py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:items-center sm:gap-8 lg:grid-cols-[220px_1fr_auto] lg:py-8"
          >
            <p className="max-w-sm text-base text-gray-800 sm:text-lg lg:max-w-48">
              {offer.smallText}
            </p>

            <div className="flex min-w-0 items-center gap-4">
              <h3 className="gerbil-font min-w-0 text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
                {offer.title}
              </h3>

              {offer.image && (
                <img
                  src={offer.image}
                  alt=""
                  className="hidden aspect-square w-12 shrink-0 rounded-full border-4 border-zinc-900 object-cover sm:block"
                />
              )}
            </div>

            <LongArrow className="justify-self-start transition-transform group-hover:translate-x-2 sm:col-span-2 lg:col-span-1 lg:justify-self-end" />
          </article>
        ))}
      </div>
    </SectionContainer>
  );
};

export default OfferSection;
