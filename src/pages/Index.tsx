import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Blog } from "@/components/sections/Blog";

const Index = () => {
  return (
    <div className="relative">
      {/* Fixed Navigation - Centered and larger */}
      <Navigation />
      {/* Main Content */}
      <main>
        <Hero />

        <div>
          <About />
        </div>

        <div>
          <Experience />
        </div>

        <div>
          <Work />
        </div>

        <div>
          <Blog />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center sm:px-6">
          <p className="text-sm text-muted-foreground sm:text-base">
            © 2024 Nadun Madusanka. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
