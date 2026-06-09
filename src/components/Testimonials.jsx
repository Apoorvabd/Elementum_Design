import {Quote} from "lucide-react";
import Yellow from '../curves/Curves.yellow';

import avatar1 from "../assets/testimonials/avatar1.jpg";
import avatar2 from "../assets/testimonials/avatar2.png";
import avatar3 from "../assets/testimonials/avatar3.jpg";
import avatar4 from "../assets/testimonials/avatar4.jpg";
import avatar5 from "../assets/testimonials/avatar5.jpg";
import avatar6 from "../assets/testimonials/avatar6.jpg";
import avatar7 from "../assets/testimonials/avatar7.jpg";
import avatar8 from "../assets/testimonials/avatar8.png";

export default function Testimonials() {
  return (
    <section className="  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative min-h-[450px]  rounded-[32px]">

        {/* ===== Heading ===== */}
        <div className="text-center">
          <div className="relative inline-block">
            {/* Green highlight */}
            <div className="absolute left-0 top-2 w-28 h-12 mb-1 bg-[#DDEBDB] rounded-full -z-10" />

            <h2 className="text-4xl md:text-5xl font-light leading-tight text-black">
              What our customer
              <br />
              says About Us
            </h2>
             <Yellow
  width={380}
  height={18}
  className="absolute top-[78px] left-[-80px] -z-10 pl-60"
/>   

            {/* Yellow underline */}
            
          </div>
        </div>

        {/* ===== Floating Avatars ===== */}

        {/* top left medium */}
        <img
          src={avatar1}
          alt="customer"
          className="hidden md:block absolute left-16 top-0 w-20 h-20rounded-full object-cover"
        />

        {/* left center big */}
        <img
          src={avatar3}
          alt="customer"
          className="hidden md:block absolute left-20 top-52 w-28 h-28 rounded-full object-cover"
        />

        {/* left bottom small */}
        <img
          src={avatar2}
          alt="customer"
          className="hidden md:block absolute left-0 top-[130px] w-12 h-12 rounded-full object-cover"
        />

        {/* left bottom medium */}
        <img
          src={avatar4}
          alt="customer"
          className="hidden md:block absolute left-0 top-[280px] w-20 h-20 rounded-full object-cover"
        />

        {/* top right medium */}
        <img
          src={avatar5}
          alt="customer"
          className="hidden md:block absolute right-20 top-0 w-20 h-20 rounded-full object-cover"
        />

        {/* top right small */}
        <img
          src={avatar6}
          alt="customer"
          className="hidden md:block absolute right-52 top-12 w-16 h-16 rounded-full object-cover"
        />

        {/* right center small */}
        <img
          src={avatar7}
          alt="customer"
          className="hidden md:block absolute right-36 top-36 w-12 h-12 rounded-full object-cover"
        />

        {/* right big */}
        <img
          src={avatar8}
          alt="customer"
          className="hidden md:block absolute  right-0 top-52 w-44 h-44 rounded-full object-cover"
        />

        {/* ===== Testimonial Card ===== */}

        <div className="flex justify-center mt-16">
          <div className="relative bg-[#EEF2EE] rounded-[32px] max-w-[650px] px-10 py-10">

            {/* Quote Top */}
            <span className="absolute left-6 top-4 text-7xl text-[#CFCFCF] leading-none">
              ❝
            </span>

            <p className="text-center text-[#333] text-base leading-8 px-6">
              Elementum delivered the site within the timeline as they
              requested. In the end, the client found a 50% increase in
              traffic within days since its launch. They also had an
              impressive ability to use technologies that the company
              hasn’t used, which have also proved to be easy to use
              and reliable.
            </p>

            {/* Quote Bottom */}
            <span className="absolute right-6 bottom-0 text-7xl text-[#CFCFCF] leading-none">
              ❞
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}