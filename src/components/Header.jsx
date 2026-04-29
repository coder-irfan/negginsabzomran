import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTelegram,
  FaHome,
  FaBuilding,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiInformationCircle, HiServer } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about-us", "services", "projects", "contact"];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 150;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="relative font-heading font-medium">
        <div
          className="2xl:max-w-[100rem] mx-auto px-4 sm:px-6 md:px-8 py-3 md:py-2 lg:px-16 fixed top-0 right-0 left-0 z-[60]
          transition-color duration-300 backdrop-blur-md backdrop-saturate-150 border-b border-colors-textDarkColor/10"
        >
          <div
            className={`md:hidden fixed w-screen h-screen opacity-100 inset-0 bg-colors-bg transition-all duration-700 z-20
            ${
              isOpen
                ? "translate-x-0 pointer-events-auto"
                : "translate-x-full delay-200 pointer-events-none"
            }`}
          ></div>

          <div className="flex items-center justify-between">
            <img
              src="images/logo.png"
              alt="logo"
              className="w-20 md:w-24 lg:w-28 object-contain"
            />

            <div className="z-50">
              <nav
                className={`md:relative fixed top-0 right-0 h-full md:right-0 transition-all duration-700 pt-24 pr-6 md:pr-0 md:pt-0
                md:h-auto md:w-auto md:translate-x-0 ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="md:hidden absolute top-0 left-2 px-4 py-4">
                  <img
                    src="images/logo.png"
                    alt="logo"
                    className="w-20 md:w-24 lg:w-28 object-contain"
                  />
                </div>
                <div className="flex flex-col md:flex-row items-end gap-8">
                  <ul className="flex flex-col md:flex-row items-end md:items-center gap-4 lg:gap-6 lg:text-lg text-colors-textDarkColor">
                    <li
                      className={`hover-link font-semibold flex justify-center items-center gap-2
                    ${activeSection === "home" ? "active-link" : ""}`}
                    >
                      <a
                        href="#home"
                        onClick={() => setIsOpen(false)}
                        className=""
                      >
                        Home
                      </a>
                      <FaHome className="md:hidden text-lg opacity-80" />
                    </li>

                    <div className="md:hidden w-screen h-[1px] -mr-6 bg-colors-textDarkColor/40"></div>

                    <li className="hidden md:flex opacity-25">|</li>
                    <li
                      className={`hover-link font-semibold flex justify-center items-center gap-2
                    ${activeSection === "about-us" ? "active-link" : ""}`}
                    >
                      <a
                        href="#about-us"
                        onClick={() => setIsOpen(false)}
                        className=""
                      >
                        About Us
                      </a>
                      <HiInformationCircle className="md:hidden text-lg opacity-80" />
                    </li>

                    <div className="md:hidden w-screen h-[1px] -mr-6 bg-colors-textDarkColor/40"></div>

                    <li className="hidden md:flex opacity-25">|</li>
                    <li
                      className={`hover-link font-semibold flex justify-center items-center gap-2
                    ${activeSection === "services" ? "active-link" : ""}`}
                    >
                      <a
                        href="#services"
                        onClick={() => setIsOpen(false)}
                        className=""
                      >
                        Services
                      </a>
                      <HiServer className="md:hidden text-lg opacity-80" />
                    </li>

                    <div className="md:hidden w-screen h-[1px] -mr-6 bg-colors-textDarkColor/40"></div>

                    <li className="hidden md:flex opacity-25">|</li>
                    <li
                      className={`hover-link font-semibold flex justify-center items-center gap-2
                    ${activeSection === "projects" ? "active-link" : ""}`}
                    >
                      <a
                        href="#projects"
                        onClick={() => setIsOpen(false)}
                        className=""
                      >
                        Projects
                      </a>
                      <FaBuilding className="md:hidden text-lg opacity-80" />
                    </li>

                    <div className="md:hidden w-screen h-[1px] -mr-6 bg-colors-textDarkColor/40"></div>

                    <li className="hidden md:flex opacity-25">|</li>
                    <li
                      className={`hover-link font-semibold flex justify-center items-center gap-2
                    ${activeSection === "contact" ? "active-link" : ""}`}
                    >
                      <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className=""
                      >
                        Contact
                      </a>
                      <FaEnvelope className="md:hidden text-lg opacity-80" />
                    </li>

                    <div className="md:hidden w-screen h-[1px] -mr-6 bg-colors-textDarkColor/40"></div>
                  </ul>
                  <div className="md:hidden text-sm z-10 ">
                    <a
                      onClick={() => setIsOpen(false)}
                      href="#contact"
                      className="button"
                    >
                      Contact Us
                      <FaPhoneAlt />
                    </a>
                  </div>

                  <div className="md:hidden flex flex-wrap justify-center items-center gap-2 lg:gap-4 text-xl md:text-2xl xl:text-3xl ">
                    <a
                      href="https://www.instagram.com/negginsabzomran"
                      className="media-link"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://www.youtube.com/"
                      className="media-link"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                    <a
                      href="https://www.facebook.com/NegginSabzOmran/"
                      className="media-link"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://telegram.com/"
                      className="media-link"
                      target="_blank"
                    >
                      <FaTelegram />
                    </a>
                  </div>
                </div>

                {isOpen && (
                  <div
                    className="absolute top-4 right-5 sm:right-6 text-[1.4rem] md:hidden border border-colors-buttonBg rounded-md p-1"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaTimes
                      className="cursor-pointer text-colors-buttonBg"
                      aria-label="Close menu"
                    />
                  </div>
                )}
              </nav>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <div className="flex">
                <a href="#contact" className="button">
                  Contact Us
                  <FaPhoneAlt />
                </a>
              </div>
            </div>

            {!isOpen && (
              <div
                className="absolute top-4 right-5 sm:right-6 text-[1.4rem] md:hidden border border-colors-buttonBg rounded-md p-1"
                onClick={() => setIsOpen(true)}
              >
                <FaBars
                  aria-label="Open menu"
                  className="cursor-pointer text-colors-buttonBg"
                />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
