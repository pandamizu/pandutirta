import React from 'react';
import { Mail, Phone, Instagram, Copy, Check } from 'lucide-react';

interface ContactCardProps {
  email: string;
  phone: string;
  instagram: string;
  copied: string | null;
  onCopy: (type: string, value: string) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  email, 
  phone, 
  instagram,
  copied,
  onCopy
}) => {
  return (
    <div className="glass rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">Contact Information</h2>
      
      <div className="space-y-5">
        <div className="contact-item flex items-center rounded-xl p-4 bg-white/10">
          <div className="p-3 rounded-full bg-white/20 mr-4">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-white/80 text-sm">Email</p>
            <p className="text-white font-medium">{email}</p>
          </div>
          <button 
            className={`copy-btn p-2 rounded-lg ${copied === 'email' ? 'bg-green-400/30' : 'bg-white/10'}`}
            onClick={() => onCopy('email', email)}
            aria-label="Copy email"
          >
            {copied === 'email' ? (
              <Check className="h-5 w-5 text-white" />
            ) : (
              <Copy className="h-5 w-5 text-white" />
            )}
          </button>
        </div>

        <div className="contact-item flex items-center rounded-xl p-4 bg-white/10">
          <div className="p-3 rounded-full bg-white/20 mr-4">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-white/80 text-sm">WhatsApp</p>
            <p className="text-white font-medium">{phone}</p>
          </div>
          <button 
            className={`copy-btn p-2 rounded-lg ${copied === 'phone' ? 'bg-green-400/30' : 'bg-white/10'}`}
            onClick={() => onCopy('phone', phone)}
            aria-label="Copy phone number"
          >
            {copied === 'phone' ? (
              <Check className="h-5 w-5 text-white" />
            ) : (
              <Copy className="h-5 w-5 text-white" />
            )}
          </button>
        </div>

        <div className="contact-item flex items-center rounded-xl p-4 bg-white/10">
          <div className="p-3 rounded-full bg-white/20 mr-4">
            <Instagram className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-white/80 text-sm">Instagram</p>
            <p className="text-white font-medium">@{instagram}</p>
          </div>
          <a 
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="copy-btn p-2 rounded-lg bg-white/10 hover:bg-white/20"
            aria-label="Visit Instagram profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-white/70 text-sm">
          Prefer to reach out directly? Click or tap to contact me
        </p>
      </div>
    </div>
  );
};

export default ContactCard;