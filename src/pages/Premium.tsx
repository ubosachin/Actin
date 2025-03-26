import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import GlowingCard from '../components/GlowingCard';

const Premium = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$5',
      period: 'per month',
      features: [
        'Custom commands',
        'Advanced moderation',
        'Welcome messages',
        'Auto roles',
      ],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$10',
      period: 'per month',
      features: [
        'Everything in Basic',
        'Custom bot appearance',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '$25',
      period: 'per month',
      features: [
        'Everything in Pro',
        'Dedicated support',
        'Custom development',
        'Multiple servers',
        'API access',
        'White-label option',
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl -bottom-40 -right-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Premium Features</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock the full potential of Actin Bot with our premium plans
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlowingCard
                className={`h-full ${
                  plan.highlighted
                    ? 'border-cyan-400/50 bg-cyan-500/5'
                    : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-cyan-400 text-gray-900 px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-xl">
                    Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 ${
                    plan.highlighted
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-gray-900'
                      : 'bg-gray-800 hover:bg-gray-700 text-cyan-400'
                  }`}
                >
                  <span>Get Started</span>
                  <Zap className="w-4 h-4" />
                </motion.button>
              </GlowingCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400">
            Need a custom plan? <a href="/contact" className="text-cyan-400 hover:text-cyan-300">Contact us</a> for enterprise solutions.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Premium;