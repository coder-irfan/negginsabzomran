function Divider() {
  return (
    <>
      <section
        id="cta"
        className="z-10 relative scroll-mt-44 text-colors-textLightColor"
      >
        <div className="max-w-[350px] sm:max-w-sm md:max-w-[550px] lg:max-w-[750px] mx-auto text-center px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 space-y-3 md:space-y-5">
          <h2 className="text-h2 font-bold">Ready To Start Your Project?</h2>
          <p className="font-medium text-sm sm:text-base lg:text-lg xl:text-xl">
            Neggin Sabz Omran delivers reliable construction services with quality,
            precision, and on-time results you can trust.
          </p>
          <div className="pt-4 md:pt-6 flex items-center justify-center text-colors-textDarkColor">
            <a href="#contact" className="button">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Divider;
