import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black mb-8">Get In Touch</h2>
        <div className="max-w-2xl">
          <p className="text-xl text-muted-foreground mb-8">
            I'm always open to new opportunities and interesting projects. Let's connect!
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button 
              variant="default" 
              size="lg"
              className="bg-accent hover:bg-accent/90"
            >
              Email Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
