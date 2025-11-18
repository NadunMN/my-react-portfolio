import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10 animate-pulse-slow" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hello World greeting */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-sm">
              &lt;Hello World /&gt;
            </span>
          </div>
          
          {/* Main name */}
          <h1 className="text-7xl md:text-9xl font-black mb-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <span className="bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
              Nadun
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent via-foreground to-foreground bg-clip-text text-transparent">
              Madusanka
            </span>
          </h1>
          
          {/* Position */}
          <p className="text-2xl md:text-4xl font-bold text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Full Stack Developer
          </p>
          
          {/* Typing effect */}
          <div className="h-20 flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <TypeAnimation
              sequence={[
                'Building innovative web solutions',
                2000,
                'Crafting beautiful user experiences',
                2000,
                'Turning ideas into reality',
                2000,
                'Passionate about clean code',
                2000,
              ]}
              wrapper="p"
              speed={50}
              className="text-xl md:text-2xl text-accent font-mono"
              repeat={Infinity}
            />
          </div>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mt-12 animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-accent text-background font-bold rounded-lg hover:scale-105 transition-transform duration-200"
            >
              Get In Touch
            </a>
            <a 
              href="#work" 
              className="px-8 py-3 border-2 border-foreground text-foreground font-bold rounded-lg hover:bg-foreground hover:text-background transition-all duration-200"
            >
              View My Work
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <a href="#about" className="inline-block">
              <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center p-2 hover:border-accent transition-colors">
                <div className="w-1 h-3 bg-foreground rounded-full animate-bounce" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
