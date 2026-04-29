import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaTimes } from "react-icons/fa";

function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "How long does a construction project usually take?",
      answer:
        "Project timelines depend on size and complexity, but we always provide a clear schedule before starting and work efficiently to complete everything on time.",
    },
    {
      id: "2",
      question: "How much will my project cost?",
      answer:
        "Costs vary based on design, materials, and scope. We offer transparent pricing and provide a detailed quote after understanding your requirements.",
    },
    {
      id: "3",
      question: "Do you handle both residential and commercial projects?",
      answer:
        "Yes, we work on a wide range of projects including homes, offices, and commercial buildings, delivering reliable results for each type.",
    },
    {
      id: "4",
      question: "Do you provide design and planning services?",
      answer:
        "We assist with planning and design to ensure your project is well-structured, functional, and aligned with modern construction standards.",
    },
    {
      id: "5",
      question: "How do you ensure quality and safety?",
      answer:
        "We follow strict quality control processes and safety standards, using reliable materials and experienced professionals at every stage of the project.",
    },
  ];

  const [isOpen, setIsOpen] = useState(0);
  const toggleFaq = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <>
      <section
        id="faq"
        className="px-4 sm:px-6 md:px-8 lg:px-16 py-14 md:py-14 lg:py-24 space-y-6 md:space-y-10 scroll-mt-20"
      >
        <div className="flex flex-col items-center text-center justify-center gap-2">
          <div className="inline-block tracking-wider border-l-4 border-colors-secondTextColor">
            <p className="ml-4 font-medium md:text-lg lg:text-xl font-heading">
              FAQs
            </p>
          </div>
          <h2 className="font-heading text-h2 font-bold">
            Frequently Asked{" "}
            <span className="text-colors-secondTextColor">Questions</span>
          </h2>
          <p className="text-sm md:text-base text-colors-textDarkGray text-center max-w-2xl mx-auto">
            Find answers to common questions about our services, process,
            pricing, and project timelines.
          </p>
        </div>
        <div className="space-y-2 lg:space-y-4">
          {faqs.map((faq, index) => {
            const isOpened = isOpen === index;
            return (
              <div
                key={faq.id}
                onClick={() => toggleFaq(index)}
                className="group relative max-w-4xl mx-auto cursor-pointer rounded-xl border border-colors-thirdBg/40 bg-colors-bg/70 backdrop-blur-md transition-all duration-300 hover:border-colors-secondTextColor/40 hover:shadow-lg"
              >
                <div className="p-3 md:p-4 lg:p-5">
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpened ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`mt-1 text-colors-secondTextColor rounded-lg transition-colors duration-300`}
                    >
                      {isOpened ? <FaTimes /> : <FaPlus />}
                    </motion.div>

                    <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpened && (
                      <motion.div
                        key="answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        style={{ transformOrigin: "top" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 pl-4 text-[13px] md:text-base text-colors-textDarkGray leading-relaxed border-l ml-2 border-colors-thirdBg/40">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default FAQ;
