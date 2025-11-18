import heroPortrait from "@/assets/hero-portrait.png";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left side - Name & Position */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <p className="text-terminal font-mono text-sm mb-6">
              <span className="mr-2">&gt;</span>Welcome to My Dev Space
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
              Nadun<br />Madusanka
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-bold mb-8">
              Full Stack Developer
            </p>
            <div className="h-16">
              <TypeAnimation
                sequence={[
                  'I build modern web applications',
                  2000,
                  'I create beautiful user interfaces',
                  2000,
                  'I solve complex problems',
                  2000,
                  'I love clean code',
                  2000,
                ]}
                wrapper="p"
                speed={50}
                className="text-lg text-accent font-mono"
                repeat={Infinity}
              />
            </div>
          </div>

          {/* Center - Portrait */}
          <div className="flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <img 
              src={heroPortrait} 
              alt="Nadun Madusanka - Full Stack Developer" 
              className="w-full max-w-md object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right side - Hello World */}
          <div className="flex justify-end animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <div className="text-right">
              <h2 className="text-5xl md:text-7xl font-black mb-4">
                Hello<br />World
              </h2>
              <p className="text-terminal font-mono text-lg">
                <span className="mr-2">&lt;/&gt;</span>Let's build something amazing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
