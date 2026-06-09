const Yellow = ({
  className = "",
  width = "100%",
  height = "100%",
  strokeWidth = 8,
  color = "#F5B942",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 620 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M 18 12 L 490 6 L -98 42 L 562 30 L 190 80"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default Yellow;
