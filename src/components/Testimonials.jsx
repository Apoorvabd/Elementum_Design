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
  { src: avatar1, className: "left-[4%] top-[10%] h-24 w-24" },
  { src: avatar2, className: "left-[0%] top-[36%] h-14 w-14" },
  { src: avatar3, className: "left-[7%] top-[40%] h-44 w-44" },
  { src: avatar4, className: "left-[2%] top-[70%] h-24 w-24" },
  { src: avatar5, className: "right-[2%] top-[5%] h-32 w-32" },
  { src: avatar6, className: "right-[14%] top-[16%] h-20 w-20" },
  { src: avatar7, className: "right-[12%] top-[36%] h-24 w-24" },
  { src: avatar8, className: "right-[0%] top-[52%] h-56 w-56 lg:h-64 lg:w-64" },
];

export default function Testimonials() {
  return (
    <SectionContainer className="py-24 sm:py-32 lg:py-40" innerClassName="relative min-h-[600px]">
      <div className="text-center">
        <div className="relative inline-block">
          <div className="absolute left-0 top-0 -z-10 h-12 w-28 rounded-full bg-[#c3d3c0] sm:h-12 sm:w-36" />

          <h2 className="text-4xl font-light gerbil-font leading-tight text-black sm:text-5xl">
            What our customer
            <br />
            says About Us
          </h2>

          <Yellow
            strokeWidth={7}
            className="absolute left-[38%] top-[90%] -z-10 h-8 w-[64%]"
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
        <div className="relative w-full max-w-2xl rounded-[32px] bg-[#D7EEDD4D] px-6 py-9 sm:px-10 sm:py-10">
          <span className="absolute left-4 top-2 text-6xl leading-none text-[#CFCFCF] sm:left-6 sm:top-4 sm:text-7xl">
            &ldquo;
          </span>

          <p className="px-2 text-center text-base gerbil-font leading-7 text-[#535453] sm:px-6">
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
