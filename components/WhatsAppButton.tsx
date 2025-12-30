import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${COMPANY_INFO.whatsappClean}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 flex items-center gap-2 group animate-bounce-subtle"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm">
        تواصل معنا
      </span>
    </a>
  );
};