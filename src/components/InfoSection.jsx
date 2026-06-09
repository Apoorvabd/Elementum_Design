import Yellow from "../curves/Curves.yellow";
import LongArrow from "../curves/LongArrow"
const InfoSection = ({
  title,
  description,
  image,
  reverse = false,
}) => {
  const TextContent = () => (
    <div>
      <h2 className="text-3xl lg:text-5xl leading-tight  gerbil-font ">
        
          <span>
            Tomorrow should 
          <Yellow 
          width={490}
  height={28}
  strokeWidth={7}
  className="relative -top-[12px] -left-[120px] -z-10 "/>
          </span>
          
          be better than {" "}
          <span className="bg-green-100 w-[30%] rounded-full ">
            <span className="relative z-10">
            <area shape="" coords="" href="" alt="" />
            Today
            </span>
          </span>
      </h2>

      <p className="mt-8 text-gray-700 text-xl max-w-lg leading-7">
        {description}
      </p>

      <button className="mt-10 flex items-center gap-4 group">
        <span>Read more</span>

        
<LongArrow width="80"
    height="20"
    viewBox="0 0 90 24"
    fill="none"/>        
      </button>
    </div>
  );

  const ImageContent = () => (
    <div className="relative flex justify-center">
      <div
        className="
        absolute
        top-10
        right-10
        w-28
        h-28
        bg-[#FF6B6B]
        rotate-12
        z-0
      "
      />

      <img
        src={image}
        alt={title}
        className="
        relative
        z-10
        w-[450px]
        h-[450px]
        rounded-full
        object-cover
      "
      />
    </div>
  );

  return (
    <section className=" py-24 overflow-hidden mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex flex-col items-center gap-16 ${
            reverse
              ? "lg:flex-row-reverse"
              : "lg:flex-row"
          }`}
        >
          <div className="flex-1">
            <TextContent />
            <div className="w-10 h-10 bg-red"></div>
          </div>
          <div
  className="absolute top-[900px] left-[45%] w-96 h-96 rounded-full"
  style={{
    background:
      "radial-gradient(circle, rgba(255,120,120,0.35) 0%, rgba(255,120,120,0.35) 40%, transparent 95%)",
    filter: "blur(60px)",
  }}
/>

          <div className="flex-1">
            <ImageContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;