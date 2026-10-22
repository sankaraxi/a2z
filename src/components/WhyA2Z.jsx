import React from 'react';
import { Target, Clock, Coins, UserCheck, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { FIRM_INFO } from '../data/firmInfo.js';

const PILLARS = [
  {
    icon: Target,
    title: "Laser Accuracy & ITC Protection",
    detail: "Zero loss of Input Tax Credit",
    body: "Most MSMEs lose lakhs annually because vendor invoices are omitted or mismatched on the portal. We run automated GSTR-2B purchase reconciliations every single month, flagging supplier defaults before you pay them."
  },
  {
    icon: Clock,
    title: "Guaranteed Statutory Deadlines",
    detail: "Internal cutoffs 48 hours early",
    body: "We do not wait for the 20th. Our team works against an internal 10th/18th cutoff calendar, ensuring portal server crashes and bandwidth throttling never cause a late fee or interest penalty on your account."
  },
  {
    icon: Coins,
    title: "100% Transparent Billing",
    detail: "Predictable monthly retainers",
    body: "No surprise hourly fees, hidden charges for routine DRC-01 notices, or arbitrary rate increases. Every proposal is written down in clear, transparent terms with exact scope boundaries."
  },
  {
    icon: UserCheck,
    title: "Direct Access to a Senior Advisor",
    detail: "A real person on the other end of the line",
    body: "No anonymous support tickets or inexperienced juniors. You are assigned a dedicated senior compliance associate whose direct mobile phone number you hold, with our Gandhipuram office always open to visit."
  }
];

export default function WhyA2Z() {
  return (
    <section id="why-a2z" className="py-20 bg-[#FAF9F5] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8A7242] mb-3">
              <span>The Boutique Practice Standard</span>
              <span aria-hidden="true">·</span>
              <span>Why Business Owners Choose A2Z</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1325] tracking-tight leading-tight [text-wrap:balance]">
              Built for businesses that cannot afford compliance errors.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              We operate like an in-house corporate legal and tax department, bringing enterprise-grade scrutiny to Coimbatore’s independent businesses.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-xl bg-white p-8 border border-[#E5E0D5] hover:border-[#C5A059]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF8F3] border border-[#E8E2D2] flex items-center justify-center text-[#8A7242]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-[#8A7242] font-mono">
                      {pillar.detail}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#0B1325] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Enforced under standard engagement letter terms</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
