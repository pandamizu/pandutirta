import { useState } from 'react';
import { ChevronDown, Monitor, Video, Palette, ExternalLink, Mail } from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contact') {
      window.location.href = '/contact';
      return;
    }
    if (sectionId === 'portfolio') {
      window.location.href = '/portfolio';
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Pandu</h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-white hover:text-white/80 capitalize ${
                    activeSection === section ? 'font-semibold' : 'font-normal'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm Pandu
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in delay-200">
            3D Product Designer • Video Editor • UI/UX Designer
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-12 animate-fade-in delay-300 max-w-2xl mx-auto">
            Crafting immersive digital experiences through creative design and storytelling
          </p>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="btn-primary animate-fade-in delay-400"
          >
            View My Work
          </button>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/50 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-white/90 text-lg">
                I'm a multidisciplinary designer passionate about creating engaging digital experiences. 
                With expertise in 3D design, video editing, and UI/UX, I bring ideas to life through 
                creative storytelling and innovative design solutions.
              </p>
              <p className="text-white/90 text-lg">
                My approach combines technical precision with artistic vision, ensuring each project 
                delivers both aesthetic appeal and functional excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: 'Blender', icon: Monitor, desc: '3D Modeling & Animation' },
                { name: 'Premiere Pro', icon: Video, desc: 'Video Editing' },
                { name: 'Figma', icon: Palette, desc: 'UI/UX Design' },
                { name: 'Photoshop', icon: Monitor, desc: 'Image Editing' },
              ].map((tool) => (
                <div key={tool.name} className="glass p-6 rounded-xl text-center">
                  <tool.icon className="w-8 h-8 text-white mb-3 mx-auto" />
                  <h3 className="text-white font-semibold mb-2">{tool.name}</h3>
                  <p className="text-white/70 text-sm">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '3D Product Design',
                icon: Monitor,
                description: 'High-quality 3D visualization for products, packaging, and marketing materials',
              },
              {
                title: 'YouTube Shorts Editing',
                icon: Video,
                description: 'Engaging short-form video content optimized for maximum reach and engagement',
              },
              {
                title: 'Instagram Content Design',
                icon: Palette,
                description: 'Eye-catching social media content that builds brand presence and engagement',
              },
            ].map((service) => (
              <div key={service.title} className="glass p-8 rounded-xl text-center">
                <service.icon className="w-12 h-12 text-white mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-white/80 mb-6">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;