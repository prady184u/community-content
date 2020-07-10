import { getStrapiMedia } from "utils/media";
import Image from "./image";

const Footer = ({ footerSections, footerSmallText, footerLogo }) => {
  return (
    <footer className="pt-12">
      <div className="container flex flex-col lg:flex-row lg:justify-between">
        <div>
          {footerLogo && (
            <Image media={footerLogo} className="h-8 w-auto object-contain" />
          )}
        </div>
        <nav className="flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end mb-10">
          {footerSections.map((footerSection) => (
            <div
              key={footerSection.id}
              className="mt-10 lg:mt-0 w-6/12 lg:w-auto"
            >
              <p className="uppercase tracking-wide font-semibold">
                {footerSection.title}
              </p>
              <ul className="mt-2">
                {footerSection.links.map((link) => (
                  <li key={link.id} className="text-gray-700 py-1 px-1 -mx-1">
                    <a
                      href={link.url}
                      className="hover:text-gray-900"
                      // Change target and rel attributes is newTab is turned on
                      target={link.newTab ? "_blank" : "_self"}
                      rel={link.newTab ? "noopener noreferrer" : ""}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="text-sm bg-gray-100 py-6 text-gray-700">
        <div className="container">{footerSmallText}</div>
      </div>
    </footer>
  );
};

export default Footer;
