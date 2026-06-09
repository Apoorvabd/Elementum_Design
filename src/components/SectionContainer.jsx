const SectionContainer = ({ children, className = "", innerClassName = "" }) => {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
