import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6"; // Instagram icon

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            {/* 🔹 Your Name - Visible Immediately */}
            <br></br>
            <h1
              className="text-2xl md:text-4xl font-display font-semibold leading-tight mb-4 text-[#044566]"
              style={{
                letterSpacing: "0px",
                textShadow: "1px 1.5px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              Misri Shah
            </h1>

            <span
              className="inline-block py-2 px-1 mb-10 bg-gray-100 text-sm font-medium rounded-full animate-fade-in opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              Aspiring Artist
            </span>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in opacity-0"
              style={{ animationDelay: "0.4s" }}
            >
              TRANSFORMING{" "}
              <span className="relative">
                IDEAS
                <span className="absolute bottom-1 left-0 w-full h-2 -z-10"></span>
              </span>{" "}
              INTO TIMELESS ART
            </h2>

            <p
              className="text-lg md:text-xl text-gray-600 mb-2 animate-fade-in opacity-0 font-bold"
              style={{ animationDelay: "0.5s" }}
            >
              PORTFOLIO THAT BLENDS CREATIVITY, PASSION & PURPOSE.
            </p>
            <p
              className="text-lg md:text-xl text-gray-900 mb-8 max-w-lg animate-fade-in opacity-0 italic"
              style={{ animationDelay: "0.6s" }}
            >
              A space where art meets passion & ideas come to life.
            </p>

            {/* Buttons */}
            <div
              className="flex space-x-4 animate-fade-in opacity-0"
              style={{ animationDelay: "0.8s" }}
            >
              <button
                onClick={() => {
                  const workSection = document.getElementById("work");
                  if (workSection) {
                    workSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-all duration-300"
              >
                View Work
              </button>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-500 transition-colors duration-300"
              >
                Contact Me
              </button>
            </div>

            {/* 🔥 Improved "Let's Connect" Section (Wider & Left-Aligned) */}
            <div
              className="connect-box mt-10 p-6 bg-gray-100 rounded-xl shadow-lg w-full max-w-xl animate-fade-in opacity-0"
              style={{ animationDelay: "1s" }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                <u>Let's Connect</u>
              </h3>

              <div className="space-y-3 text-left">
                <p className="flex items-center space-x-3">
                  <FaEnvelope className="text-black text-xl" />
                  <a
                    href="mailto:misri.shah03@gmail.com"
                    className="text-lg text-gray-700 hover:text-black transition-colors"
                  >
                    misri.shah03@gmail.com
                  </a>
                </p>

                <p className="flex items-center space-x-3">
                  <FaPhoneAlt className="text-black text-xl" />
                  <a
                    href="tel:+919427586057"
                    className="text-lg text-gray-700 hover:text-black transition-colors"
                  >
                    +91 94275 86057
                  </a>
                </p>

                <p className="flex items-center space-x-3">
                  <FaInstagram className="text-pink-600 text-2xl" />
                  <a
                    href="https://instagram.com/creative_sane"
                    target="_blank"
                    className="text-lg text-gray-700 hover:text-black transition-colors"
                  >
                    @creative_sane
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 🔹 Image Section (No Hover Tilt Effect) */}
          <div
            className="w-full lg:w-1/2 relative animate-fade-in opacity-0"
            style={{ animationDelay: "1s" }}
          >
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=800&q=80"
                alt="Artistic Portfolio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
