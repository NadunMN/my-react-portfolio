import { TypeAnimation } from "react-type-animation";
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
     

      {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div> */}
      

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 lg:p-8">
        <div
          className={`transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <span className="text-white font-bold text-lg tracking-tight">
              Nadun Madusanka
            </span>
             
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-30 transition-opacity duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-center h-full">
          <nav className="space-y-8 text-center">
            {["Work", "About", "Services", "Contact"].map((item, index) => (
              <div
                key={item}
                className={`transition-all duration-500 delay-${index * 100} ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-5xl lg:text-7xl font-bold text-white hover:text-gray-400 transition-colors"
                >
                  {item}
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Content */}
      <div className=" relative z-10 flex flex-col justify-between min-h-[calc(100vh-100px)] px-6 lg:px-16 pb-12">
        {/* Main Headline */}
        <div className="flex-1 flex items-center">
          <div className="w-full">
            

            <div className="space-y-2 overflow-hidden absolute bottom-10 left-10">
              <h1
                className={`text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white transition-all duration-1000 delay-500 ${
                  isLoaded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  letterSpacing: "-0.02em",
                  lineHeight: "0.95",
                }}
              >
                Hello World,
              </h1>
              <h1
                className={`text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white transition-all duration-1000 delay-700 ${
                  isLoaded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  letterSpacing: "-0.02em",
                  lineHeight: "0.95",
                }}
              >
                I'm Nadun
              </h1>
              <h1
                className={`text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white transition-all duration-1000 delay-900 ${
                  isLoaded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  letterSpacing: "-0.02em",
                  lineHeight: "0.95",
                }}
              >
                {/* Coding Realm */}
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-10 right-10 flex flex-col lg:flex-row lg:items-end lg:justify-between ">
          <div className="lg:w-1/2"></div>

          <div
            className={`w-auto flex flex-col transition-all duration-1000 delay-1100 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-white/50 text-base mb-8 leading-relaxed max-w-xl ml-auto text-xl text-right">
              "Coding with purpose. Building with passion.
              I turn ideas into working code fast and clean."
            </p>

            <div className="flex justify-end space-x-4">
              <div className="lg:w-1/2"></div>

              <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full border border-white/20 transition-all duration-300 flex items-center space-x-3 hover:scale-105">
                <span className="font-medium">Get it now</span>
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};
