import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaPaperPlane,
  FaPhone,
  FaSearchLocation,
  FaMailBulk,
} from "react-icons/fa";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const message = encodeURIComponent(
      `Hello, my name is ${data.fullName}\n` +
        `Phone: ${data.phone}\n` +
        `Email: ${data.email}\n` +
        `Message: ${data.comments || "-"}`,
    );

    const whatsappURL = `https://wa.me/+93729697581?text=${message}`;

    window.open(whatsappURL, "_blank");

    setIsSubmitted(true);
    reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <>
      <section
        id="contact"
        className="relative w-full px-4 sm:px-6 md:px-8 py-12 lg:px-16 lg:py-20 max-w-[88rem] 2xl:max-w-[90rem] mx-auto"
      >
        <div className="space-y-10 sm:space-y-10 md:space-y-12 lg:space-y-14">
          <div className="text-center space-y-2 md:space-y-3">
            <div className="inline-block tracking-wider border-l-4 border-colors-secondTextColor">
              <p className="ml-4 font-medium md:text-lg lg:text-xl font-heading">
                Contact
              </p>
            </div>

            <h2 className="text-h2 font-semibold leading-tight">
              Get In <span className="text-colors-secondTextColor">Touch</span>{" "}
              With Us
            </h2>

            <p className="text-sm md:text-base text-colors-textDarkGray text-center max-w-2xl mx-auto">
              Have a project in mind? Contact us today and get a clear plan,
              fast response, and professional support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-8">
            <div className="max-w-[500px]">
              <div className="space-y-6 lg:space-y-10">
                <div className="space-y-2 lg:space-y-3">
                  <h2 className="font-semibold text-xl md:text-2xl lg:text-[2rem] xl:text-[2.1rem] md:leading-[1.3]">
                    Or Reach Us Directly
                  </h2>
                  <p className="text-sm md:text-base text-colors-textDarkGray">
                    Reach out to Neggin Sabz Omran for inquiries, project
                    discussions, or a free consultation. Our team is ready to
                    assist you with clear guidance and quick responses.
                  </p>
                </div>
                <div className="flex flex-col gap-6 lg:gap-8">
                  <div className="flex items-center gap-3">
                    <p className="p-3 md:p-4 bg-colors-buttonBg/70 rounded-full">
                      <FaPhone className="md:text-xl" />
                    </p>
                    <div className="">
                      <h4 className="font-medium">Phone</h4>
                      <a
                        href="tel:+93729697581"
                        className="text-sm md:text-base hover:text-colors-secondTextColor transition-colors duration-300"
                      >
                        +93729697581
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="p-3 md:p-4 bg-colors-buttonBg/70 rounded-full">
                      <FaSearchLocation className="md:text-xl" />
                    </p>
                    <div className="">
                      <h4 className="font-medium">Location</h4>
                      <p className="text-sm md:text-base">
                        Kote Sangi, Gulayi Dawakhana, Kabul Commercial Market,
                        4th Floor
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="p-3 md:p-4 bg-colors-buttonBg/70 rounded-full">
                      <FaMailBulk className="md:text-xl" />
                    </p>
                    <div className="">
                      <h4 className="font-medium">Email</h4>
                      <a
                        href="mailto:info@negginsabzomran.com"
                        className="text-sm md:text-base hover:text-colors-secondTextColor transition-colors duration-300"
                      >
                        info@negginsabzomran.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl bg-colors-bg p-4 md:p-6 rounded-lg -order-1 lg:order-1">
              <form
                className="flex flex-col gap-4 lg:gap-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="space-y-2 w-full sm:w-1/2">
                    <label htmlFor="fullName" className="text-sm lg:text-base">
                      Full Name
                    </label>
                    <div className="">
                      <input
                        placeholder="Ahmad Amiri"
                        id="fullName"
                        type="text"
                        className={`input ${
                          errors.fullName ? "!border-red" : ""
                        }`}
                        {...register("fullName", {
                          required: "Please enter your name!",
                        })}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="error">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2 w-full sm:w-1/2">
                    <label htmlFor="phone" className="text-sm lg:text-base">
                      Phone
                    </label>
                    <div className="">
                      <input
                        placeholder="+93700000000"
                        type="tel"
                        id="phone"
                        className={`input ${errors.phone ? "!border-red" : ""}`}
                        {...register("phone", {
                          required: "Please enter your phone",
                          minLength: {
                            value: 9,
                            message: "Enter a valid phone number",
                          },
                        })}
                      />
                    </div>
                    {errors.phone && (
                      <p className="error">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2 w-full">
                  <label className="text-sm lg:text-base">Email</label>
                  <div className="">
                    <input
                      placeholder="ahmad@gmail.com"
                      type="email"
                      autoComplete="off"
                      className={`input ${errors.email ? "!border-red" : ""}`}
                      {...register("email", {
                        required: "Please enter your email!",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Enter a valid email!",
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="error">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2 w-full">
                  <label htmlFor="comments" className="text-sm lg:text-base">
                    Comments (Optional)
                  </label>
                  <textarea
                    placeholder="Enter your comments..."
                    id="comments"
                    className="input h-28 lg:h-40"
                    {...register("comments")}
                  ></textarea>
                </div>

                <button type="submit" className="button justify-center">
                  Sumbit <FaPaperPlane />
                </button>

                {isSubmitted && (
                  <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg text-sm mb-4 text-center">
                    Your message has been sent successfully!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
