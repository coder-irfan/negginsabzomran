import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-24 xl:pt-40 xl:pb-20 px-4 sm:px-6 md:px-8 lg:px-16 max-w-[85rem] 2xl:max-w-[88rem] mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-14 sm:gap-14">
          <div className="max-w-xl md:max-w-sm lg:max-w-md xl:max-w-[650px] space-y-3 md:space-y-4 text-center md:text-left">
            <div className="inline-block uppercase tracking-wider border-l-4 border-colors-secondTextColor">
              <p className="text-h2Typing text-colors-textDarkGray font-semibold ml-3">
                <TypeAnimation
                  sequence={[
                    "Construction & Engineering",
                    2000,
                    "Building Trust & Quality",
                    2000,
                    "Reliable Project Delivery",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </p>
            </div>
            <h1 className="text-h1 font-semibold leading-tight">
              <span className="text-colors-secondTextColor">Neggin Sabz Omran</span>
              <br />
              Building Better Future
            </h1>

            <p className="text-sm lg:text-base">
              Neggin Sabz Omran is a trusted construction company delivering
              high-quality building, renovation, and infrastructure services in
              Afghanistan. We focus on durability, modern design, and efficient
              project execution to help businesses and homeowners bring their
              vision to life. From small projects to large-scale developments,
              our team is committed to reliability and long-term value.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 pt-4 lg:pt-8">
              <a href="#about-us" className="button">
                Learn More
              </a>
              <a href="#contact" className="button">
                Contact Us
              </a>
            </div>
          </div>

          <div className="">
            <img
              rel="preload"
              src="images/About-Image-03.webp"
              alt="construction"
              className="w-96  sm:h-auto sm:w-[450px] lg:w-[500px] xl:w-[550px] "
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
