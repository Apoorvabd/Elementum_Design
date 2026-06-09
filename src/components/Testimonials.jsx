import Yellow from "../curves/Curves.yellow";
import SectionContainer from "./SectionContainer";

import avatar1 from "../assets/testimonials/avatar1.jpg";
import avatar2 from "../assets/testimonials/avatar2.png";
import avatar3 from "../assets/testimonials/avatar3.jpg";
import avatar4 from "../assets/testimonials/avatar4.jpg";
import avatar5 from "../assets/testimonials/avatar5.jpg";
import avatar6 from "../assets/testimonials/avatar6.jpg";
import avatar7 from "../assets/testimonials/avatar7.jpg";
import avatar8 from "../assets/testimonials/avatar8.png";

const avatars = [
  { src: avatar1, className: "left-[8%] top-[2%] h-20 w-20" },
  { src: avatar2, className: "left-[2%] top-[32%] h-12 w-12" },
  { src: avatar3, className: "left-[10%] top-[52%] h-28 w-28" },
  { src: avatar4, className: "left-[2%] top-[72%] h-20 w-20" },
  { src: avatar5, className: "right-[10%] top-[2%] h-20 w-20" },
  { src: avatar6, className: "right-[25%] top-[14%] h-16 w-16" },
  { src: avatar7, className: "right-[18%] top-[38%] h-12 w-12" },
  { src: avatar8, className: "right-[2%] top-[58%] h-36 w-36 lg:h-44 lg:w-44" },
];

export default function Testimonials() {
  return (
    <SectionContainer className="py-16 sm:py-20 lg:py-24" innerClassName="relative min-h-[420px]">
      <div className="text-center">
        <div className="relative inline-block">
          <div className="absolute left-0 top-2 -z-10 h-10 w-24 rounded-full bg-[#DDEBDB] sm:h-12 sm:w-28" />

          <h2 className="text-4xl font-light leading-tight text-black sm:text-5xl">
            What our customer
            <br />
            says About Us
          </h2>

          <Yellow
            strokeWidth={7}
            className="absolute left-[18%] top-[78%] -z-10 h-5 w-[64%]"
          />
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-xs grid-cols-4 gap-3 sm:max-w-md md:hidden">
        {avatars.slice(0, 8).map((avatar) => (
          <img
            key={avatar.src}
            src={avatar.src}
            alt=""
            className="aspect-square w-full rounded-full object-cover"
          />
        ))}
      </div>

      {avatars.map((avatar) => (
        <img
          key={avatar.src}
          src={avatar.src}
          alt=""
          className={`absolute hidden rounded-full object-cover md:block ${avatar.className}`}
        />
      ))}

      <div className="relative z-10 mt-10 flex justify-center md:mt-16">
        <div className="relative w-full max-w-2xl rounded-[32px] bg-[#EEF2EE] px-6 py-9 sm:px-10 sm:py-10">
          <span className="absolute left-4 top-2 text-6xl leading-none text-[#CFCFCF] sm:left-6 sm:top-4 sm:text-7xl">
            &ldquo;
          </span>

          <p className="px-2 text-center text-base leading-8 text-[#333] sm:px-6">
            Elementum delivered the site within the timeline as they requested.
            In the end, the client found a 50% increase in traffic within days
            since its launch. They also had an impressive ability to use
            technologies that the company has not used, which have also proved
            to be easy to use and reliable.
          </p>

          <span className="absolute bottom-0 right-4 text-6xl leading-none text-[#CFCFCF] sm:right-6 sm:text-7xl">
            &rdquo;
          </span>
        </div>
      </div>
    </SectionContainer>
  );
}
