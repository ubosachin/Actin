import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, ArrowRight, Zap, Shield, Users } from 'lucide-react';
import { Parallax } from 'react-parallax';
import TypewriterText from '../components/TypewriterText';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl -top-40 -left-40 animate-pulse"></div>
          <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative pt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative inline-block mb-8"
            >
              <Bot className="w-32 h-32 text-cyan-400" />
              <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20"></div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold text-white mb-6"
            >
              <span className="text-cyan-400">Actin</span> Bot
            </motion.h1>

            <TypewriterText
              text="The Next Generation Discord Experience"
              className="text-2xl text-gray-300 mb-12"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-2 group relative overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 hover:bg-gray-700 text-cyan-400 px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>View Features</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-1 h-16 bg-cyan-500/20 rounded-full relative">
            <div className="absolute top-0 w-full h-1/3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      {/* Features Overview */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000"
        strength={200}
        className="min-h-screen flex items-center"
      >
        <div className="w-full py-32 backdrop-blur-xl bg-gray-900/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Experience instant responses and seamless performance"
                },
                {
                  icon: Shield,
                  title: "Secure & Reliable",
                  description: "Advanced security features to protect your server"
                },
                {
                  icon: Users,
                  title: "Community Focused",
                  description: "Built with community management in mind"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-lg relative group"
                >
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                  <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors rounded-xl blur-xl"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Parallax>

      {/* Statistics Section */}
      <div className="min-h-screen flex items-center relative overflow-hidden py-32">
        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl top-40 -right-40"></div>
          <div className="absolute w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl -bottom-40 -left-40"></div>
        </div>

        <div className="relative w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Trusted by Thousands</h2>
              <p className="text-xl text-gray-400">Join the growing community of Discord servers powered by Actin Bot</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { value: "10K+", label: "Servers" },
                { value: "1M+", label: "Users" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 rounded-xl p-8 border border-cyan-500/20 backdrop-blur-lg text-center"
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;