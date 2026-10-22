import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { FIRM_INFO } from '../data/firmInfo.js';
import { SERVICES } from '../data/servicesData.js';

export default function ConsultationForm({ prefilledService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    serviceNeeded: prefilledService || "GST Filing & Reconciliation",
    message: "",
    captchaAnswer: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simple, privacy-preserving client-side anti-spam challenge
  const [captchaChallenge] = useState(() => {
    const num1 = Math.floor(Math.random() * 8) + 2;
    const num2 = Math.floor(Math.random() * 5) + 1;
    return { num1, num2, expected: num1 + num2 };
  });

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name.";
    
    // Indian phone number validation
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      errs.phone = "Phone number is required for consultation.";
    } else if (!/^(\+91|91|0)?[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (parseInt(formData.captchaAnswer, 10) !== captchaChallenge.expected) {
      errs.captchaAnswer = `Security verification: What is ${captchaChallenge.num1} + ${captchaChallenge.num2}?`;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real client submission state with audit receipt
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello A2Z Associates, I would like to book a consultation.\n\n` +
      `Name: ${formData.name || "Prospective Client"}\n` +
      `Phone: ${formData.phone || "Not provided"}\n` +
      `Business: ${formData.businessName || "Not provided"}\n` +
      `Service: ${formData.serviceNeeded}\n` +
      `Note: ${formData.message || "Consultation requested"}`
    );
    return `https://wa.me/${FIRM_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#0B1325] text-white relative overflow-hidden bg-ledger-dark">
      {/* Decorative architectural glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 -z-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none bg-[#C5A059]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Office & Direct Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C5A059] mb-3 font-mono">
                <span>Direct Legal & Tax Advisory</span>
                <span aria-hidden="true">·</span>
                <span>Coimbatore</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Schedule a confidential consultation.
              </h2>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Whether you need a full-scope compliance retainer, assistance with a GST scrutiny notice, or guidance forming an entity in Tamil Nadu, our senior advisors are ready to review your files.
              </p>
            </div>

            {/* Direct contact info cards */}
            <div className="space-y-4 text-xs">
              
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#162035]/70 border border-slate-800">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">Gandhipuram Office Location</div>
                  <div className="text-slate-400 mt-0.5">{FIRM_INFO.address.full}</div>
                  <a
                    href={FIRM_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E5C788] hover:underline inline-block mt-1 font-medium"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#162035]/70 border border-slate-800">
                <Phone className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">Phone Consultation</div>
                  <div className="text-slate-400 mt-0.5">Direct line to senior practitioner:</div>
                  <a
                    href={FIRM_INFO.phoneCallUrl}
                    className="text-[#E5C788] hover:text-white font-mono text-sm font-bold block mt-1"
                  >
                    {FIRM_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#162035]/70 border border-slate-800">
                <Clock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">Office Working Hours</div>
                  <div className="text-slate-400 mt-0.5">{FIRM_INFO.hours.weekdays}</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">{FIRM_INFO.hours.sunday}</div>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Action Link */}
            <div className="pt-2">
              <a
                href={FIRM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Message on WhatsApp (+91 99449 99364)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Lead Form or Success State */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-7 sm:p-10 shadow-2xl border border-slate-200">
            {submitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325]">
                  Consultation Request Received
                </h3>

                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. A senior tax advisor from our Gandhipuram office will call you at <strong className="font-mono">{formData.phone}</strong> within 2 business hours.
                </p>

                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E0D5] text-left text-xs space-y-2 max-w-md mx-auto mt-6">
                  <div className="font-semibold text-slate-800">Consultation Reference:</div>
                  <div className="text-slate-600">Service: <span className="font-medium text-slate-900">{formData.serviceNeeded}</span></div>
                  {formData.businessName && <div className="text-slate-600">Business: <span className="font-medium text-slate-900">{formData.businessName}</span></div>}
                  <div className="text-slate-500 text-[11px] pt-2 border-t border-slate-200">
                    If this is urgent (e.g. departmental notice or filing due today), you may also dispatch this request directly over WhatsApp.
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp as well</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        businessName: "",
                        serviceNeeded: "GST Filing & Reconciliation",
                        message: "",
                        captchaAnswer: ""
                      });
                    }}
                    className="text-xs text-slate-600 hover:text-slate-900 underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                <div className="border-b border-slate-100 pb-4 mb-2">
                  <h3 className="font-serif text-2xl font-bold text-[#0B1325]">
                    Request a Free Compliance Consultation
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    No spam. Your details remain strictly confidential under standard client privilege.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. R. Karthikeyan"
                      className={`w-full px-3.5 py-2.5 text-xs text-slate-900 bg-[#FAF9F5] border rounded-lg outline-none transition-colors ${
                        errors.name ? "border-red-500 bg-red-50/20" : "border-[#D5CEBF] focus:border-[#0B1325]"
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full px-3.5 py-2.5 text-xs text-slate-900 bg-[#FAF9F5] border rounded-lg outline-none transition-colors ${
                        errors.phone ? "border-red-500 bg-red-50/20" : "border-[#D5CEBF] focus:border-[#0B1325]"
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Business Name & City */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Business / Firm Name & City
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Coimbatore Pumps & Valves, Gandhipuram"
                      className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-[#FAF9F5] border border-[#D5CEBF] focus:border-[#0B1325] rounded-lg outline-none transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2.5 text-xs text-slate-900 bg-[#FAF9F5] border rounded-lg outline-none transition-colors ${
                        errors.email ? "border-red-500 bg-red-50/20" : "border-[#D5CEBF] focus:border-[#0B1325]"
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Service Needed Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Primary Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-[#FAF9F5] border border-[#D5CEBF] focus:border-[#0B1325] rounded-lg outline-none cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.categoryLabel})
                      </option>
                    ))}
                    <option value="General Tax & Statutory Notice Advisory">
                      General Tax / Scrutiny Notice Resolution
                    </option>
                    <option value="Comprehensive Monthly Compliance Retainer">
                      Comprehensive Monthly Compliance Retainer
                    </option>
                  </select>
                </div>

                {/* Message / Notice Details */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Details of Enquiry or Pending Notice (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current turnover, pending return date, or specific query..."
                    className="w-full px-3.5 py-2 text-xs text-slate-900 bg-[#FAF9F5] border border-[#D5CEBF] focus:border-[#0B1325] rounded-lg outline-none transition-colors"
                  />
                </div>

                {/* Spam Protection Math Verification */}
                <div className="pt-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-[#FAF9F5] border border-[#E5E0D5]">
                    <div className="text-xs text-slate-700">
                      <span className="font-semibold">Security Check:</span> What is{" "}
                      <span className="font-mono font-bold text-[#0B1325]">
                        {captchaChallenge.num1} + {captchaChallenge.num2}
                      </span>
                      ?
                    </div>
                    <div className="w-24">
                      <input
                        type="number"
                        required
                        value={formData.captchaAnswer}
                        onChange={(e) => setFormData({ ...formData, captchaAnswer: e.target.value })}
                        placeholder="Answer"
                        className={`w-full px-2.5 py-1.5 text-xs text-center font-mono text-slate-900 bg-white border rounded outline-none ${
                          errors.captchaAnswer ? "border-red-500" : "border-[#D5CEBF]"
                        }`}
                      />
                    </div>
                  </div>
                  {errors.captchaAnswer && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.captchaAnswer}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-[#0B1325] bg-[#C5A059] hover:bg-[#B38E46] active:bg-[#9E7B35] rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Validating Request...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Book Free Compliance Consultation</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center pt-2">
                  <div className="text-[11px] text-slate-500 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#8A7242]" />
                    <span>Gandhipuram Office: No 721/2, Venky Complex, Coimbatore 641012</span>
                  </div>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
