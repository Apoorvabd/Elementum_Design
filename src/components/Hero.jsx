import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';
import p8 from '../assets/p8.jpg';
import p9 from '../assets/p9.jpg';
import Box_violet from '../curves/Box_violet';
import Curves from '../curves/Curves.side';
import Yellow from '../curves/Curves.yellow';

const people = [
  { img: p9, className: "left-0 top-[75%] " },

  { img: p8, className: "left-[10%] top-[55%]" },

  { img: p1, className: "left-[27%] top-[27%]" },

  { img: p2, className: "left-[34%] top-[90%]" },

  { img: p3, className: "left-[50%] top-[40%]" },

  { img: p4, className: "left-[60%] top-[75%]" },

  { img: p5, className: "left-[80%] top-[27%]" },

  { img: p6, className: "left-[94%] top-[71%]" },
];


const Hero = () => {
  return (
    <section className="relative max-w-7xl mx-auto mt-20 pb-20">
      <Curves />

      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-52  bg-pink-900 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-10 right-20 w-52  bg-green-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 ">

        <div className="text-center gerbil-font leading-none text-3xl md:text-[80px]  z-10 w-[1100px] p-9">
         <div className="mb-[14px]">
           The{" "} 
          <span className=" px-4 rounded-full z-10">
            thinkers
<Yellow
  width={760}
  height={40}
  className="absolute top-[90px] left-[200px] -z-10"
/>           
          </span>{" "}
          and
           
          <br />
         </div>

          doers were{" "}ch
          <span className="bg-pink-200  px-4 rounded-full inline-block leading-[0.85]">
            <span className="relative z-10 ">
            anging
            </span>
          </span>
          <br />

          the{" "}
          <span className="bg-green-100 px-4 mx-2 rounded-full leading-[0.85] inline-block">
            status 
          </span>{" "}
          Quo with
          
        </div>

        <p className="text-center text-lg font-semibold  text-gray-500 max-w-2xl mx-auto mt-8">
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
<Box_violet
  className="absolute right-0 top-64 rotate-[300deg] z-0"
/>


    </section>
    
  );
};

export default Hero;
