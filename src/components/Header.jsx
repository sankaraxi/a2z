import React, { useState, useEffect } from 'react';
import { Phone, ChevronDown, Menu, X, Shield, FileText, ArrowRight } from 'lucide-react';
import { FIRM_INFO } from '../data/firmInfo.js';
import { SERVICES } from '../data/servicesData.js';

export default function Header({ onOpenConsultation, onSelectService, activeService }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceClick = (service) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onSelectService(service);
  };

  return (
    <>
      {/* Top emergency / advisory ticker banner (subtle, non-flashy) */}
      <div className="bg-[#0B1325] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[#C5A059] font-medium tracking-wide">Gandhipuram, Coimbatore</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Direct Tax, GST & Corporate Advisory for MSMEs & Startups</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Mon–Sat: 9:30 AM – 7:00 PM</span>
            <span className="text-slate-600">|</span>
            <a 
              href={FIRM_INFO.phoneCallUrl} 
              className="text-[#E5C788] hover:text-white transition-colors font-medium flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>{FIRM_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E4DA] py-3'
            : 'bg-[#FAF9F5] border-b border-[#ECE7DC] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar: Responsive flex container with appropriate spacing */}
          <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
            
            {/* Zone 1: Brand Wordmark */}
            <a 
              href="/" 
              onClick={(e) => {
                if (activeService) {
                  e.preventDefault();
                  onSelectService(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="group flex items-center gap-2 sm:gap-3 text-slate-900 whitespace-nowrap shrink-0"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#0B1325] flex items-center justify-center border border-[#C5A059]/40 shadow-xs group-hover:border-[#C5A059] transition-colors shrink-0">
                <span className="font-serif text-[#C5A059] text-base sm:text-xl font-bold tracking-wider">A2Z</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#0B1325] leading-none">
                  A2Z Associates
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8A7242] font-semibold mt-0.5 sm:mt-1">
                  Tax & Compliance
                </span>
              </div>
            </a>

            {/* Zone 2: Primary Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  className="flex items-center gap-1.5 hover:text-[#0B1325] transition-colors py-2 whitespace-nowrap"
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#C5A059]' : ''}`} />
                </button>

                {/* Services Mega-Dropdown */}
                {servicesDropdownOpen && (
                  <div
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className="absolute top-full left-0 w-[580px] -ml-20 bg-white rounded-xl shadow-xl border border-[#E5E0D5] p-5 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  >
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A7242] pb-2 mb-2 border-b border-slate-100">
                        Tax & Compliance
                      </div>
                      <div className="space-y-1">
                        {SERVICES.filter(s => s.category === 'tax-compliance').map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceClick(service)}
                            className="w-full text-left p-2 rounded-lg hover:bg-[#FAF9F5] transition-colors group/item"
                          >
                            <div className="text-xs font-semibold text-slate-900 group-hover/item:text-[#8A7242]">
                              {service.title}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              {service.oneLineBenefit}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A7242] pb-2 mb-2 border-b border-slate-100">
                        Accounting & Advisory
                      </div>
                      <div className="space-y-1">
                        {SERVICES.filter(s => s.category !== 'tax-compliance').map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceClick(service)}
                            className="w-full text-left p-2 rounded-lg hover:bg-[#FAF9F5] transition-colors group/item"
                          >
                            <div className="text-xs font-semibold text-slate-900 group-hover/item:text-[#8A7242]">
                              {service.title}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              {service.oneLineBenefit}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs bg-[#FAF9F5] -mx-5 -mb-5 p-3 rounded-b-xl">
                      <span className="text-slate-600">Need a tailored retainer for your business?</span>
                      <button
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          onOpenConsultation();
                        }}
                        className="text-[#8A7242] font-semibold hover:underline flex items-center gap-1"
                      >
                        Request Custom Scope <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#how-we-work"
                onClick={() => activeService && onSelectService(null)}
                className="hover:text-[#0B1325] transition-colors whitespace-nowrap"
              >
                How We Work
              </a>

              <a
                href="#why-a2z"
                onClick={() => activeService && onSelectService(null)}
                className="hover:text-[#0B1325] transition-colors whitespace-nowrap"
              >
                Why A2Z
              </a>

              <a
                href="#compliance-calendar"
                onClick={() => activeService && onSelectService(null)}
                className="hover:text-[#0B1325] transition-colors whitespace-nowrap flex items-center gap-1"
              >
                <span>Due Dates</span>
              </a>

              <a
                href="#faqs"
                onClick={() => activeService && onSelectService(null)}
                className="hover:text-[#0B1325] transition-colors whitespace-nowrap"
              >
                Insights & FAQ
              </a>

              <a
                href="#contact"
                onClick={() => activeService && onSelectService(null)}
                className="hover:text-[#0B1325] transition-colors whitespace-nowrap"
              >
                Office
              </a>
            </nav>

            {/* Zone 3: Primary Action & Mobile Hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Phone direct (tablets and desktops) */}
              <a
                href={FIRM_INFO.phoneCallUrl}
                className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-800 hover:text-[#0B1325] px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap"
                title="Call Coimbatore Office"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="tabular-nums font-mono">{FIRM_INFO.phoneDisplay}</span>
              </a>

              {/* Consultation Button: Full text on sm+, compact 'Consult' on mobile */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="hidden sm:inline-flex px-3.5 py-2 text-xs font-semibold tracking-wide text-[#0B1325] bg-[#C5A059] hover:bg-[#B38E46] active:bg-[#9E7B35] rounded-md transition-all shadow-xs whitespace-nowrap cursor-pointer"
              >
                Book Free Consultation
              </button>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="sm:hidden px-2.5 py-1.5 text-xs font-bold tracking-wide text-[#0B1325] bg-[#C5A059] hover:bg-[#B38E46] rounded-md transition-all whitespace-nowrap cursor-pointer shrink-0"
              >
                Consult
              </button>

              {/* Mobile Menu Hamburger (Always visible on mobile without horizontal scroll) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-800 hover:text-slate-900 hover:bg-slate-100 rounded-lg shrink-0 cursor-pointer touch-manipulation border border-slate-200 sm:border-transparent"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8E4DA] bg-white px-4 pt-4 pb-6 mt-3 shadow-lg space-y-4 animate-in fade-in duration-150">
            <div className="space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                Navigation
              </div>
              <a
                href="#services"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (activeService) onSelectService(null);
                }}
                className="block px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-slate-50"
              >
                All 9 Services
              </a>
              <a
                href="#how-we-work"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (activeService) onSelectService(null);
                }}
                className="block px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-slate-50"
              >
                How We Work
              </a>
              <a
                href="#why-a2z"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (activeService) onSelectService(null);
                }}
                className="block px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-slate-50"
              >
                Why A2Z
              </a>
              <a
                href="#compliance-calendar"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (activeService) onSelectService(null);
                }}
                className="block px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-slate-50"
              >
                Statutory Compliance Due Dates
              </a>
              <a
                href="#faqs"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (activeService) onSelectService(null);
                }}
                className="block px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-slate-50"
              >
                Insights & FAQ
              </a>
              <a
                href="#contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (activeService) onSelectService(null);
                }}
                className="block px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-slate-50"
              >
                Gandhipuram Office & Map
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                Popular Practice Areas
              </div>
              <div className="grid grid-cols-2 gap-1 mt-1">
                {SERVICES.slice(0, 6).map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service)}
                    className="text-left px-3 py-1.5 text-xs text-slate-700 hover:text-[#8A7242] hover:bg-slate-50 rounded"
                  >
                    {service.shortTitle}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href={FIRM_INFO.phoneCallUrl}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call {FIRM_INFO.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 text-sm font-semibold text-[#0B1325] bg-[#C5A059] hover:bg-[#B38E46] rounded-md transition-colors"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
