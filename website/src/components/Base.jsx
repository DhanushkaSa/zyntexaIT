"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import LiquidEther from "./Background";
import { MdWeb } from "react-icons/md";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import Footer from "./Footer";
import RotatingText from "./RotatingText";
import Submitform from "./Submitform";
import logo from "../assets/short logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Base() {

  useEffect(() => {
    AOS.init({
      duration: 800, easing: "ease-in-out", once: true,
      mirror: false,
    });
  }, []);

  return (
    <>


      <div className="min-h-screen w-full bg-black flex flex-col items-center pt-30 px-4">
        <h1 className=" text-center relative z-20" data-aos="fade-down" data-aos-delay="100">
          <span className="text-3xl md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Welcome to ZyntexaIT
          </span>
          <br />
          <span className="text-white text-xl md:text-4xl lg:text-5xl">
            Driving Digital Evolution
          </span>
        </h1>
        <p className="pt-3 text-gray-400  text-center text-sm md:text-lg w-full md:w-3/4 lg:w-1/2" >
          ZyntexaIT is an AI-driven web development agency that crafts sleek
          websites, powerful software, and smart automation solutions to fuel
          business growth with innovation and precision.
        </p>

        <div className="w-full md:w-[60rem] h-40 relative mt-5">
          <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={800}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(250px_150px_at_top,transparent_20%,white)]" id="services"></div>
        </div>


        <div className="mt-30 flex flex-col items-center">
          <h1 className="text-cyan-300 text-xl sm:text-2xl lg:text-3xl font-bold">
            Our Services
          </h1>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 w-full md:w-5/6 mt-10">
          <div className="w-full md:w-[30%] rounded-2xl bg-gray-950 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-103 hover:bg-green-950 p-4" data-aos="fade-left">
            <div className="flex flex-col items-center" >
              <MdWeb className="text-green-300 text-5xl" />
              <h1 className="text-white font-bold text-lg text-center mt-2">
                Web Application Development
              </h1>
            </div>
            <p className="text-gray-400 text-sm pt-2 text-center md:text-left">
              Building robust, scalable, and high-performance web applications
              from concept to deployment. We leverage the power of the MERN
              stack to deliver modern digital solutions for businesses and
              educational projects.
            </p>
            <ul className="text-white list-disc marker:text-cyan-400 pl-5 pt-3">
              <li>Express.js / Node.js (Server-Side Power)</li>
              <li>React.js (Modern UI/UX)</li>
              <li>FullStack Expertise</li>
            </ul>
          </div>
          <div className="w-full md:w-[30%] rounded-2xl shadow-cyan-300 bg-gray-950 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-103 hover:bg-orange-950 p-4" data-aos="fade-up">
            <div className="flex flex-col items-center">
              <BiSolidBadgeCheck className="text-orange-300 text-5xl" />
              <h1 className="text-white font-bold text-lg text-center mt-2">
                Scalable & High-Performance Solutions
              </h1>
            </div>
            <p className="text-gray-400 text-sm pt-2 text-center md:text-left">
              We ensure your web application is fast, secure, and ready to
              handle growth. Our MERN-based architecture guarantees scalability,
              fast load times, and superior user experience, regardless of
              traffic.
            </p>
            <ul className="text-white list-disc marker:text-cyan-400 pl-5 pt-3">
              <li>Real-time Data Flow (WebSockets)</li>
              <li>API Integration & Custom Endpoints</li>
              <li>Optimized Security Practices</li>
            </ul>
          </div>
          <div className="w-full md:w-[30%] rounded-2xl bg-gray-950 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-103 hover:bg-pink-950 p-4" data-aos="fade-right">
            <div className="flex flex-col items-center">
              <MdOutlineWbSunny className="text-pink-300 text-5xl" />
              <h1 className="text-white font-bold text-lg text-center mt-2">
                Modern UI/UX & Continuous Support
              </h1>
            </div>
            <p className="text-gray-400 text-sm pt-2 text-center md:text-left">
              We design intuitive, aesthetically pleasing, and responsive user
              interfaces using React. After launch, we provide ongoing support,
              bug fixing, and feature updates to keep your application running
              smoothly.
            </p>
            <ul className="text-white list-disc marker:text-cyan-400 pl-5 pt-3" id="team">
              <li>Clean & Modern User Interface</li>
              <li>Post-Launch Maintenance & Support</li>
              <li>Version Control with Git</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center" >
          <RiTeamFill className="text-cyan-400  text-3xl sm:text-4xl lg:text-5xl" />
          <h1 className="text-cyan-400 text-xl sm:text-2xl lg:text-3xl font-bold">
            About Our Team
          </h1>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 w-full md:w-5/6 mt-20 mb-20">
          <div className="w-full md:w-[30%] shadow-[0px_0px_20px_1px] shadow-cyan-900  rounded-2xl bg-gray-950 transition delay-150 duration-300 ease-in-out p-4" data-aos="flip-left">
            <div className="flex flex-col items-center">
              <img
                className="w-4/5 h-4/5 border-4 border-blue-950 rounded-full"
                src="/images/dhanushka.jpg"
              ></img>
              <div className="mt-4 flex flex-col items-center">
                <h1 className="font-semibold text-white text-lg">
                  Dhanushka Sandaruwan
                </h1>
                <h1 className="font-semibold text-cyan-400 text-sm">
                  Full stack Developer
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[30%] shadow-[0px_0px_20px_1px] shadow-cyan-900 rounded-2xl bg-gray-950 transition delay-150 duration-300 ease-in-out p-4" data-aos="flip-left">
            <div className="flex flex-col items-center">
              <img
                className="w-4/5 h-4/5 border-4 border-blue-950 rounded-full"
                src="/images/vihanga.jpg"
              ></img>
              <div className="mt-4 flex flex-col items-center">
                <h1 className="font-semibold text-white text-lg">
                  Vihanga Theekshana
                </h1>
                <h1 className="font-semibold text-cyan-400 text-sm">
                  Front-end Developer
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[30%] shadow-[0px_0px_20px_1px] shadow-cyan-900 rounded-2xl bg-gray-950 transition delay-150 duration-300 ease-in-out  p-4" data-aos="flip-left">
            <div className="flex flex-col items-center">
              <img
                className="w-4/5 h-4/5 border-4 border-blue-950 rounded-full"
                src="/images/shashin.jpg"
              ></img>
              <div className="mt-4 flex flex-col items-center">
                <h1 className="font-semibold text-white text-lg">
                  Shashin Deemantha
                </h1>
                <h1 className="font-semibold text-cyan-400 text-sm" id="about">
                  Marketing & Designer
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full p-4 gap-4" >
          {/* Left Column */}
          <div className="flex-1 p-5 rounded-2xl bg-gray-900 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-103" data-aos="zoom-in">
            <h1 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent text-xl md:text-3xl lg:text-4xl font-bold">
              About ZyntexaIT
            </h1>
            <p className="text-gray-400 pt-3 lg:text-lg pb-6">
              ZyntexaIT is a forward-thinking technology agency dedicated to
              accelerating business transformation through intelligent digital
              solutions. We specialize in AI-driven web development, custom
              software engineering, and smart automation designed to enhance
              operational efficiency and drive sustainable growth.
            </p>

          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-2 rounded-2xl p-3 bg-gray-900" data-aos="zoom-in">
            <div className="flex-1 rounded-2xl bg-gray-800 w-full text-gray-200 p-4 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-103">
              <h1 className="font-bold">Innovation Focused</h1>
              <span className="text-sm text-gray-300">
                We continuously explore emerging technologies to deliver
                cutting-edge, future-ready digital solutions tailored to your
                business needs.
              </span>
            </div>
            <div className="flex-1 rounded-2xl bg-gray-800 w-full text-gray-200 p-4 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-103">
              <h1 className="font-bold">Client-Oriented Excellence</h1>
              <span className="text-sm text-gray-300">
                Every project is built around our clients’ strategic goals,
                ensuring measurable outcomes and long-term value creation.
              </span>
            </div>
            <div className="flex-1 rounded-2xl bg-gray-800 w-full text-gray-200 p-4 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-103">
              <h1 className="font-bold">Quality & Precision</h1>
              <span className="text-xs text-gray-300" id="contact">
                Highest standards of technical excellence and project delivery,
                ensuring reliability, scalability, and lasting impact.
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 w-full flex justify-center p-10 m-4 rounded-2xl" data-aos="zoom-in-up">
          <form className="flex:col lg:flex items-center text-sm text-white gap-60">
            <div className="flex flex-col">
              <div>


                <div className="flex justify-center">
                  <img src={logo} alt="logo" className="w-20 h-20 rounded-full" />
                </div>

                <h1 className="text-4xl font-bold py-4 text-center">
                  <RotatingText
                    texts={["ZyntexaIT", "Driving", "Digital", "Evolution"]}
                    mainClassName="px-2 sm:px-2 md:px-3 text-cyan-400 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                  Let’s Get In Touch.
                </h1>
              </div>

              <div>
                <p className="max-md:text-sm text-gray-500 pb-10 text-center">
                  Or just reach out manually to us at{" "}
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@zyntexait.com" className="text-indigo-600">
                    info@zyntexait.com
                  </a>
                </p>
              </div>
            </div>

            <div className="max-w-96 w-full px-4">
              <Submitform />
            </div>
          </form>
        </div>

      </div>

      <div className="w-full h-[500px] relative">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          className="bg-black"
        />
        <div className="absolute bottom-0 w-full z-50">
          <Footer />
        </div>
      </div>
    </>
  );
}
