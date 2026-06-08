import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';
import p8 from '../assets/p8.jpg';
import p9 from '../assets/p9.jpg';

const people = [
  { img: p1, className: "left-0 top-[75%] " },

  { img: p2, className: "left-[10%] top-[55%]" },

  { img: p3, className: "left-[27%] top-[27%]" },

  { img: p4, className: "left-[37%] top-[98%]" },

  { img: p5, className: "left-[50%] top-[40%]" },

  { img: p6, className: "left-[60%] top-[75%]" },

  { img: p8, className: "left-[80%] top-[27%]" },

  { img: p9, className: "left-[94%] top-[71%]" },
];


const Hero = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6  pt-10 pb-20">

      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-52  bg-pink-900 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-10 right-20 w-52  bg-green-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10">

        <h1 className="text-center font-medium  gerbil-font leading-none text-5xl md:text-7xl">
          The{" "}
          <span className=" px-4 rounded-full">
            thinkers
          </span>{" "}
          and
          <br />

          doers were{" "}cha
          <span className="bg-pink-200 w-[30%] rounded-full border-20">
            <span className="relative z-10">
            <area shape="" coords="" href="" alt="" />
            nging
            </span>
          </span>
          <br />

          the{" "}
          <span className="bg-green-100 px-4 rounded-full">
            status
          </span>{" "}
          Quo with
        </h1>

        <p className="text-center text-gray-500 max-w-xl mx-auto mt-8">
          We are a team of strategists, designers,
          communicators, researchers. Together,
          we believe progress only happens when
          you refuse to play things safe.
        </p>

      </div>

<div className="relative max-w-8xl h-[250px]">
  {people.map((person, index) => (
    <img
      key={index}
      src={person.img}
      alt=""
      className={`absolute ${person.className} w-44 h-44 pr-2 rounded-full object-cover shadow-lg border-4 border-white`}
    />
  ))}
</div>
<div className="absolute right-20 top-40 rotate-[320deg] ">
      <div className="w-full flex justify-center mt-10">
      <div className="w-24 h-12 bg-violet-500 rounded-b-full"></div>
    </div>
</div>


    </section>
    
  );
};

export default Hero;