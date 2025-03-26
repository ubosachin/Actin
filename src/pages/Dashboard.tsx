import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Server, Activity } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Users, label: 'Total Users', value: '10.8K+' },
    { icon: MessageSquare, label: 'Command used Today', value: '500+' },
    { icon: Server, label: 'Active Servers', value: '20+' },
    { icon: Activity, label: 'Uptime', value: '99.9%' },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-lg relative group"
            >
              <div className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors rounded-xl"></div>
              <stat.icon className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
              <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
              <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors rounded-xl blur-xl"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gray-800/50 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-lg"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Server activity {index + 1}</span>
                </div>
                <span className="text-gray-500 text-sm">2m ago</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;