const Box_violet = ({
  className = "",
  width = 96,
  height = 48,
  color = "#8B5CF6",
}) => {
  return (
    <div
      className={`pointer-events-none ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        borderBottomLeftRadius: "9999px",
        borderBottomRightRadius: "9999px",
      }}
    />
  );
};

export default Box_violet;

// <div className="absolute right-0 top-56 rotate-[320deg] pointer-events-none z-0">