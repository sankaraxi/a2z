import React, { useState } from 'react';
import { Calendar, AlertCircle, Clock, Check, BellRing, ExternalLink, MessageSquare } from 'lucide-react';
import { COMPLIANCE_DEADLINES } from '../data/complianceCalendar.js';
import { FIRM_INFO } from '../data/firmInfo.js';

export default function ComplianceCalendarWidget({ onOpenConsultation }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedId, setCopiedId] = useState(null);

  const categories = ["All", "GST", "Income Tax", "Payroll", "MCA"];

  const filteredDeadlines = selectedCategory === "All"
    ? COMPLIANCE_DEADLINES
    : COMPLIANCE_DEADLINES.filter(d => d.category === selectedCategory);

  const handleCopyDate = (deadline) => {
    const text = `${deadline.title} (${deadline.code}) - Due Date: ${deadline.nextUpcoming}. Note: ${deadline.penaltyNote}`;
    navigator.clipboard.writeText(text);
    setCopiedId(deadline.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getWhatsAppQueryUrl = (deadline) => {
    const message = encodeURIComponent(
      `Hello A2Z Associates, I am inquiring regarding the upcoming due date for "${deadline.title} (${deadline.code})". Can you assist our business with timely filing?`
    );
    return `https://wa.me/${FIRM_INFO.whatsappNumber}?text=${message}`;
  };

  return (
    <section id="compliance-calendar" className="py-20 bg-white border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8A7242] mb-3">
              <span>Statutory Compliance Calendar</span>
              <span aria-hidden="true">·</span>
              <span>Updated for Current Fiscal Cycle</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1325] tracking-tight leading-tight">
              Upcoming statutory due dates.
            </h2>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Stay ahead of penal interest, blocked GST credits, and ROC late fees. Review the statutory recurring schedule below.
            </p>
          </div>

          {/* Category Filter Pills (Functional Filter Buttons) */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#FAF9F5] border border-[#E5E0D5] rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-[#0B1325] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDeadlines.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-[#E5E0D5] bg-[#FAF9F5] p-6 hover:border-[#C5A059]/60 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header row: Frequency + Category */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-[#8A7242] font-mono text-[11px] uppercase tracking-wider">
                    {item.category} · {item.frequency}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-amber-50 text-amber-800 border border-amber-200">
                    {item.code}
                  </span>
                </div>

                {/* Due Date Display Pill & Title */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif text-2xl font-bold text-[#0B1325] tabular-nums">
                    {item.dayOfMonth}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {item.nextUpcoming}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Statutory Penalty Exposure Note */}
                <div className="mt-4 p-2.5 rounded-lg bg-red-50/60 border border-red-200/60 text-[11px] text-red-900 flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Penalty:</strong> {item.penaltyNote}
                  </span>
                </div>
              </div>

              {/* Action Bar */}
              <div className="mt-5 pt-3 border-t border-[#EAE5DA] flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => handleCopyDate(item)}
                  className="text-slate-600 hover:text-slate-900 flex items-center gap-1 text-[11px] font-medium cursor-pointer"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Details Copied</span>
                    </>
                  ) : (
                    <>
                      <BellRing className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Reminder</span>
                    </>
                  )}
                </button>

                <a
                  href={getWhatsAppQueryUrl(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8A7242] hover:text-[#0B1325] transition-colors"
                >
                  <MessageSquare className="w-3 h-3 text-emerald-600" />
                  <span>Filing Assistance</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Footer Advice Note */}
        <div className="mt-10 p-5 rounded-xl bg-[#FAF9F5] border border-[#E5E0D5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#8A7242] shrink-0" />
            <span>
              <strong>Practice Policy:</strong> A2Z Associates completes client GSTR-3B filings by the 18th and TDS returns 5 days prior to official CBDT portal cutoffs to insulate clients from server downtime.
            </span>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="text-[#8A7242] hover:text-[#0B1325] font-semibold underline whitespace-nowrap cursor-pointer"
          >
            Schedule Compliance Audit &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
