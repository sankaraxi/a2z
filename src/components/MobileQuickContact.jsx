import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { FIRM_INFO } from '../data/firmInfo.js';

export default function MobileQuickContact() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B1325]/95 backdrop-blur-md border-t border-slate-800 p-2 shadow-2xl safe-area-inset-bottom">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        {/* Direct Call Button */}
        <a
          href={FIRM_INFO.phoneCallUrl}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold tracking-wide transition-colors"
          aria-label="Call A2Z Associates"
        >
          <Phone className="w-4 h-4 text-[#C5A059]" />
          <span>Call Advisor</span>
        </a>

        {/* WhatsApp Direct Button */}
        <a
          href={FIRM_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#C5A059] hover:bg-[#B38E46] text-[#0B1325] text-xs font-bold tracking-wide transition-colors"
          aria-label="Chat with A2Z Associates on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-[#0B1325]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
