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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 lg:px-16">

        <div className="absolute top-0 left-0 z-20 pt-6 pl-6 cursor-pointer" onClick={handleShift}>
          <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <p className="text-gray-400">mood isn't fixed</p>
            <p className="text-white">click here to shift it.</p>
          </ClickSpark>
        </div>


      
        {/* Main TextPressure Component */}
        <div className="flex flex-col items-center justify-center w-full h-auto">

          <div className="relative w-full overflow-hidden">
            {/* GIF at center top over the letters */}
            <div
              className="absolute z-10 overflow-hidden rounded-md pointer-events-none "
              style={{
                right: '15vw',
                // transform: 'translateX(-50%)',
                top: '0.5vw',
                width: 'clamp(10rem, 18vw, 30rem)',
                height: 'clamp(10rem, 15vw, 26rem)',
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
              className="absolute z-10 overflow-hidden rounded-md pointer-events-none "
              style={{
                right: '5vw',
                bottom: '5vw',
                width: 'clamp(20rem, 25vw, 30rem)',
                height: 'clamp(12rem, 17.5vw, 22rem)',
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
              className="absolute z-10 overflow-hidden rounded-md pointer-events-none "
              style={{
                left: '2vw',
                bottom: '5vw',
                width: 'clamp(20rem, 25vw, 30rem)',
                height: 'clamp(12rem, 17.5vw, 22rem)',
                opacity: gifIndex === 2 ? 1 : 0,
              }}
            >
              <img
                src="https://framerusercontent.com/images/sprKM5aTL8Wo6PRLFdeslRBYY.gif?scale-down-to=1024&width=4096&height=1714"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>

            <p className="font-bebas-neue text-bold text-white w-full text-center" style={{ fontSize: 'clamp(5rem, 30vw, 60rem)' }}>NADUN</p>
          </div>

          {/* Social Media Buttons */}
          <div className="flex items-center justify-center gap-4 absolute bottom-20 z-20">
            <a
              href="mailto:your.email@example.com"
              className="group relative p-4 rounded-full border-2 border-white/20 hover:border-red-500 bg-white/5 hover:bg-red-500/10 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6 text-white group-hover:text-red-500 transition-colors duration-300" />
            </a>

            <a
              href="https://github.com/NadunMN"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full border-2 border-white/20 hover:border-red-500 bg-white/5 hover:bg-red-500/10 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6 text-white group-hover:text-red-500 transition-colors duration-300" />
            </a>

            <a
              href="https://linkedin.com/in/nadun-madusanka-mn"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full border-2 border-white/20 hover:border-red-500 bg-white/5 hover:bg-red-500/10 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6 text-white group-hover:text-red-500 transition-colors duration-300" />
            </a>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full border-2 border-white/20 hover:border-red-500 bg-white/5 hover:bg-red-500/10 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <FiInstagram className="w-6 h-6 text-white group-hover:text-red-500 transition-colors duration-300" />
            </a>

            <a
              href="https://discord.com/users/youruserid"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full border-2 border-white/20 hover:border-red-500 bg-white/5 hover:bg-red-500/10 transition-all duration-300 hover:scale-110"
              aria-label="Discord"
            >
              <SiDiscord className="w-6 h-6 text-white group-hover:text-red-500 transition-colors duration-300" />
            </a>
          </div>

          {/* <p className="text-2xl text-white tracking-widest text-center">NADUN, MADUSANKA</p> */}

        </div>

        

      </div>

    </div>

    </div>
  );
}