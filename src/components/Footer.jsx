const footerSections = [
  {
    title: "Company",
    links: ["Home", "Studio", "Service", "Blog"],
  },
  {
    title: "Terms & Policies",
    links: ["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"],
  },
  {
    title: "Follow Us",
    links: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
  },
  {
    title: "Contact",
    links: ["1498W Fulton St.", "Chicago, IL 63867", "123-456789000", "info@elementum.com"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#DDEBDD]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="border-t border-black/30" />

        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 md:grid-cols-4 lg:py-16">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-lg font-medium">{section.title}</h3>

              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="cursor-pointer break-words text-sm transition-transform hover:translate-x-1"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pb-8 text-center text-xs text-gray-600">
          &copy;2023 Elementum. All rights reserved
        </div>
      </div>
    </footer>
  );
}
