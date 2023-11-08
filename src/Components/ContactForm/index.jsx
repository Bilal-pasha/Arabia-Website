import { useForm } from "react-hook-form";
import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;

    console.log(data);
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState();
  return (
    <section className="bg-[#fffcfc] backGroundLite">
      <div className="ContactForm">
        <div className="lg:container lg:mx-auto sm:px-5 lg:py-16 sm:py-8">
          <div className="row">
            <div className="col-12 text-left ">
              <div
                className="contactForm"
                style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                ref={ref}
              >
                <div className="text-center text-[#695300] lg:pb-16 sm:pb-8 lg:text-lg sm:text-xs lg:space-y-3 sm:space-y-2">
                  <p className="">
                    Donate{" "}
                    <span className="bg-yellow-500 text-white px-2 py-1 animate-pulse">
                      Today
                    </span>{" "}
                  </p>
                  <h2 className="lg:text-5xl sm:text-3xl font-bold">
                    Join Our Mission
                  </h2>
                  <p>
                    Make a difference today and be a part of something truly
                    special.
                  </p>
                </div>
                <form
                  id="contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-8 "
                >
                  {/* Row 1 of form */}
                  <div className="row formRow">
                    <div className="col-6">
                      <input
                        type="text"
                        name="name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Please enter your name",
                          },
                          maxLength: {
                            value: 30,
                            message: "Please use 30 characters or less",
                          },
                        })}
                        className="form-control formInput"
                        placeholder="First Name"
                      ></input>
                      {errors.name && (
                        <span className="text-xs text-red-600">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="col-6">
                      <input
                        type="email"
                        name="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        className="form-control formInput"
                        placeholder="Last Name"
                      ></input>
                      {errors.email && (
                        <span className="text-xs text-red-600">
                          Please enter a valid email address
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col-6">
                      {/* <input
                        type="number"
                        name="name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Please enter your name",
                          },
                          maxLength: {
                            value: 30,
                            message: "Please use 30 characters or less",
                          },
                        })}
                        className="form-control formInput"
                        placeholder="Phone Number"
                      ></input> */}
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                        defaultCountry="PK"
                        className="form-control formInput outline-none"
                      />
                      {errors.name && (
                        <span className="text-xs text-red-600">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="col-6">
                      <input
                        type="email"
                        name="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        className="form-control formInput"
                        placeholder="Email address"
                      ></input>
                      {errors.email && (
                        <span className="text-xs text-red-600">
                          Please enter a valid email address
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col-6">
                      <input
                        type="text"
                        name="name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Please enter your name",
                          },
                          maxLength: {
                            value: 30,
                            message: "Please use 30 characters or less",
                          },
                        })}
                        className="form-control formInput"
                        placeholder="City"
                      ></input>
                      {errors.name && (
                        <span className="text-xs text-red-600">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="col-6">
                      <input
                        type="number"
                        name="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        className="form-control formInput"
                        placeholder="Contribution Amount"
                      ></input>
                      {errors.email && (
                        <span className="text-xs text-red-600">
                          Please enter a valid email address
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  {/* <div className="row formRow">
                    <div className="col">
                      <input
                        type="number"
                        name="Phone Number"
                        {...register("subject", {
                          required: {
                            value: true,
                            message: "Please enter a subject",
                          },
                          maxLength: {
                            value: 75,
                            message: "Subject cannot exceed 75 characters",
                          },
                        })}
                        className="form-control formInput"
                        placeholder="Phone Number"
                      ></input>
                      {errors.subject && (
                        <span className="text-xs text-red-600">
                          {errors.subject.message}
                        </span>
                      )}
                    </div>
                  </div> */}
                  {/* Row 3 of form */}
                  <div className="row formRow">
                    <div className="col">
                      <textarea
                        rows={3}
                        name="message"
                        {...register("message", {
                          required: true,
                        })}
                        className="form-control formInput"
                        placeholder="Message"
                      ></textarea>
                      {errors.message && (
                        <span className="text-xs text-red-600">
                          Please enter a message
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      class="relative px-4 py-2 overflow-hidden border bg-green-900 text-white border-indigo-600 rounded-lg shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
                    >
                      <span class="relative z-10">Donate now</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
