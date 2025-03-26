import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Music, Shield, Zap, Bot, Settings, Users, Terminal } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Auto Moderation',
      description: 'Advanced message filtering and user management',
    },
    {
      icon: Music,
      title: 'Music Playback',
      description: 'High-quality music streaming from multiple sources',
    },
    {
      icon: Shield,
      title: 'Server Security',
      description: 'Protect your server from raids and spam',
    },
    {
      icon: Zap,
      title: 'Custom Commands',
      description: 'Create your own commands with ease',
    },
    {
      icon: Bot,
      title: 'AI Chat',
      description: 'Engage with advanced AI conversation',
    },
    {
      icon: Settings,
      title: 'Easy Setup',
      description: 'Get started with simple configuration',
    },
    {
      icon: Users,
      title: 'Role Management',
      description: 'Automated role assignment and management',
    },
    {
      icon: Terminal,
      title: 'Logging System',
      description: 'Comprehensive server activity tracking',
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Powerful Features</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover all the amazing features that make our bot stand out from the rest
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/50 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-lg relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors rounded-xl"></div>
              <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
              <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors rounded-xl blur-xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;