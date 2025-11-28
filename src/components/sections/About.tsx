import Folder from '@/components/Folder'

export const About = () => {
  // Sample portfolio items for the folder
  const portfolioItems = [
    {
      id: '1',
      title: 'React Portfolio',
      image: '/public/Images/WhatsApp Image 2025-11-19 at 00.19.37_c357a189.jpg', // Add your image paths
      description: 'A modern React portfolio showcasing my development skills and projects.'
    },
    {
      id: '2',
      title: 'E-commerce App',
      image: '/public/Images/2022_05_26_21_02_IMG_1786.JPG', // Add your image paths
      description: 'Full-stack e-commerce application built with React and Node.js.'
    },
    {
      id: '3',
      title: 'Dashboard UI',
      image: '/public/Images/3982ace2-1d80-4614-8572-dbeb09511827.png', // Add your image paths
      description: 'Interactive dashboard with data visualization and analytics.'
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 flex items-center bg-background">
      <div className="container mx-auto px-6 flex flex-col justify-center">
        {/* Header */}
        <div className="text-left">
          <h2 className="text-6xl font-black mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-white/80 leading-relaxed">
                I'm a passionate developer who loves creating innovative solutions and bringing ideas to life through code.
              </p>
              <p className="text-xl text-white/80 leading-relaxed">
                With expertise in modern web technologies, I focus on building user-friendly, performant, and scalable applications.
              </p>
            </div>
          </div>


 {/* Visual Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-96 flex items-center justify-center">
              <div className="absolute inset-0  rounded-7xl blur-3xl"></div>
              <div className="relative bg-black/20 backdrop-blur-2xl rounded-xl p-8 w-full h-full flex items-center justify-center">
                <Folder size={3} color="#5227FF" items={portfolioItems} className="custom-folder" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

