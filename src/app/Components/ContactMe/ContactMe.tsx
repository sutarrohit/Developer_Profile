"use client";
import React, { useEffect, useState } from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { CiLocationArrow1 } from "react-icons/ci";
import Loader from "../Loader.tsx/Loader";
import dotenv from "dotenv";

import { useInView } from "react-intersection-observer";

dotenv.config();

const ContactMe = () => {
  const FROMSPREE = process.env.NEXT_PUBLIC_FROMSPREE || "";
  const [state, handleSubmit] = useForm(FROMSPREE || "123xyz");
  const [messageSent, setMessageSent] = useState(false);

  const { ref: contactMeRef, inView: contactMeRefVisible } = useInView();
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setMessageSent(true);
    }
  }, [state.succeeded]);

  return (
    <form onSubmit={handleSubmit}>
      <div
        id="contactme"
        className="min-h-screen flex justify-center mb-[4rem] md:mb-[0rem]"
      >
        <div
          ref={contactMeRef}
          className="relative w-full md:w-[80%] flex flex-col gap-2 md:flex-row justify-center items-center mt-28 md:0"
        >
          {/* left */}
          <div
            className={`relative ${
              contactMeRefVisible && !isAnimationEnd
                ? "animate-ContactMemoveLeft"
                : ""
            } `}
            onAnimationEnd={() => {
              setIsAnimationEnd(true);
            }}
          >
            {/* box */}
            <div className=" relative z-[5] left-4 md:left-[2rem]  border-b-4 border-firstColor w-[19rem] md:w-[22rem] flex flex-col gap-4 bg-textColorLight text-blackColor">
              <div className="geometric-box top-[2rem] left-[15rem] md:left-[18rem]"></div>
              <div className="relative  h-20">
                <h2 className="absolute font-bold text-4xl mt-10 dark:text-white bottom-4 left-[-2rem] md:left-[-2.7rem] ">
                  Contact Me.
                </h2>
              </div>

              <p className="w-[85%] mx-auto text-[0.9rem]">
                I will read all emails. Send me any message you want and I'll
                get back to you
              </p>
              <p className="w-[85%] mx-auto text-[0.9rem] mb-6">
                I need your <span className="font-semibold">Name </span> and
                <span className="font-semibold"> Email </span>
                Address, but you won't receive anything other than your reply
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 text-[0.9rem] mt-11">
              <div>
                <p>Does not send emails.</p>
                <p className="font-semibold">Write me on social network</p>
              </div>

              <div className="flex text-3xl gap-2">
                <a href="https://github.com/sutarrohit" target="_blank">
                  <FaGithubSquare />
                </a>
                <a
                  href="https://linkedin.com/in/rohit-sutar-89687a1b6"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com/imSrohitS" target="_blank">
                  <FaTwitterSquare />
                </a>
              </div>
            </div>
          </div>

          {/* right */}
          <div
            className={` relative border bg-black border-blackColorLight w-[90%] md:w-[30rem] p-5 md:p-12 flex flex-col gap-4 ${
              contactMeRefVisible && !isAnimationEnd
                ? "animate-ContactMemoveRight"
                : ""
            }`}
            onAnimationEnd={() => {
              setIsAnimationEnd(true);
            }}
          >
            <p className="font-bold text-white">Send Me a Message</p>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex border border-blackColorLight  ">
                <input
                  id="fname"
                  name="fname"
                  type="text"
                  placeholder="First Name"
                  className="bg-transparent w-full focus:outline-none p-2"
                />
              </div>

              <ValidationError
                prefix="fname"
                field="text"
                errors={state.errors}
              />

              <div className="flex border border-blackColorLight  ">
                <input
                  id="lname"
                  name="lname"
                  type="text"
                  placeholder="Last Name"
                  className="bg-transparent w-full focus:outline-none p-2"
                />
              </div>

              <ValidationError
                prefix="lname"
                field="text"
                errors={state.errors}
              />
            </div>

            <div className="flex border border-blackColorLight  ">
              <input
                id="sub"
                name="sub"
                type="text"
                placeholder="Subject"
                className="bg-transparent w-full focus:outline-none p-2"
              />
            </div>

            <ValidationError prefix="sub" field="text" errors={state.errors} />

            <div className="flex border border-blackColorLight  ">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="resize-none w-full bg-transparent h-[7rem] md:h-[10rem] focus:outline-none"
              />
            </div>
            <ValidationError
              prefix="message"
              field="message"
              errors={state.errors}
            />

            <div>
              <button
                className="p-2 w-[100%] bg-firstColor text-whiteColor font-semibold flex justify-center items-center gap-1"
                type="submit"
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <Loader />
                ) : (
                  <>
                    <CiLocationArrow1 />
                    Send Message
                  </>
                )}
              </button>

              <div className="text-[0.8rem] mt-6 text-green-500">
                {messageSent && (
                  <p className="font-bold ">
                    Message sent successfully{" "}
                    <span className="font-bold text-[1rem]">&#9745;</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactMe;
