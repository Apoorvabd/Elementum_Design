import Yellow from "../curves/Curves.yellow";
import LongArrow from "../curves/LongArrow";
import SectionContainer from "./SectionContainer";

const Progress = ({ image }) => {
  return (
    <SectionContainer className="py-16 sm:py-20 lg:py-24">
      <svg
        className="pointer-events-none absolute left-0 top-0 h-24 w-full sm:h-32 lg:h-44"
        viewBox="0 0 1440 180"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M350 120C500 20 700 220 900 80C1050 -20 1180 40 1440 0"
          stroke="#8F8F8F"
          strokeWidth="5"
          fill="none"
          opacity="0.25"
          transform="translate(3,8)"
          strokeLinecap="round"
        />
        <path
          d="M350 120C500 20 700 220 900 80C1050 -20 1180 40 1440 0"
          stroke="#FF6B6B"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div className="grid items-center gap-12 pt-8 lg:grid-cols-2 lg:gap-20 lg:pt-12">
        <div className="relative flex justify-center">
          <div className="absolute left-[8%] top-[8%] hidden h-0 w-0 -rotate-8 border-b-[72px] border-l-[42px] border-r-[42px] border-b-[#FF6B6B] border-l-transparent border-r-transparent sm:block lg:border-b-[95px] lg:border-l-[55px] lg:border-r-[55px]" />
          <div className="absolute bottom-[4%] right-[8%] z-20 h-0 w-0 border-b-[86px] border-l-[48px] border-r-[48px] border-b-[#FF6B6B] border-l-transparent border-r-transparent sm:border-b-[110px] sm:border-l-[60px] sm:border-r-[60px]" />

          <img
            src={image}
            alt=""
            className="relative z-10 aspect-square w-full max-w-xs rounded-full object-cover sm:max-w-sm lg:max-w-md"
          />
        </div>

        <div className="relative z-10 text-center lg:text-left">
          <h2 className="gerbil-font text-4xl font-light leading-none sm:text-5xl lg:text-5xl">
            <span className="inline-block rounded-full bg-[#DDE8D4] px-3">
              See
            </span>{" "}
            how we can
            <br />
            help you{" "}
            <span className="relative inline-block">
              progress
              <Yellow
                className="absolute left-10 top-[74%] -z-10 h-[0.49em] 
                w-[9.3em]"
              />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg leading-7 text-gray-900 sm:mt-8 lg:mx-0">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design,
            digital, comms and social research.
          </p>

          <button className="group mx-auto mt-8 flex items-center gap-4 lg:mx-0 lg:mt-10">
            <span>Read more</span>
            <LongArrow width={80} height={20} viewBox="0 0 90 24" />
          </button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Progress;
