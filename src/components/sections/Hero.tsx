import React, { useState, useEffect } from "react";
import ClickSpark from '@/components/ClickSpark';
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";


export function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-16">

        {/* "mood isn't fixed" — pushed down on mobile to avoid nav overlap */}
        <div className="absolute top-0 left-0 z-20 pt-20 sm:pt-6 pl-4 sm:pl-6 cursor-pointer" onClick={handleShift}>
          <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <p className="text-gray-400 text-sm sm:text-base">mood isn't fixed</p>
            <p className="text-white text-sm sm:text-base">click here to shift it.</p>
          </ClickSpark>
        </div>


      
        {/* Main Name + GIFs */}
        <div className="flex flex-col items-center justify-center w-full h-auto">

          <div className="relative w-full overflow-hidden">
            {/* GIF at center top — hidden on small mobile, visible md+ */}
            <div
              className="absolute z-10 overflow-hidden rounded-md pointer-events-none hidden sm:block"
              style={{
                right: '15vw',
                top: '0.5vw',
                width: 'clamp(8rem, 18vw, 30rem)',
                height: 'clamp(8rem, 15vw, 26rem)',
                opacity: gifIndex === 0 ? 1 : 0,
              }}
            >
              <img
                src="https://framerusercontent.com/images/4v6kumukPZJjsiCnGvFa6QEH54.gif?scale-down-to=512&width=2360&height=1640"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* GIF at bottom-right — hidden on small mobile */}
            <div
              className="absolute z-10 overflow-hidden rounded-md pointer-events-none hidden sm:block"
              style={{
                right: '5vw',
                bottom: '5vw',
                width: 'clamp(12rem, 25vw, 30rem)',
                height: 'clamp(8rem, 17.5vw, 22rem)',
                opacity: gifIndex === 1 ? 1 : 0,
              }}
            >
              <img
                src="https://framerusercontent.com/images/2Y2aRWruDx5l9007pv7J6AZ0E.gif?width=2360&height=1640"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* GIF at bottom-left — hidden on small mobile */}
            <div
              className="absolute z-10 overflow-hidden rounded-md pointer-events-none hidden sm:block"
              style={{
                left: '2vw',
                bottom: '5vw',
                width: 'clamp(12rem, 25vw, 30rem)',
                height: 'clamp(8rem, 17.5vw, 22rem)',
                opacity: gifIndex === 2 ? 1 : 0,
              }}
            >
              <img
                src="https://framerusercontent.com/images/sprKM5aTL8Wo6PRLFdeslRBYY.gif?scale-down-to=1024&width=4096&height=1714"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Mobile-only single GIF centered below the name */}
            <div
              className="relative z-10 overflow-hidden rounded-md pointer-events-none mx-auto mt-4 block sm:hidden"
              style={{
                width: '80vw',
                maxWidth: '320px',
                height: '44vw',
                maxHeight: '176px',
              }}
            >
              <img
                src={
                  gifIndex === 0
                    ? "https://framerusercontent.com/images/4v6kumukPZJjsiCnGvFa6QEH54.gif?scale-down-to=512&width=2360&height=1640"
                    : gifIndex === 1
                    ? "https://framerusercontent.com/images/2Y2aRWruDx5l9007pv7J6AZ0E.gif?width=2360&height=1640"
                    : "https://framerusercontent.com/images/sprKM5aTL8Wo6PRLFdeslRBYY.gif?scale-down-to=1024&width=4096&height=1714"
                }
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>

            <p
              className="font-bebas-neue font-bold text-white w-full text-center"
              style={{ fontSize: 'clamp(3.5rem, 22vw, 20rem)' }}
            >
              NADUN
            </p>
          </div>

          {/* Social Media Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 absolute bottom-12 sm:bottom-20 z-20 px-4">
            <a
              href="mailto:nadunmaddepola@gmail.com"
              className="group relative p-3 sm:p-4 rounded-full border-2 border-white/20 hover:border-red-500 bg-white/5 hover:bg-red-500/10 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-red-500 transition-colors duration-300" />
            </a>

            <a
              href="https://github.com/NadunMN"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 sm:p-4 rounded-full border-2 border-white/20 hover:border-red-500 bg-white/5 hover:bg-red-500/10 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-red-500 transition-colors duration-300" />
            </a>

            <a
              href="https://linkedin.com/in/nadun-madusanka-mn"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 sm:p-4 rounded-full border-2 border-white/20 hover:border-red-500 bg-white/5 hover:bg-red-500/10 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-red-500 transition-colors duration-300" />
            </a>

            <a
              href="https://www.instagram.com/nadu_nm/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 sm:p-4 rounded-full border-2 border-white/20 hover:border-red-500 bg-white/5 hover:bg-red-500/10 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <FiInstagram className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-red-500 transition-colors duration-300" />
            </a>

            <a
              href="https://discord.com/users/youruserid"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 sm:p-4 rounded-full border-2 border-white/20 hover:border-red-500 bg-white/5 hover:bg-red-500/10 transition-all duration-300 hover:scale-110"
              aria-label="Discord"
            >
              <SiDiscord className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-red-500 transition-colors duration-300" />
            </a>
          </div>

        </div>

        

      </div>

    </div>

    </div>
  );
}