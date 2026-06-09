const Curves = () => {
  return (
    <svg
      viewBox="20 -10 140 500"
      className="pointer-events-none absolute left-0 top-[58%] z-0 hidden h-52 w-20 -translate-y-1/2 sm:block lg:h-72 lg:w-32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
     
      {/* Pink Curve */}
      <path
        d="
          M -18 10
          C 90 30, 160 80, 5 110
          C -50 140, -50 190, 5 220
          C 60 250, 170 300, 5 370
  
        "
        stroke="#FF7B8A"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />

      {/* Black Curve */}
      <path
        d="
          M -15 -10
          C 110 30, 190 90, 55 120
          C 0 140, 0 180, 55 220
          C 110 250, 170 300, 15 400
        "
        stroke="black"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Curves;
