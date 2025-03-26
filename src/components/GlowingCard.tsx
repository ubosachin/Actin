import React from 'react';
import { motion } from 'framer-motion';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  glowColor?: string;
  isInteractive?: boolean;
}

const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className = '',
  onClick,
  glowColor = 'rgba(34,211,238,0.3)',
  isInteractive = true,
}) => {
  const motionProps = isInteractive
    ? {
        whileHover: { scale: 1.02, y: -5 },
        whileTap: { scale: 0.98 },
      }
    : {};

  return (
    <motion.div
      {...motionProps}
      onClick={onClick}
      className={`relative bg-gray-800/50 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-lg overflow-hidden ${
        isInteractive ? 'cursor-pointer' : ''
      } ${className}`}
      style={{
        boxShadow: `0 0 30px ${glowColor}`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      {children}
      <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors rounded-xl blur-xl"></div>
      <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/10 via-cyan-400/5 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default GlowingCard;