const Curves = () => {
  return (
    <svg
      viewBox="20 -10 140 500"
      className="w-32 ml-1 absolute top-80 left-0 h-72 pointer-events-none z-0 "
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
