import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import ConsultationForm from './ConsultationForm.jsx';

export default function ConsultationModal({ isOpen, onClose, prefilledService = "" }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="relative max-w-xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Sticky Header with Title and Visible Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#FAF9F5] shrink-0">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#8A7242] font-mono">
              Gandhipuram, Coimbatore
            </div>
            <h3 id="modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[#0B1325]">
              Book Free Compliance Consultation
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close consultation modal"
            className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-grow">
          <ConsultationForm 
            isModal={true} 
            prefilledService={prefilledService} 
            onSuccessClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}
