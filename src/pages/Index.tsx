import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Blog } from "@/components/sections/Blog";

const Index = () => {
  return (
    <div className="relative">
      {/* Fixed Navigation - Centered and larger */}
      <Navigation className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 w-72" />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
        <Blog />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Nadun Madusanka. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
