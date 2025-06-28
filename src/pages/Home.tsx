import { useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { ChevronRight, Key, Lock, Shield, UserCheck } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isSignedIn } = useUser();
  const featuresRef = React.useRef<HTMLElement>(null); // Add this line near the top

  // Add scroll handler function
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Lock,
      title: 'Military Grade Encryption',
      description: 'Advanced Caesar cipher with customizable shift values for maximum security.',
    },
    {
      icon: Key,
      title: 'Instant Decryption',
      description: 'Decrypt any Caesar cipher message with lightning-fast processing.',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'All encryption happens locally. Your data never leaves your browser.',
    },
    {
      icon: UserCheck,
      title: 'Authenticated Access',
      description: 'Secure user authentication ensures only authorized users can access tools.',
    },
  ];

  const stats = [
    { value: '256-bit', label: 'Security Level' },
    { value: '99.9%', label: 'Uptime' },
    // { value: '10k+', label: 'Users Protected' },
    { value: '<1ms', label: 'Response Time' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-green-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Cyber
              </span>
              <span className="text-white">Cipher</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced encryption tools for the modern digital age.
              Secure your messages with military-grade Caesar cipher technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link to={isSignedIn ? "/tool" : "/auth"}>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-purple-600 rounded-lg font-semibold text-white flex items-center space-x-2 hover:from-green-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-green-500/25"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{isSignedIn ? 'Start Encrypting' : 'Sign In to Start'}</span>
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </Link>

            <motion.button
              className="px-8 py-4 border-2 border-green-500 rounded-lg font-semibold text-green-400 hover:bg-green-500/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToFeatures}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center w-full" // Added flex and center alignment
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50" ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              Why Choose <span className="text-green-400">CyberCipher</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built for security professionals, developers, and anyone who values privacy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 p-6 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all group"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <feature.icon className="h-12 w-12 text-green-400 group-hover:text-green-300 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication CTA Section */}
      {!isSignedIn && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-green-500/10 to-purple-600/10 p-12 rounded-2xl border border-green-500/20"
            >
              <Shield className="h-16 w-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Secure Access Required
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Create your account to access advanced encryption tools and join thousands of users who trust CyberCipher.
              </p>
              <Link to="/auth">
                <motion.button
                  className="px-12 py-4 bg-gradient-to-r from-green-500 to-purple-600 rounded-lg font-semibold text-white text-lg flex items-center space-x-2 mx-auto hover:from-green-600 hover:to-purple-700 transition-all shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <UserCheck className="h-5 w-5" />
                  <span>Create Account</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section for signed in users */}
      {isSignedIn && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-green-500/10 to-purple-600/10 p-12 rounded-2xl border border-green-500/20"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Secure Your Messages?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Your account is ready! Start encrypting and decrypting messages with our advanced Caesar cipher tool.
              </p>
              <Link to="/tool">
                <motion.button
                  className="px-12 py-4 bg-gradient-to-r from-green-500 to-purple-600 rounded-lg font-semibold text-white text-lg flex items-center space-x-2 mx-auto hover:from-green-600 hover:to-purple-700 transition-all shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Use Caesar Cipher Tool</span>
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </motion.div>
  );
};

export default Home;
