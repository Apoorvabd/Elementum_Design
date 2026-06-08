const footerSections = [
  {
    title: "Company",
    links: ["Home", "Studio", "Service", "Blog"],
  },
  {
    title: "Terms & Policies",
    links: [
      "Privacy Policy",
      "Terms & Conditions",
      "Explore",
      "Accessibility",
    ],
  },
  {
    title: "Follow Us",
    links: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
  },
  {
    title: "Contact",
    links: [
      "1498W Fulton St.",
      "Chicago, IL 63867",
      "123-456789000",
      "info@elementum.com",
    ],
  },
];
export default function Footer() {
  return (
    <footer className="bg-[#DDEBDD]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Divider */}
        <div className="border-t border-black/30" />

        <div
          className="
            py-16
            grid
            grid-cols-2
            md:grid-cols-4
            gap-10
          "
        >
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 font-medium text-lg">
                {section.title}
              </h3>

              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="
                      cursor-pointer
                      hover:translate-x-1
                      transition-transform
                      text-sm
                    "
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="
            text-center
            text-xs
            text-gray-600
            pb-8
          "
        >
          ©2023 Elementum. All rights reserved
        </div>
      </div>
    </footer>
  );
}