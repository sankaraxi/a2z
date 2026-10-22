import React from 'react';
import { MessageSquareText, FolderCheck, FileSpreadsheet, CheckCircle, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    number: "01",
    title: "Discovery & Scope",
    subtitle: "Direct Phone or Gandhipuram Office Meet",
    description: "We review your business entity type, past return filings, pending notices, and turnover to determine exact statutory obligations.",
    icon: MessageSquareText,
    duration: "Same Day"
  },
  {
    number: "02",
    title: "Document Handover",
    subtitle: "Encrypted Digital or Physical Pickup",
    description: "Send invoices, bank statements, or certificates via secure WhatsApp/cloud drive, or hand over physical vouchers at our Gandhipuram office.",
    icon: FolderCheck,
    duration: "Day 1 – 2"
  },
  {
    number: "03",
    title: "CA-Supervised Filing",
    subtitle: "Reconciled Before Portal Submission",
    description: "We match GSTR-2B ITC, balance trial sheets, and verify AIS/26AS tax credits before submitting official forms with double-check protocols.",
    icon: FileSpreadsheet,
    duration: "Before Deadline"
  },
  {
    number: "04",
    title: "Confirmation & Archive",
    subtitle: "ARN Receipt & Ongoing Year-Round Help",
    description: "You receive official government acknowledgments (ARN/ITR-V) immediately. We archive all working files for audit inspection readiness.",
    icon: CheckCircle,
    duration: "Instant Receipt"
  }
];

export default function HowWeWork({ onOpenConsultation }) {
  return (
    <section id="how-we-work" className="py-20 bg-white border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8A7242] mb-3">
            <span>Engagement Workflow</span>
            <span aria-hidden="true">·</span>
            <span>Zero Friction Process</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1325] tracking-tight leading-tight [text-wrap:balance]">
            From messy vouchers to certified compliance in 4 steps.
          </h2>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            We eliminate administrative anxiety. No confusing portals, no unanswered emails, and no eleventh-hour panic before tax deadlines.
          </p>
        </div>

        {/* Timeline Grid with Connecting Line */}
        <div className="relative">
          
          {/* Horizontal connecting track line (Desktop only) */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-[#C5A059] via-[#0B1325] to-[#C5A059] opacity-25 z-0" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="flex flex-col bg-[#FAF9F5] rounded-xl p-6 border border-[#ECE7DC] hover:border-[#C5A059]/60 hover:shadow-md transition-all duration-300"
                >
                  {/* Step Top Bar: Icon + Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-white border border-[#E2DBD0] flex items-center justify-center text-[#0B1325] shadow-xs">
                      <Icon className="w-6 h-6 text-[#8A7242]" />
                    </div>

                    <div className="font-serif text-2xl font-bold text-[#C5A059] tabular-nums">
                      {step.number}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-xl font-bold text-[#0B1325]">
                    {step.title}
                  </h3>

                  <div className="text-[11px] font-semibold text-[#8A7242] uppercase tracking-wider mt-1">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  {/* SLA Tag */}
                  <div className="mt-5 pt-3 border-t border-[#ECE7DC] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>Typical Turnaround</span>
                    <span className="font-semibold text-slate-800">{step.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Action Callout */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-600 mb-4">
            Have overdue filings or a pending GST notice that needs immediate intervention?
          </p>
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B1325] bg-[#C5A059] hover:bg-[#B38E46] px-5 py-3 rounded-md transition-all shadow-xs cursor-pointer"
          >
            <span>Start Step 1: Consult With A Compliance Lead</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
