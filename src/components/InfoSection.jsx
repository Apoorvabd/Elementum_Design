import Yellow from "../curves/Curves.yellow";
import LongArrow from "../curves/LongArrow";
import SectionContainer from "./SectionContainer";

const InfoSection = ({ title, description, image, reverse = false }) => {
  const contentOrder = reverse ? "lg:order-2" : "lg:order-1";
  const imageOrder = reverse ? "lg:order-1" : "lg:order-2";

  return (
    <SectionContainer className="py-16 sm:py-20 lg:py-24">
      <div
        className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className={`relative z-10 text-center lg:text-left ${contentOrder}`}>
          <h2 className="gerbil-font mx-auto max-w-2xl text-4xl leading-tight sm:text-5xl lg:mx-0 lg:text-6xl">
            <span className="relative inline-block">
              Tomorrow should
              <Yellow
                strokeWidth={7}
                className="absolute left-0 top-[72%] -z-10 h-[0.34em] w-full"
              />
            </span>{" "}
            be better than{" "}
            <span className="inline-block rounded-full bg-green-100 px-3 leading-[0.9]">
              Today
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-gray-700 sm:mt-8 sm:text-xl lg:mx-0">
            {description}
          </p>

          <button className="group mx-auto mt-8 flex items-center gap-4 lg:mx-0 lg:mt-10">
            <span>Read more</span>
            <LongArrow width={80} height={20} viewBox="0 0 90 24" />
          </button>
        </div>

        <div className={`relative flex justify-center ${imageOrder}`}>
          <div className="absolute right-[18%] top-[10%] z-0 h-16 w-16 rotate-12 bg-[#FF6B6B] sm:h-24 sm:w-24 lg:h-28 lg:w-28" />
          <div
            className="absolute left-[18%] top-[18%] h-48 w-48 rounded-full opacity-70 blur-3xl sm:h-72 sm:w-72"
            style={{
              background:
                "radial-gradient(circle, rgba(255,120,120,0.35) 0%, rgba(255,120,120,0.35) 40%, transparent 95%)",
            }}
          />

          <img
            src={image}
            alt={title}
            className="relative z-10 aspect-square w-full max-w-xs rounded-full object-cover sm:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default InfoSection;
