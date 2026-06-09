const LongArrow = ({
  className = "",
  width = 60,
  height = 23,
  viewBox = "0 0 80 24",
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M2 12H75M75 12L65 2M75 12L65 22"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LongArrow;
