import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";
import Box_violet from "../curves/Box_violet";
import Curves from "../curves/Curves.side";
import Yellow from "../curves/Curves.yellow";
import SectionContainer from "./SectionContainer";

const people = [
  { img: p9, position: "lg:left-[0%] lg:top-[60%]" },
  { img: p8, position: "lg:left-[10%] lg:top-[32%]" },
  { img: p1, position: "lg:left-[27%] lg:top-[6%]" },
  { img: p2, position: "lg:left-[34%] lg:top-[75%]" },
  { img: p3, position: "lg:left-[50%] lg:top-[24%]" },
  { img: p4, position: "lg:left-[60%] lg:top-[58%]" },
  { img: p5, position: "lg:left-[80%] lg:top-[8%]" },
  { img: p6, position: "lg:left-[110%] lg:top-[55%]" },
];

const Hero = () => {
  return (
    <SectionContainer className="pt-12 pb-16 sm:pt-16 lg:pt-20 lg:pb-20">
      <Curves />

      <div className="pointer-events-none absolute left-[8%] top-[16%] h-28 w-28 rounded-full bg-pink-900 opacity-30 blur-3xl sm:h-40 sm:w-40 lg:h-52 lg:w-52" />
      <div className="pointer-events-none absolute bottom-[18%] right-[8%] h-28 w-28 rounded-full bg-green-200 opacity-30 blur-3xl sm:h-40 sm:w-40 lg:h-52 lg:w-52" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <Box_violet className="absolute right-0 top-[58%] z-0 hidden h-20 w-10 -translate-y-1/2 rotate-[28deg] md:block lg:right-[2%] lg:h-24 lg:w-12 xl:right-[0%] xl:left-[110%]" />

        <h1 className="gerbil-font mx-auto max-w-6xl text-[1.35rem] leading-[0.98] min-[360px]:text-2xl min-[430px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="relative inline-block whitespace-nowrap">
            The thinkers
            <Yellow
              className="absolute left-64 top-[76%] -z-10 hidden 
              h-[0.39em] w-[5.9em] sm:block"
            />
          </span>
          <span className="whitespace-nowrap"> and</span>
          <br />
          <span className="inline-flex items-baseline justify-center whitespace-nowrap">
            doers were ch
            <span className="inline-block rounded-full bg-pink-200 px-2 leading-[0.9] sm:px-4 sm:leading-[0.85]">
              anging
            </span>
          </span>
          <br />
          <span className="whitespace-nowrap">the </span>
          <span className="inline-block rounded-full bg-green-100 px-2 leading-[0.9] sm:px-4 sm:leading-[0.85]">
            status
          </span>{" "}
          <span className="whitespace-nowrap">Quo with</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-7 text-gray-500 sm:mt-8 sm:text-lg">
          We are a team of strategists, designers, communicators, researchers.
          Together, we believe progress only happens when you refuse to play
          things safe.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-10 grid max-w-xl grid-cols-4 gap-3 sm:mt-12 sm:gap-4 lg:h-80 lg:max-w-none lg:block">
        {people.map((person, index) => (
          <img
            key={person.img}
            src={person.img}
            alt=""
            className={`aspect-square w-full rounded-full border-4 border-white object-cover shadow-lg sm:mx-auto sm:max-w-28 lg:absolute lg:w-44 lg:max-w-none ${person.position} ${
              index === 7 ? "lg:-translate-x-full" : ""
            }`}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Hero;
