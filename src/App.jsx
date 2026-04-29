import { Suspense, lazy } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Divider from "./components/Divider";
import Divider2 from "./components/Divider2";
import WhatsApp from "./components/WhatsApp";

const Services = lazy(() => import("./components/Services"));
const Testimonial = lazy(() => import("./components/Testimonial"));
const FAQ = lazy(() => import("./components/FAQ"));
const DoneProjects = lazy(() => import("./components/DoneProjects"));
const Contact = lazy(() => import("./components/Contact"));
const Location = lazy(() => import("./components/Location"));
const NewsLetter = lazy(() => import("./components/NewsLetter"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Header />

      <div className="bg-hero-bg bg-cover bg-no-repeat bg-top">
        <Hero />
      </div>

      <About />

      <div className="bg-divider-bg bg-cover bg-no-repeat bg-right relative">
        <Divider />
        <div className="absolute inset-0 bg-colors-textDarkColor/70" />
      </div>

      <Suspense
        fallback={
          <div className="flex items-center justify-center py-24">
            <div className="w-10 h-10 border-4 border-colors-secondTextColor border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <Services />

        <div className="bg-testimonial-bg bg-contain bg-no-repeat bg-center bg-colors-secondBg">
          <Testimonial />
        </div>

        <FAQ />

        <div className="bg-divider2-bg bg-cover bg-no-repeat bg-top relative">
          <Divider2 />
          <div className="absolute inset-0 bg-colors-textDarkColor/70" />
        </div>

        <DoneProjects />

        <div className="bg-colors-secondBg">
          <Contact />
        </div>

        <Location />

        <div className="bg-colors-secondBg">
          <NewsLetter />
        </div>

        <div className="bg-footer-bg bg-contain md:bg-cover bg-no-repeat bg-bottom relative">
          <Footer />
        </div>
      </Suspense>

      <WhatsApp />
    </>
  );
}

export default App;
