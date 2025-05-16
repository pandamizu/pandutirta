import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import ContactCard from '../components/ContactCard';
import { Mail } from 'lucide-react'; // untuk konsistensi tombol
import '../App.css';

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('contact');

  const handleCopy = async (type: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contact') return;
    if (sectionId === 'portfolio') {
      window.location.href = '/portfolio';
      return;
    }
    window.location.href = `/#${sectionId}`;
  };

  return (
    <div className="min-h-screen bg-gradient flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-white">Pandu</a>
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

      {/* Tombol Back to Home */}
      <div className="pt-24 px-6">
        <a
          href="/"
          className="inline-flex items-center text-white hover:text-white/80"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </a>
      </div>

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in">
            Get in Touch
          </h1>
          <div className="flex justify-center animate-fade-in delay-200">
            <ContactCard
              email="pandu@example.com"
              phone="+1234567890"
              instagram="pandu.design"
              copied={copiedField}
              onCopy={handleCopy}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
