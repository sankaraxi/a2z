import React, { useState } from 'react';
import { 
  Receipt, 
  Calculator, 
  FileSpreadsheet, 
  Building2, 
  ShieldCheck, 
  Users, 
  Award, 
  FileCheck2, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES } from '../data/servicesData.js';

// Icon mapping dictionary for all 9 services
const ICON_MAP = {
  "gst-registration": Receipt,
  "gst-filing": FileCheck2,
  "income-tax-filing": Calculator,
  "bookkeeping-accounting": FileSpreadsheet,
  "audit": ShieldCheck,
  "epf-esi": Users,
  "company-registration": Building2,
  "trademark-registration": Award,
  "iso-certification": Layers
};

export default function ServicesGrid({ onSelectService, onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all" 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-[#FAF9F5] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Title & Context */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8A7242] mb-3">
            <span>Core Practice Areas</span>
            <span aria-hidden="true">·</span>
            <span>9 Specialized Services</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1325] tracking-tight leading-tight [text-wrap:balance]">
            Precision taxation, accounting, and legal compliance.
          </h2>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From single-proprietor GST registrations in Gandhipuram to multi-crore industrial audits in Ganapathy and Tirupur, our advisory services are structured to provide total regulatory protection.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive filter controls with clear active/inactive state) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#EAE5DA]">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === "all"
                ? "bg-[#0B1325] text-white shadow-xs"
                : "bg-white text-slate-700 border border-[#DCD5C5] hover:bg-slate-50"
            }`}
          >
            All 9 Services
          </button>

          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-[#0B1325] text-white shadow-xs"
                  : "bg-white text-slate-700 border border-[#DCD5C5] hover:bg-slate-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid: Asymmetric 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const IconComponent = ICON_MAP[service.id] || Receipt;
            
            // Asymmetric prominence for Marquee capabilities
            const isMarquee = service.id === "gst-filing" || service.id === "income-tax-filing" || service.id === "audit";

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className={`group relative flex flex-col justify-between rounded-xl bg-white p-7 border transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  isMarquee 
                    ? "border-[#C5A059]/60 hover:border-[#C5A059] bg-gradient-to-b from-white to-[#FDFCF8]" 
                    : "border-[#E5E0D5] hover:border-[#C5A059]/50"
                }`}
              >
                <div>
                  {/* Top Bar inside Card: Icon + Category unboxed metadata */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF8F3] border border-[#E8E2D2] flex items-center justify-center text-[#8A7242] group-hover:bg-[#0B1325] group-hover:text-[#E5C788] group-hover:border-[#0B1325] transition-all duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {service.categoryLabel}
                    </div>
                  </div>

                  {/* Card Title & Benefit */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1325] group-hover:text-[#8A7242] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                    {service.oneLineBenefit}
                  </p>

                  <p className="mt-3 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Key deliverable highlight */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Key Scope
                    </div>
                    <div className="text-xs text-slate-700 flex items-center gap-1.5 line-clamp-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                      <span>{service.keyDeliverables[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Action: Learn More with hover arrow */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-900 group-hover:text-[#8A7242] transition-colors flex items-center gap-1">
                    <span>View Checklist & Process</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <span className="text-[11px] text-slate-400 font-mono">
                    {service.statutoryTimeline ? "Standard SLA" : ""}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Scope Note & Consultation Trigger */}
        <div className="mt-12 p-6 rounded-xl bg-white border border-[#E5E0D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Not sure which registration or filing frequency your enterprise requires?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              We offer free compliance health checks for businesses located in Coimbatore, Tirupur, and Erode.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-5 py-2.5 text-xs font-semibold text-[#0B1325] bg-[#C5A059] hover:bg-[#B38E46] rounded-md transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Request Free Health Check
          </button>
        </div>

      </div>
    </section>
  );
}
