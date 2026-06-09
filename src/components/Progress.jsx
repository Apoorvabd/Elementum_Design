import Yellow from '../curves/Curves.yellow';
import LongArrow from "../curves/LongArrow"
const Progress = ({ image }) => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Top red curve */}
     <svg
  className="absolute top-0 left-0 w-full pointer-events-none"
  height="180"
  viewBox="0 0 1440 180"
  fill="none"
>
  {/* Shadow */}
  <path
    d="M350 120C500 20 700 220 900 80C1050 -20 1180 40 1440 0"
    stroke="#8F8F8F"
    strokeWidth="5"
    fill="none"
    opacity="0.25"
    transform="translate(3,8)"
    strokeLinecap="round"
  />

  {/* Main Curve */}
  <path
    d="M350 120C500 20 700 220 900 80C1050 -20 1180 40 1440 0"
    stroke="#FF6B6B"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
  />
</svg>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* LEFT IMAGE */}
          <div className="flex-1 relative flex justify-center">

            {/* Top triangle */}
            <div
              className="
                absolute
                left-10
                top-10
                w-0
                h-0
                border-l-[55px]
                border-r-[55px]
                border-b-[95px]
                border-l-transparent
                border-r-transparent
                border-b-[#FF6B6B]
                -rotate-8
              "
            />

            {/* Bottom triangle */}
            <div
              className="
                absolute
                bottom-2 
                right-10
                w-0
                h-0
                border-l-[65px]
                border-r-[65px]
                border-b-[120px]
                border-l-transparent
                border-r-transparent
                border-b-[#FF6B6B]
                z-20
              "
            />

            <img
              src={image}
              alt=""
              className="
                relative
                z-10
                w-[420px]
                h-[420px]
                object-cover
                rounded-full
              "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1">

            <h2 className="text-4xl md:text-5xl leading-none gerbil-font font-light z-10 p-3">

              <span className="bg-[#DDE8D4] px-3 rounded-full">
                See
              </span>{" "}
              how we can
              <br />
              help you{" "}

              <span className="relative inline-block">
                progress

                <Yellow
  width={550}
  height={24}
  className="absolute top-[35px] left-[-270px] -z-10 pl-60"
/>   
              </span>
            </h2>

            <p className="mt-8 text-gray-900 max-w-lg leading-7">
              We add a layer of fearless insights and action
              that allows change makers to accelerate their
              progress in areas such as brand, design,
              digital, comms and social research.
            </p>

            <button className="mt-10 flex items-center gap-4 group">
              <span>Read more</span>

              <LongArrow width="80"
    height="20"
    viewBox="0 0 90 24"
    fill="none"/> 
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Progress;