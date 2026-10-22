import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight, ExternalLink, X } from 'lucide-react';
import { FIRM_INFO } from '../data/firmInfo.js';
import { SERVICES } from '../data/servicesData.js';

export default function Footer({ onSelectService, onOpenConsultation }) {
  const [showMapModal, setShowMapModal] = useState(false);

  return (
    <>
      <footer className="bg-[#070D1B] text-slate-300 border-t border-slate-800 pt-16 pb-24 lg:pb-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            
            {/* Column 1: Brand & Office Coordinates (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0B1325] border border-[#C5A059]/40 flex items-center justify-center">
                  <span className="font-serif text-[#C5A059] text-xl font-bold">A2Z</span>
                </div>
                <div>
                  <div className="font-serif text-xl font-bold text-white tracking-tight">
                    A2Z Associates
                  </div>
                  <div className="text-[10px] text-[#C5A059] uppercase tracking-widest font-semibold">
                    Tax, Compliance & Advisory
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Boutique tax, accounting, audit liaison, and corporate regulatory advisory firm serving manufacturing mills, traders, and founders across Coimbatore and Western Tamil Nadu.
              </p>

              {/* Physical Office Address */}
              <div className="pt-2 space-y-2 text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-100 block">Coimbatore Office</span>
                    <span className="text-slate-400">{FIRM_INFO.address.full}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <a href={FIRM_INFO.phoneCallUrl} className="text-[#E5C788] hover:text-white font-mono font-medium">
                    {FIRM_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span className="text-slate-400">{FIRM_INFO.hours.weekdays}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowMapModal(true)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] hover:text-[#E5C788] underline cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>View Gandhipuram Location Map</span>
                </button>
              </div>
            </div>

            {/* Column 2: 9 Specialized Services (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-2">
                Specialized Practice Areas
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onSelectService(s)}
                    className="text-left text-slate-400 hover:text-[#C5A059] transition-colors flex items-center gap-1.5 group cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#C5A059] transition-colors" />
                    <span>{s.shortTitle}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3: Quick Navigation & Consultation Action (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                Direct Inquiries
              </div>

              <ul className="space-y-2 text-slate-400">
                <li><a href="#how-we-work" className="hover:text-white">Our 4-Step Filing Process</a></li>
                <li><a href="#why-a2z" className="hover:text-white">Why Businesses Trust A2Z</a></li>
                <li><a href="#compliance-calendar" className="hover:text-white">Statutory Due Dates Calendar</a></li>
                <li><a href="#faqs" className="hover:text-white">Frequently Answered Questions</a></li>
                <li><a href="#contact" className="hover:text-white">Gandhipuram Office Location</a></li>
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-[#0B1325] bg-[#C5A059] hover:bg-[#B38E46] rounded-md transition-colors text-center cursor-pointer block"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>

          </div>

          {/* Credentials & Memberships Strip */}
          <div className="py-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-slate-400 text-[11px]">
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span className="font-semibold uppercase tracking-wider text-slate-200">
                Registered With / Member Of [PLACEHOLDERS]:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-slate-400">
              {FIRM_INFO.credentials.map((cred, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="text-[#C5A059]">✓</span>
                  <span>{cred.label}</span>
                  <span className="text-[10px] text-slate-500 font-mono">({cred.status})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} A2Z Associates, Coimbatore. All rights reserved.
            </div>

            <div className="text-slate-500 max-w-xl text-left md:text-right">
              Disclaimer: The information provided on this website is for general informational and educational purposes only and does not constitute formal legal or chartered accounting advice. Tax rates and statutory thresholds must be verified for your specific case facts.
            </div>
          </div>

        </div>
      </footer>

      {/* Google Maps Modal */}
      {showMapModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in"
          onClick={() => setShowMapModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 relative text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C5A059]" />
                <h3 className="font-serif text-lg font-bold text-[#0B1325]">
                  A2Z Associates Office Location
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowMapModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-300 h-72 w-full bg-slate-100">
              <iframe
                title="A2Z Associates Gandhipuram Location"
                src={FIRM_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-slate-600">
                <strong>Address:</strong> {FIRM_INFO.address.full}
              </div>
              <a
                href={FIRM_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#0B1325] text-white hover:bg-slate-800 transition-colors shrink-0"
              >
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
