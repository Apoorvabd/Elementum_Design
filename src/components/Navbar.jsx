import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Navbar() {
  const navItems = ["Home", "Studio", "Services", "Contact", "FAQs"];

  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8 lg:py-6">
      <h1 className="gerbil-font text-2xl sm:text-3xl">Elementum</h1>

      <ul className="gerbil-font hidden items-center gap-8 text-sm md:flex">
        {navItems.map((item) => (
          <li key={item} className="cursor-pointer transition-colors hover:text-gray-500">
            {item}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="inline-flex items-center justify-center text-2xl md:hidden"
        aria-label="Open menu"
      >
        <HiOutlineMenuAlt4 size={30} />
      </button>
    </nav>
  );
}

export default Navbar;
