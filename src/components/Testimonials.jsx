import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Building2, MapPin, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, CLIENT_LOGOS } from '../data/testimonialsData.js';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-[#FAF9F5] border-b border-[#E8E4DA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8A7242] mb-3">
              <span>Client Voices & Case History</span>
              <span aria-hidden="true">·</span>
              <span>Regional Verification</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1325] tracking-tight leading-tight">
              Trusted by operators across Western Tamil Nadu.
            </h2>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-2.5 rounded-lg border border-[#D5CEBF] bg-white text-slate-700 hover:text-slate-900 hover:border-slate-400 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="p-2.5 rounded-lg border border-[#D5CEBF] bg-white text-slate-700 hover:text-slate-900 hover:border-slate-400 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Spotlight Card */}
        <div className="rounded-2xl bg-white border border-[#E5E0D5] p-8 md:p-12 shadow-sm relative">
          <Quote className="w-12 h-12 text-[#C5A059]/20 absolute top-8 right-8 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              {/* Highlight Metric Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF8F3] border border-[#E8E2D2] text-xs font-semibold text-[#8A7242] font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{current.highlightMetric}</span>
              </div>

              {/* Quote Statement */}
              <p className="font-serif text-xl sm:text-2xl text-slate-900 leading-relaxed italic">
                "{current.quote}"
              </p>

              {/* Client Credentials & City */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-base font-bold text-[#0B1325]">
                    {current.clientName} <span className="text-xs font-normal text-slate-400">[PLACEHOLDER]</span>
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {current.designation}, <span className="text-slate-800 font-semibold">{current.businessName}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{current.city}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-[11px] text-[#8A7242]">{current.verifiedYear}</span>
                </div>
              </div>
            </div>

            {/* Testimonial Side Dossier / Summary */}
            <div className="lg:col-span-4 bg-[#FAF9F5] rounded-xl p-6 border border-[#ECE7DC] space-y-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Industry Sector
              </div>
              <div className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#8A7242]" />
                <span>{current.industry}</span>
              </div>

              <div className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-[#EAE5DA]">
                "A2Z handles statutory documentation with genuine care and prompt communication. For business owners in Coimbatore who can't spend hours on tax portals, their advisory is indispensable."
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2 pt-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? "w-6 bg-[#0B1325]" : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Client Logos / Industry Sectors Row */}
        <div className="mt-14 pt-10 border-t border-[#E5E0D5]">
          <div className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Advising MSMEs Across Key Regional Manufacturing & Trade Sectors [PLACEHOLDERS]
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="rounded-lg bg-white p-4 border border-[#ECE7DC] text-center hover:border-[#C5A059]/50 transition-colors"
              >
                <div className="font-serif font-bold text-slate-800 text-xs sm:text-sm">
                  {logo.name}
                </div>
                <div className="text-[10px] text-slate-500 font-medium mt-1">
                  {logo.sector}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
