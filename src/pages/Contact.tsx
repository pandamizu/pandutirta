import { useState } from 'react';
import ContactCard from '../components/ContactCard';
import '../App.css';

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (type: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient flex flex-col">
      <nav className="w-full glass-nav">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-white">Pandu</a>
          </div>
        </div>
      </nav>
      
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