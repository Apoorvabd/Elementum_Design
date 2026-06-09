const Box_violet = ({
  className = "",
  color = "#8B5CF6",
}) => {
  return (
    <div
      className={`pointer-events-none rounded-r-full ${className}`}
      style={{ backgroundColor: color }}
      aria-hidden="true"
    />
  );
};

export default Box_violet;
