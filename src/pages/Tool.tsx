import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Download, RefreshCw, Lock, Unlock, Eye, EyeOff, Shield } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';
import { Navigate, Link } from 'react-router-dom';

const Tool = () => {
  const { isSignedIn, user } = useUser();
  const [message, setMessage] = useState('');
  const [shift, setShift] = useState(3);
  const [result, setResult] = useState('');
  const [mode, setMode] = useState<'encrypt' | 'decrypt'>('encrypt');
  const [showResult, setShowResult] = useState(false);

  // Redirect to auth if not signed in
  if (!isSignedIn) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 min-h-screen flex items-center justify-center"
      >
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-sm p-12 rounded-2xl border border-red-500/20"
          >
            <Shield className="h-16 w-16 text-red-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">
              Access Restricted
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              You need to sign in to access the Caesar Cipher tool. 
              Secure your account to protect your encrypted messages.
            </p>
            <Link to="/auth">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-purple-600 rounded-lg font-semibold text-white hover:from-green-600 hover:to-purple-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In to Continue
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  const caesarCipher = (text: string, shift: number, decrypt: boolean = false) => {
    if (decrypt) shift = -shift;
    
    return text
      .split('')
      .map(char => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const base = code >= 65 && code <= 90 ? 65 : 97;
          return String.fromCharCode(((code - base + shift + 26) % 26) + base);
        }
        return char;
      })
      .join('');
  };

  const handleProcess = () => {
    if (!message.trim()) return;
    
    const processed = caesarCipher(message, shift, mode === 'decrypt');
    setResult(processed);
    setShowResult(true);
  };

  const handleCopy = async () => {
    if (result) {
      await navigator.clipboard.writeText(result);
    }
  };

  const handleDownload = () => {
    if (result) {
      const blob = new Blob([result], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${mode}ed_message.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleReset = () => {
    setMessage('');
    setResult('');
    setShift(3);
    setShowResult(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-purple-600/10 p-6 rounded-lg border border-green-500/20 mb-8">
            <h2 className="text-xl font-semibold text-white mb-2">
              Welcome back, {user?.firstName || user?.emailAddresses[0]?.emailAddress?.split('@')[0]}!
            </h2>
            <p className="text-gray-300">
              Your secure encryption workspace is ready. All operations are performed locally for maximum security.
            </p>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Caesar </span>
            <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
              Cipher Tool
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Encrypt and decrypt messages using the legendary Caesar cipher algorithm.
            Perfect for secure communications and cryptographic learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center space-x-2">
                <Lock className="h-6 w-6 text-green-400" />
                <span>Input Configuration</span>
              </h2>

              {/* Mode Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Operation Mode
                </label>
                <div className="flex space-x-4">
                  {['encrypt', 'decrypt'].map((m) => (
                    <motion.button
                      key={m}
                      onClick={() => setMode(m as 'encrypt' | 'decrypt')}
                      className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center space-x-2 ${
                        mode === m
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {m === 'encrypt' ? (
                        <Lock className="h-4 w-4" />
                      ) : (
                        <Unlock className="h-4 w-4" />
                      )}
                      <span className="capitalize">{m}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Shift Value */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Shift Value: {shift}
                </label>
                <input
                  type="range"
                  min="1"
                  max="25"
                  value={shift}
                  onChange={(e) => setShift(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>25</span>
                </div>
              </div>

              {/* Message Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`Enter your message to ${mode}...`}
                  className="w-full h-32 px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{message.length} characters</span>
                  <span>Max: 10,000</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <motion.button
                  onClick={handleProcess}
                  disabled={!message.trim()}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-purple-600 rounded-lg font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed hover:from-green-600 hover:to-purple-700 transition-all"
                  whileHover={{ scale: message.trim() ? 1.02 : 1 }}
                  whileTap={{ scale: message.trim() ? 0.98 : 1 }}
                >
                  {mode === 'encrypt' ? 'Encrypt' : 'Decrypt'}
                </motion.button>
                <motion.button
                  onClick={handleReset}
                  className="px-4 py-3 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RefreshCw className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Output Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center space-x-2">
                <Eye className="h-6 w-6 text-purple-400" />
                <span>Output Result</span>
              </h2>

              {/* Result Display */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  {mode === 'encrypt' ? 'Encrypted' : 'Decrypted'} Message
                </label>
                <div className="relative">
                  <textarea
                    value={result}
                    readOnly
                    placeholder={showResult ? '' : `Your ${mode}ed message will appear here...`}
                    className="w-full h-32 px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                  />
                  {result && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute top-2 right-2"
                    >
                      <button
                        onClick={handleCopy}
                        className="p-2 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-colors"
                      >
                        <Copy className="h-4 w-4 text-purple-400" />
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Result Actions */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex space-x-4"
                >
                  <motion.button
                    onClick={handleCopy}
                    className="flex-1 px-6 py-3 bg-purple-600 rounded-lg font-semibold text-white hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Copy className="h-5 w-5" />
                    <span>Copy</span>
                  </motion.button>
                  <motion.button
                    onClick={handleDownload}
                    className="flex-1 px-6 py-3 bg-gray-700 rounded-lg font-semibold text-gray-300 hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="h-5 w-5" />
                    <span>Download</span>
                  </motion.button>
                </motion.div>
              )}
            </div>

            {/* Algorithm Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700"
            >
              <h3 className="text-lg font-semibold mb-3 text-green-400">
                How It Works
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The Caesar cipher shifts each letter by a fixed number of positions in the alphabet. 
                With a shift of {shift}, 'A' becomes '{String.fromCharCode(65 + shift)}' and 'Z' becomes '{String.fromCharCode(65 + (shift + 25) % 26)}'. 
                This simple yet effective encryption method was used by Julius Caesar himself!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tool;