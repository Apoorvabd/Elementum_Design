function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
      <h1 className="text-[25px]  gerbil-font">
        Elementum
      </h1>

      <ul className="hidden md:flex gap-8 text-sm gerbil-font">
        <li>Home</li>
        <li>Studio</li>
        <li>Services</li>
        <li>Contact</li>
        <li>FAQs</li>
      </ul>

      <button className="text-2xl">
        ☰
      </button>
    </nav>
  );
};

export default Navbar;