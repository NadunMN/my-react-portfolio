import { TypeAnimation } from "react-type-animation";
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import TextPressure from '@/components/TextPressure';
import DecryptedText from '@/components/DecryptedText';



import { RetroGrid } from "@/components/ui/retro-grid";

export function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
              
          <div className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 lg:px-16">
      
        {/* Main TextPressure Component */}
        <div className="flex items-center justify-center w-full max-w-7xl h-auto mb-12">
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
        </div>

        {/* DecryptedText Components */}
        <div className="flex flex-col items-center space-y-6">
          <DecryptedText
            text="Welcome to my 404"
            speed={50}
            maxIterations={30}
            characters="ABCD1234!@#$%^&*()"
            className="text-white text-3xl md:text-4xl lg:text-5xl font-light tracking-wide font-dancingScript"
            parentClassName="text-center"
            encryptedClassName="text-white/50"
            animateOn="view"
            revealDirection="start"
            sequential={true}
          />
          <DecryptedText
            text="I'm Nadun Madusanka."
            speed={50}
            maxIterations={30}
            characters="ABCD1234!@#$%^&*()"
            className="text-white text-3xl md:text-4xl lg:text-5xl font-light tracking-wide font-dancingScript"
            parentClassName="text-center"
            encryptedClassName="text-white/50"
            animateOn="view"
            revealDirection="start"
            sequential={true}
          />
        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
    </div>

      <RetroGrid />
    </div>
  );
}