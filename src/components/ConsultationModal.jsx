import React from 'react';
import { X } from 'lucide-react';
import ConsultationForm from './ConsultationForm.jsx';

export default function ConsultationModal({ isOpen, onClose, prefilledService = "" }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full my-8 bg-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close consultation modal"
          className="absolute -top-3 -right-3 z-20 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 border border-slate-700 shadow-lg cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <ConsultationForm prefilledService={prefilledService} />
        </div>
      </div>
    </div>
  );
}
