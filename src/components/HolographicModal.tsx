import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface HolographicModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const HolographicModal: React.FC<HolographicModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50"
          >
            <div className="relative bg-gray-800/80 rounded-xl border border-cyan-500/20 backdrop-blur-xl p-6 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              {children}
              <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors rounded-xl blur-xl"></div>
              <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/10 via-cyan-400/5 to-cyan-500/10 rounded-xl"></div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HolographicModal;