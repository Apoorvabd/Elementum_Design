const Yellow = ({
  className = "",
  width = 660,
  height = 40,
  strokeWidth = 8,
  color = "#F5B942",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="200 0 200 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M -20 8 L 590 2 L -80 38 L 700 19 L 200 62"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default Yellow;
/*
const Yellow = ({ width = 660 }) => (
  <svg
    className="absolute top-[95px] left-[260px] z-0 "
    width={width}
    height="40"
    viewBox="200 0 100 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    <path
      d="M -59 8 L 590 2 L -80 38 L 690 22 L 200 62  "
      stroke="#F5B942"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default Yellow; */