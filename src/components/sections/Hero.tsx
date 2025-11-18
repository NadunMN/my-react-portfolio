import heroPortrait from "@/assets/hero-portrait.png";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left side - Text content */}
          <div className="flex-1 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <p className="text-terminal font-mono text-sm mb-8">
              <span className="mr-2">&gt;</span>Welcome to My Dev
            </p>
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-4">
              Nadun<br />Madusanka
            </h1>
          </div>

          {/* Center - Portrait */}
          <div className="flex-1 flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <img 
              src={heroPortrait} 
              alt="Nadun Madusanka - Developer Portrait" 
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* Right side - Hello World */}
          <div className="flex-1 flex justify-end animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <h2 className="text-5xl md:text-6xl font-bold">
              Hello World,
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
