import React from 'react';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, Clock, Landmark } from 'lucide-react';
import { FIRM_INFO } from '../data/firmInfo.js';

export default function Hero({ onOpenConsultation }) {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E8E4DA] bg-[#FAF9F5] bg-ledger-pattern">
      {/* Subtle architectural ambient gradient (subdued, private-banking aesthetic) */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 pointer-events-none bg-gradient-to-br from-[#E2D8C0] to-transparent" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Headline & Value Proposition + Architectural Ledger Monogram Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Proposition, Local Context & Action Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Practice Area Trust Tag (Unboxed, clean metadata discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8A7242]">
              <span>Gandhipuram, Coimbatore</span>
              <span aria-hidden="true">·</span>
              <span>Tamil Nadu Compliance Practice</span>
              <span aria-hidden="true">·</span>
              <span>Est. 2012 [PLACEHOLDER]</span>
            </div>

            {/* Main Headline: Positioning A2Z as the compliance partner for growing businesses */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#0B1325] leading-[1.15] tracking-tight [text-wrap:balance]">
              The compliance and regulatory partner for Coimbatore’s growing businesses.
            </h1>

            {/* Sub-line naming Coimbatore, MSMEs, accuracy, deadlines, and a direct human contact */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              We provide end-to-end statutory taxation, GST management, audit-ready bookkeeping, and business incorporation for manufacturers, traders, and founders across Coimbatore and Western Tamil Nadu. Accurate filings, guaranteed deadlines, and a senior practitioner you can reach directly on the phone.
            </p>

            {/* Primary Action Buttons (Max 1 primary CTA block + secondary direct contact) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#0B1325] bg-[#C5A059] hover:bg-[#B38E46] active:bg-[#9E7B35] rounded-lg transition-all shadow-sm hover:shadow group cursor-pointer whitespace-nowrap"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#0B1325] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={FIRM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-[#D5CEBF] hover:border-slate-400 rounded-lg transition-all shadow-xs whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Us Direct</span>
              </a>
            </div>

            {/* Direct Assurance bullets */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8A7242]" />
                <span>Zero Late-Fee Guarantee on verified client data</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8A7242]" />
                <span>Direct single point of contact (No call centers)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8A7242]" />
                <span>Physical office in Gandhipuram, Coimbatore</span>
              </div>
            </div>

          </div>

          {/* Right Column: Quiet Luxury Practice Spotlight & Office Dossier Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0B1325] text-white p-7 sm:p-8 shadow-xl border border-slate-800 bg-ledger-dark overflow-hidden">
              
              {/* Gold accent hairline */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-80" />

              {/* Header inside card */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#162035] border border-[#C5A059]/40 flex items-center justify-center">
                    <Landmark className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Practice Overview</div>
                    <div className="text-[11px] text-slate-400 font-mono">Venky Complex, Gandhipuram</div>
                  </div>
                </div>
                <div className="text-[11px] text-[#C5A059] font-medium border border-[#C5A059]/30 rounded px-2 py-0.5">
                  FY 2026–27 Ready
                </div>
              </div>

              {/* Core advisory areas quick ledger */}
              <div className="py-6 space-y-4">
                <div className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                  Core Mandates Handled
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-start justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">GST Registration & Monthly GSTR-1 / 3B</span>
                    <span className="text-emerald-400 font-mono text-[11px]">Active</span>
                  </div>
                  <div className="flex items-start justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Income Tax (Proprietors, Firms & Companies)</span>
                    <span className="text-emerald-400 font-mono text-[11px]">Active</span>
                  </div>
                  <div className="flex items-start justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Statutory Tax Audit Liaison (Sec 44AB)</span>
                    <span className="text-emerald-400 font-mono text-[11px]">Active</span>
                  </div>
                  <div className="flex items-start justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Company & LLP Incorporation (SPICe+)</span>
                    <span className="text-emerald-400 font-mono text-[11px]">Active</span>
                  </div>
                  <div className="flex items-start justify-between py-1.5">
                    <span className="text-slate-300">Payroll, EPF & ESI Monthly Compliance</span>
                    <span className="text-emerald-400 font-mono text-[11px]">Active</span>
                  </div>
                </div>
              </div>

              {/* Consultation prompt footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Have an upcoming deadline or notice?</span>
                  <span className="text-slate-200 font-medium">Free 20-minute preliminary review</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="px-3 py-1.5 text-xs font-semibold text-[#0B1325] bg-[#E5C788] hover:bg-[#C5A059] rounded transition-colors"
                >
                  Schedule
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Beneath Hero: Rigorous Trust Strip (Full-width row, claim-to-proof adjacency) */}
        <div className="mt-14 pt-10 border-t border-[#E5E0D5]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1325] tabular-nums">
                {FIRM_INFO.metrics.yearsExperience}
              </div>
              <div className="text-xs font-medium text-slate-500">
                Years of Tax & Corporate Advisory in Coimbatore <span className="text-slate-400 text-[10px]">[PLACEHOLDER]</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1325] tabular-nums">
                {FIRM_INFO.metrics.businessesAdvised}
              </div>
              <div className="text-xs font-medium text-slate-500">
                Local MSMEs, Traders & Startups Guided <span className="text-slate-400 text-[10px]">[PLACEHOLDER]</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1325] tabular-nums">
                {FIRM_INFO.metrics.returnsFiled}
              </div>
              <div className="text-xs font-medium text-slate-500">
                Statutory GST & ITR Filings Completed <span className="text-slate-400 text-[10px]">[PLACEHOLDER]</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1325] tabular-nums">
                {FIRM_INFO.metrics.onTimeFilingRate}
              </div>
              <div className="text-xs font-medium text-slate-500">
                On-Time Filing & Zero Penalty Track Record <span className="text-slate-400 text-[10px]">[PLACEHOLDER]</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
