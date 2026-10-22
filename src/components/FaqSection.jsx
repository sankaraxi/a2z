import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';
import { HOMEPAGE_FAQS } from '../data/faqsData.js';
import { FIRM_INFO } from '../data/firmInfo.js';

export default function FaqSection({ onOpenConsultation }) {
  const [openId, setOpenId] = useState(HOMEPAGE_FAQS[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = HOMEPAGE_FAQS.filter((faq) => {
    const q = searchQuery.toLowerCase();
    return (
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q) ||
      faq.category.toLowerCase().includes(q)
    );
  });

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-white border-b border-[#E8E4DA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8A7242] mb-3">
            <span>Insights & Compliance Guide</span>
            <span aria-hidden="true">·</span>
            <span>Statutory Thresholds</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1325] tracking-tight leading-tight">
            Frequently answered regulatory questions.
          </h2>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Statutory thresholds and tax rates are marked for verification. Consult our team for specific facts of your case.
          </p>

          {/* Quick Search Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search GST, audit limits, PF/ESI, penalties..."
              className="w-full pl-10 pr-4 py-2.5 text-xs text-slate-900 bg-[#FAF9F5] border border-[#D5CEBF] focus:border-[#0B1325] rounded-lg outline-none transition-colors"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 text-slate-500 text-xs">
              No matching questions found for "{searchQuery}". Call our Gandhipuram office directly at {FIRM_INFO.phoneDisplay}.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-200 ${
                    isOpen 
                      ? "border-[#C5A059]/80 bg-[#FAF9F5] shadow-xs" 
                      : "border-[#E5E0D5] bg-white hover:border-[#D5CEBF]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A7242] mb-1 font-mono">
                        {faq.category}
                      </span>
                      <span className="font-serif text-lg font-bold text-[#0B1325]">
                        {faq.question}
                      </span>
                    </div>

                    <div className={`p-1 rounded-full text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-[#8A7242]" : ""}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#EAE5DA]">
                      <p>{faq.answer}</p>
                      
                      <div className="mt-3 pt-2 text-[11px] text-slate-400 flex items-center justify-between">
                        <span>Note: Always confirm applicable thresholds with certifying CA based on latest Finance Act amendments.</span>
                        <a
                          href={`https://wa.me/${FIRM_INFO.whatsappNumber}?text=Regarding%20FAQ:%20${encodeURIComponent(faq.question)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8A7242] hover:underline font-semibold shrink-0"
                        >
                          Clarify on WhatsApp &rarr;
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Unanswered Question Box */}
        <div className="mt-12 p-6 rounded-xl bg-[#FAF9F5] border border-[#E5E0D5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#E2DBD0] flex items-center justify-center text-[#8A7242]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Have a specific case or pending department notice?</div>
              <div className="text-[11px] text-slate-500">Speak directly with an authorized tax consultant in Coimbatore.</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-4 py-2 text-xs font-semibold text-[#0B1325] bg-[#C5A059] hover:bg-[#B38E46] rounded-md transition-colors whitespace-nowrap cursor-pointer"
            >
              Ask an Advisor
            </button>
            <a
              href={FIRM_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-700 hover:text-slate-900 bg-white border border-[#D5CEBF] rounded-md hover:bg-slate-50 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-700" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
