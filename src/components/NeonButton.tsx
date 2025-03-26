import React from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
}) => {
  const baseStyles = "relative px-8 py-4 rounded-lg font-medium text-lg flex items-center justify-center space-x-2 transition-all duration-300";
  const variantStyles = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-gray-900 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)]",
    secondary: "bg-gray-800 hover:bg-gray-700 text-cyan-400 border border-cyan-500/20",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg blur"></div>
    </motion.button>
  );
};

export default NeonButton;