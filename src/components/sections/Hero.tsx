import { TypeAnimation } from "react-type-animation";
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import TextPressure from '@/components/TextPressure';
import DecryptedText from '@/components/DecryptedText';



export function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [opacity, setOpacity] = useState(1);

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

          <div className="absolute top-0 left-0 z-20 pt-6 pl-6">
            <p className="text-gray-400">mood isn't fixed</p>
            <p className="text-white">go through my portfolio.</p>
          </div>
      
        {/* Main TextPressure Component */}
        <div className="flex-col items-center justify-center w-full max-w-7xl h-auto mb-12">
          <div style={{position: 'relative', height: '400px', width: '100%'}}>
            <TextPressure
              text="Hello!"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={20}
            />
          </div>

          <div >
            <p className="text-2xl text-white px-4 py-2">NADUN,  MADUSANKA</p>
          </div>
          
          
        </div>

        

      </div>

    </div>

    </div>
  );
}