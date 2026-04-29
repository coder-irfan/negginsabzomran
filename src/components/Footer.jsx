import { FaPhone, FaSearchLocation, FaMailBulk } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer
        id="contact"
        className="px-4 pt-10 pb-6 sm:px-6 md:pt-14 md:pb-4 md:px-8 lg:pt-14 lg:pb-6 xl:pt-16 lg:px-16 space-y-4 md:space-y-6 lg:space-y-6"
      >
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-8 lg:gap-10 pb-8">
          <div className="space-y-5 lg:space-y-5 max-w-md lg:max-w-xs flex flex-col items-start justify-start ">
            <div className="">
              <img
                src="images/logo.png"
                alt="logo"
                className="w-28 object-contain"
              />
            </div>
            <p className="text-sm lg:text-base">
              Neggin Sabz Omran Construction delivers reliable residential and
              commercial building solutions across Afghanistan.
            </p>
          </div>

          <div className="flex gap-16 sm:gap-28 md:gap-36 lg:gap-10 xl:gap-28">
            <div className="space-y-2 lg:space-y-5">
              <h3 className="text-h3 font-medium text-colors-textDarkGray">
                Company
              </h3>
              <ul className="space-y-2 lg:space-y-3 text-sm xl:text-base">
                <li className="">
                  <a href="#about-us" className="hover-link">
                    About Us
                  </a>
                </li>
                <li className="">
                  <a href="#testimonial" className="hover-link">
                    Our Clients
                  </a>
                </li>
                <li className="">
                  <a href="#projects" className="hover-link">
                    Projects
                  </a>
                </li>
                <li className="">
                  <a href="#services" className="hover-link">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2 lg:space-y-5">
              <h3 className="text-h3 font-medium text-colors-textDarkGray">
                Contact
              </h3>
              <ul className="space-y-2 lg:space-y-3 text-sm xl:text-base">
                <li className="">
                  <a href="#contact" className="hover-link">
                    Contact Us
                  </a>
                </li>
                <li className="">
                  <a href="#newsletter" className="hover-link">
                    News Letter
                  </a>
                </li>
                <li className="">
                  <a href="#location" className="hover-link">
                    Location
                  </a>
                </li>
                <li className="">
                  <a href="#contact" className="hover-link">
                    Information
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 sm:gap-28 md:gap-36 lg:gap-10 xl:gap-28">
            <div className="space-y-2 lg:space-y-5">
              <h3 className="text-h3 font-medium text-colors-textDarkGray">
                Support
              </h3>
              <ul className="space-y-2 lg:space-y-3 text-sm xl:text-base">
                <li className="">
                  <a href="#faq" className="hover-link">
                    FAQs
                  </a>
                </li>
                <li className="">
                  <a href="#contact" className="hover-link">
                    Help Center
                  </a>
                </li>
                <li className="">
                  <a href="#about-us" className="hover-link">
                    More Info
                  </a>
                </li>
                <li className="">
                  <a href="#about-us" className="hover-link">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2 lg:space-y-5">
              <h3 className="text-h3 font-medium text-colors-textDarkGray">
                Contact Info
              </h3>
              <ul className="space-y-2 lg:space-y-4 text-sm xl:text-base max-w-sm">
                <li className="flex items-center gap-2">
                  <FaPhone className="lg:text-lg text-colors-thirdBg" />
                  <a
                    href="tel:+93729697581"
                    className="text-sm md:text-base hover:text-colors-secondTextColor transition-colors duration-300"
                  >
                    +93729697581
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaMailBulk className="lg:text-lg text-colors-thirdBg" />
                  <a
                    href="mailto:info@negginsabzomran.com"
                    className="text-sm md:text-base hover:text-colors-secondTextColor transition-colors duration-300"
                  >
                    info@negginsabzomran.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaSearchLocation className="text-lg lg:text-2xl text-colors-thirdBg" />
                  <a href="">
                    Kote Sangi, Gulayi Dawakhana, Kabul Commercial Market, 4th
                    Floor
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="images/truck.png"
            alt="truck"
            loading="lazy"
            decoding="async"
            className="absolute bottom-0 w-12 md:w-16 object-contain truck truck-1"
          />
          <img
            src="images/truck2.png"
            alt="truck"
            loading="lazy"
            decoding="async"
            className="absolute bottom-0 w-12 md:w-16 object-contain truck truck-2"
          />
          <img
            src="images/truck3.png"
            alt="truck"
            loading="lazy"
            decoding="async"
            className="absolute bottom-0 w-12 md:w-16 object-contain truck truck-3"
          />

          <hr className="border border-colors-textDarkGray/80 mt-6" />
        </div>

        <div className="flex items-center justify-between text-xs sm:text-sm md:text-base gap-2">
          <p className="">© {new Date().getFullYear()} all right reserved.</p>
          <p className="">
            Developed by{" "}
            <span className="text-colors-secondTextColor underline font-medium">
              <a
                href="https://coder-irfan-portfolio.onrender.com"
                target="_blank"
              >
                Coder Irfan
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
