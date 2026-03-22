import React, { useState, useEffect } from "react";
import ClickSpark from '@/components/ClickSpark';
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";


export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [gifIndex, setGifIndex] = useState(0);

  const handleShift = () => setGifIndex((prev) => (prev + 1) % 3);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeHeight = window.innerHeight * 0.6;
      const newOpacity = Math.max(0, 1 - scrollY / fadeHeight);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl"
      style={{ opacity, transition: "opacity 0.1s ease-out" }}
    >
              
          <div className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/Images/wb2I6wF-limbo-wallpaper.jpg')" }}
      />
      {/* Blur + Darken Overlay */}
      <div className="absolute inset-0 z-0 backdrop-blur-sm bg-black/80" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-3 sm:px-6 lg:px-16">

        <div className="absolute left-0 top-0 z-20 cursor-pointer pl-4 pt-4 sm:pl-6 sm:pt-6" onClick={handleShift}>
          <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <p className="text-xs text-gray-400 sm:text-sm">mood isn't fixed</p>
            <p className="text-sm text-white sm:text-base">click here to shift it.</p>
          </ClickSpark>
        </div>


      
        {/* Main TextPressure Component */}
        <div className="flex h-auto w-full flex-col items-center justify-center">

          <div className="relative w-full overflow-hidden">
            {/* GIF at center top over the letters */}
            <div
              className="pointer-events-none absolute right-[min(12vw,8rem)] top-[clamp(0.25rem,2vw,1rem)] z-10 hidden overflow-hidden rounded-md sm:block"
              style={{
                width: 'clamp(7rem, 22vw, 20rem)',
                height: 'clamp(6rem, 18vw, 16rem)',
                opacity: gifIndex === 0 ? 1 : 0,
              }}
            >
              <img
                src="https://framerusercontent.com/images/4v6kumukPZJjsiCnGvFa6QEH54.gif?scale-down-to=512&width=2360&height=1640"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* GIF at bottom-right of last N */}
            <div
              className="pointer-events-none absolute bottom-[clamp(0.75rem,4vw,3rem)] right-[max(0.75rem,4vw)] z-10 hidden overflow-hidden rounded-md md:block"
              style={{
                width: 'clamp(10rem, 24vw, 22rem)',
                height: 'clamp(6rem, 15vw, 16rem)',
                opacity: gifIndex === 1 ? 1 : 0,
              }}
            >
              <img
                src="https://framerusercontent.com/images/2Y2aRWruDx5l9007pv7J6AZ0E.gif?width=2360&height=1640"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* GIF at bottom-left of first N */}
            <div
              className="pointer-events-none absolute bottom-[clamp(0.75rem,4vw,3rem)] left-[max(0.75rem,2vw)] z-10 hidden overflow-hidden rounded-md md:block"
              style={{
                width: 'clamp(10rem, 24vw, 22rem)',
                height: 'clamp(6rem, 15vw, 16rem)',
                opacity: gifIndex === 2 ? 1 : 0,
              }}
            >
              <img
                src="https://framerusercontent.com/images/sprKM5aTL8Wo6PRLFdeslRBYY.gif?scale-down-to=1024&width=4096&height=1714"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>

            <p className="font-bebas-neue text-bold w-full text-center text-white" style={{ fontSize: 'clamp(2.75rem, 24vw, 60rem)' }}>NADUN</p>
          </div>

          {/* Social Media Buttons */}
          <div className="absolute bottom-8 left-1/2 z-20 flex w-[calc(100%-2rem)] -translate-x-1/2 items-center justify-center gap-2 px-1 sm:bottom-12 sm:w-auto sm:gap-4 md:bottom-20">
            <a
              href="mailto:nadunmaddepola@gmail.com"
              className="group relative rounded-full border-2 border-white/20 bg-white/5 p-3 transition-all duration-300 hover:scale-110 hover:border-red-500 hover:bg-red-500/10 sm:p-4"
              aria-label="Email"
            >
              <FiMail className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-red-500 sm:h-6 sm:w-6" />
            </a>

            <a
              href="https://github.com/NadunMN"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-full border-2 border-white/20 bg-white/5 p-3 transition-all duration-300 hover:scale-110 hover:border-red-500 hover:bg-red-500/10 sm:p-4"
              aria-label="GitHub"
            >
              <FiGithub className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-red-500 sm:h-6 sm:w-6" />
            </a>

            <a
              href="https://linkedin.com/in/nadun-madusanka-mn"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-full border-2 border-white/20 bg-white/5 p-3 transition-all duration-300 hover:scale-110 hover:border-red-500 hover:bg-red-500/10 sm:p-4"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-red-500 sm:h-6 sm:w-6" />
            </a>

            <a
              href="https://www.instagram.com/nadu_nm/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-full border-2 border-white/20 bg-white/5 p-3 transition-all duration-300 hover:scale-110 hover:border-red-500 hover:bg-red-500/10 sm:p-4"
              aria-label="Instagram"
            >
              <FiInstagram className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-red-500 sm:h-6 sm:w-6" />
            </a>

            <a
              href="https://discord.com/users/youruserid"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-full border-2 border-white/20 bg-white/5 p-3 transition-all duration-300 hover:scale-110 hover:border-red-500 hover:bg-red-500/10 sm:p-4"
              aria-label="Discord"
            >
              <SiDiscord className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-red-500 sm:h-6 sm:w-6" />
            </a>
          </div>

          {/* <p className="text-2xl text-white tracking-widest text-center">NADUN, MADUSANKA</p> */}

        </div>

        

      </div>

    </div>

    </div>
  );
}