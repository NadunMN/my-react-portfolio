import React, { useEffect, useState } from "react";

export const About = () => {

  return (
    <section id="about" className="min-h-screen py-20 flex items-center bg-background">
      <div className="container mx-auto px-6 flex flex-col justify-center">

        {/* Main Content Layout */}
        <div className="items-center">
          {/* Content Section */}
          <div className="">
            <div className="">
              <p className="text-6xl text-justify text-white/80 indent-16 tracking-tight">
                Computer Science undergraduate passionate about backend development, system design, and networking, with experience in Java, PostgreSQL, and MVC architecture <sup className="text-red-500 text-2xl">ⓡ</sup>.
              </p>
              {/* <p className="text-xl text-white/80 leading-relaxed">
                Beyond technology, I enjoy hiking and exploring nature, which helps me maintain a balanced lifestyle 
                and brings a sense of adventure and curiosity that also influences how I approach problem-solving in technology.
              </p> */}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
            {/* Left: Image */}
            <div className="flex-shrink-0 w-full md:w-1/2">
              <img
                src="/Images/WhatsApp Image 2025-11-19 at 00.37.36_1f373920.jpg"
                alt="Nadun Madusanka"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2">
              <p className="text-xl text-justify text-white/80 leading-relaxed">
                I'm <span className="text-red-500">Nadun</span>. Beyond technology, I enjoy hiking and exploring nature,
                which helps me maintain a balanced lifestyle and brings a sense of adventure and curiosity
                that also influences how I approach problem-solving in technology.
              </p>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 px-6 py-3 border border-white/30 text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300 rounded-sm"
              >
                View Resume
              </a>

            </div>
          </div>



          
        </div>
      </div>
    </section>
  );
};

