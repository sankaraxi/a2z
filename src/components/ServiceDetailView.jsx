import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckSquare, 
  Square, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  FileCheck, 
  ShieldCheck, 
  MessageSquare, 
  Phone,
  Building,
  CheckCircle2,
  Share2,
  Printer
} from 'lucide-react';
import { FIRM_INFO } from '../data/firmInfo.js';
import ConsultationForm from './ConsultationForm.jsx';

export default function ServiceDetailView({ service, onBack, onOpenConsultation }) {
  // Checkbox state for interactive document checklist
  const [checkedDocs, setCheckedDocs] = useState({});
  const [openFaq, setOpenFaq] = useState(0);

  const toggleDoc = (docName) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [docName]: !prev[docName]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  if (!service) return null;

  return (
    <article className="min-h-screen bg-[#FAF9F5] text-slate-800 pb-20">
      
      {/* Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-[#E8E4DA] py-3.5 px-4 sm:px-6 lg:px-8 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0B1325] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-[#C5A059] group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Practice Areas</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="hidden sm:inline">Home</span>
            <span className="hidden sm:inline">/</span>
            <span className="hidden sm:inline">Services</span>
            <span className="hidden sm:inline">/</span>
            <span className="text-slate-900 font-semibold">{service.shortTitle}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded"
              title="Print Document Checklist"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Service Dedicated Hero */}
      <header className="py-14 sm:py-20 bg-[#0B1325] text-white border-b border-slate-800 bg-ledger-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C5A059] font-mono">
                <span>{service.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>Coimbatore Practice</span>
                <span aria-hidden="true">·</span>
                <span>Statutory Compliance</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-[#E5C788] font-medium leading-relaxed">
                {service.oneLineBenefit}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                {service.summary}
              </p>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B1325] bg-[#C5A059] hover:bg-[#B38E46] rounded-lg transition-all shadow-sm cursor-pointer"
                >
                  Book Consultation For {service.shortTitle}
                </button>

                <a
                  href={`https://wa.me/${FIRM_INFO.whatsappNumber}?text=Hello%20A2Z%20Associates,%20I%20am%20inquiring%20about%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Senior Advisor</span>
                </a>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="lg:col-span-4 bg-[#162035] p-6 rounded-xl border border-slate-700 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C5A059] font-mono pb-2 border-b border-slate-700">
                Service Parameters
              </div>

              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wide block">Jurisdiction:</span>
                <span className="text-xs font-semibold text-slate-200">Coimbatore, Tamil Nadu & All-India MCA/GST</span>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wide block">Processing SLA:</span>
                <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{service.statutoryTimeline}</span>
                </span>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wide block">Supervision:</span>
                <span className="text-xs font-semibold text-slate-200">Verified by Certified Tax Practitioners & Empaneled CAs</span>
              </div>

              <div className="pt-2 border-t border-slate-700">
                <span className="text-[11px] text-slate-400 block">Advisory Fee Benchmark:</span>
                <span className="text-xs text-slate-300 font-medium leading-snug block mt-0.5">
                  {service.pricingNote}
                </span>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Who It's For, Deliverables, Interactive Document Checklist, Process */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* Section 1: Who It's For */}
            <section className="bg-white rounded-xl p-8 border border-[#E5E0D5]">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8A7242] mb-3">
                <span>Eligibility & Commercial Scope</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#0B1325] mb-4">
                Who this service is designed for in Coimbatore
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.whoItsFor.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE5DA] text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#8A7242] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Key Deliverables Matrix */}
            <section className="bg-white rounded-xl p-8 border border-[#E5E0D5]">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8A7242] mb-3">
                <span>Deliverables Matrix</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#0B1325] mb-4">
                What you receive from A2Z Associates
              </h2>

              <ul className="space-y-3">
                {service.keyDeliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-[#FAF8F3] border border-[#C5A059]/40 flex items-center justify-center text-[#8A7242] text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{deliv}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3: Interactive Documents Required Checklist */}
            <section className="bg-white rounded-xl p-8 border border-[#C5A059]/50 shadow-xs">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8A7242]">
                    <span>Preparation Checklist</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[#0B1325] mt-1">
                    Documents Required Before Filing
                  </h2>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">
                  Click items to mark ready
                </span>
              </div>

              <p className="text-xs text-slate-600 mb-6">
                You can bring physical originals to our Gandhipuram office or share high-resolution scans through our encrypted client folder.
              </p>

              <div className="space-y-6">
                {service.documentsRequired.map((docGroup, gIdx) => (
                  <div key={gIdx} className="space-y-2.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-100 flex items-center gap-2">
                      <FileCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{docGroup.category}</span>
                    </h3>

                    <div className="space-y-2">
                      {docGroup.items.map((item, dIdx) => {
                        const isChecked = !!checkedDocs[item];
                        return (
                          <div
                            key={dIdx}
                            onClick={() => toggleDoc(item)}
                            className={`flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                              isChecked
                                ? "bg-emerald-50/60 border-emerald-300 text-emerald-950"
                                : "bg-[#FAF9F5] border-[#E8E2D2] text-slate-700 hover:border-[#C5A059]"
                            }`}
                          >
                            <button
                              type="button"
                              className="shrink-0 mt-0.5 text-slate-600"
                              aria-label={`Toggle document ${item}`}
                            >
                              {isChecked ? (
                                <CheckSquare className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <Square className="w-4 h-4 text-slate-400" />
                              )}
                            </button>
                            <span className={`text-xs leading-relaxed ${isChecked ? "line-through opacity-75" : ""}`}>
                              {item}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: 4-Step Process Flow */}
            <section className="bg-white rounded-xl p-8 border border-[#E5E0D5]">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8A7242] mb-3">
                <span>Methodology</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#0B1325] mb-6">
                How we process this filing
              </h2>

              <div className="space-y-6">
                {service.processSteps.map((step) => (
                  <div key={step.step} className="flex items-start gap-4 pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
                    <div className="w-9 h-9 rounded-md bg-[#0B1325] text-[#C5A059] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Specific FAQs */}
            <section className="bg-white rounded-xl p-8 border border-[#E5E0D5]">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8A7242] mb-3">
                <span>Advisory FAQs</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#0B1325] mb-6">
                Frequently asked questions for {service.shortTitle}
              </h2>

              <div className="space-y-3">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="border border-[#E5E0D5] rounded-lg">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                      >
                        <span className="font-serif text-base font-bold text-[#0B1325]">
                          {faq.question}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? "rotate-180 text-[#8A7242]" : ""}`} />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

          </div>

          {/* Right Column: Sticky Quick Consultation Booking Box */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              <div className="bg-white rounded-xl p-6 border border-[#C5A059]/60 shadow-md">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8A7242] font-mono mb-2">
                  Initiate Filing
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0B1325] mb-2">
                  Speak with a {service.shortTitle} Specialist
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Have your electricity bill or financial trial balance ready? Schedule a direct 15-minute briefing today.
                </p>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="w-full py-3 text-xs font-bold uppercase tracking-wider text-[#0B1325] bg-[#C5A059] hover:bg-[#B38E46] rounded-md transition-colors shadow-xs cursor-pointer"
                  >
                    Request Callback Now
                  </button>

                  <a
                    href={`https://wa.me/${FIRM_INFO.whatsappNumber}?text=Hello%20A2Z%20Associates,%20I%20am%20ready%20with%20documents%20for%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-800 bg-[#FAF9F5] hover:bg-slate-100 border border-[#D5CEBF] rounded-md transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Directly</span>
                  </a>

                  <a
                    href={FIRM_INFO.phoneCallUrl}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-800 hover:text-[#0B1325] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Call {FIRM_INFO.phoneDisplay}</span>
                  </a>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                  <div><strong>Office:</strong> Gandhipuram, Coimbatore</div>
                  <div><strong>Timing:</strong> Mon–Sat 9:30 AM to 7:00 PM</div>
                </div>
              </div>

              {/* Verified Authority Badge */}
              <div className="bg-[#FAF9F5] rounded-xl p-5 border border-[#E5E0D5] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#8A7242] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600">
                  <div className="font-semibold text-slate-900">Compliant Under ICAI & Bar Guidelines</div>
                  <div className="mt-0.5 text-[11px]">
                    All submissions and reconciliations are conducted in accordance with statutory guidelines and independent CA verification frameworks.
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </article>
  );
}
