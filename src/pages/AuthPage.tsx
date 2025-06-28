import { SignIn, SignUp, useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { Eye, Key, Lock, Shield } from 'lucide-react';
import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthPage = () => {
  const { isSignedIn } = useUser();
  const [isSignUp, setIsSignUp] = React.useState(false);

  // Redirect if already signed in
  if (isSignedIn) {
    return <Navigate to="/tool" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16 min-h-screen bg-gray-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 50 }).map((_, i) => (
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

      <div className="relative z-10 flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center lg:justify-start space-x-3 mb-6"
              >
                <Shield className="h-12 w-12 text-green-400" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
                  CyberCipher
                </h1>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Secure Access Required
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-300 mb-8"
              >
                Join our secure platform to access advanced encryption tools and protect your digital communications.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {[
                {
                  icon: Lock,
                  title: 'Military-Grade Security',
                  description: 'Your data is protected with enterprise-level encryption'
                },
                {
                  icon: Key,
                  title: 'Advanced Cipher Tools',
                  description: 'Access to professional cryptographic utilities'
                },
                {
                  icon: Eye,
                  title: 'Privacy First',
                  description: 'All encryption happens locally in your browser'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-gray-800/30 rounded-lg border border-green-500/20"
                >
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <feature.icon className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Authentication */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20 shadow-2xl">
                <div className="mb-6 text-center">
                  <div className="flex justify-center space-x-4 mb-6">
                    <button
                      onClick={() => setIsSignUp(false)}
                      className={`px-6 py-2 rounded-lg font-medium transition-all ${!isSignUp
                        ? 'bg-green-500 text-white'
                        : 'text-gray-400 hover:text-white'
                        }`}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => setIsSignUp(true)}
                      className={`px-6 py-2 rounded-lg font-medium transition-all ${isSignUp
                        ? 'bg-green-500 text-white'
                        : 'text-gray-400 hover:text-white'
                        }`}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>

                <div className="clerk-auth-container">
                  {isSignUp ? (
                    <SignUp
                      appearance={{
                        elements: {
                          rootBox: "w-full",
                          card: "bg-transparent shadow-none border-none",
                          headerTitle: "text-white text-xl font-semibold",
                          headerSubtitle: "text-gray-400",
                          socialButtonsBlockButton: "bg-gray-700 border-gray-600 text-white hover:bg-gray-600",
                          socialButtonsProviderIcon: "!text-green-400", // Added '!' for higher specificity
                          socialButtonsBlockButtonText: "text-white", // Ensure text is white
                          socialButtonsIconButton: "!text-green-400", // Added for icon button specifically
                          formFieldInput: "bg-gray-900 border-gray-600 text-white focus:border-green-500",
                          formFieldLabel: "text-gray-300",
                          footerActionLink: "text-blue-400 hover:text-blue-300", // Changes "No account?" text to blue
                          footerActionText: "text-blue-400", // Changes the surrounding text to blue
                          formButtonPrimary: "bg-gradient-to-r from-green-500 to-purple-600 hover:from-green-600 hover:to-purple-700",
                          dividerLine: "bg-gray-600",
                          dividerText: "text-gray-400",
                          formFieldErrorText: "text-red-400",
                          identityPreviewText: "text-gray-300",
                          formResendCodeLink: "text-green-400 hover:text-green-300",
                          spinner: "text-green-400" // Changes loader color to green
                        }
                      }}
                      redirectUrl="/tool"
                    />
                  ) : (
                    <SignIn
                      appearance={{
                        elements: {
                          rootBox: "w-full",
                          card: "bg-transparent shadow-none border-none",
                          headerTitle: "text-white text-xl font-semibold",
                          headerSubtitle: "text-gray-400",
                          socialButtonsBlockButton: "bg-gray-700 border-gray-600 text-white hover:bg-gray-600",
                          socialButtonsProviderIcon: "!text-green-400", // Added '!' for higher specificity
                          socialButtonsBlockButtonText: "text-white", // Ensure text is white
                          socialButtonsIconButton: "!text-green-400", // Added for icon button specifically
                          formFieldInput: "bg-gray-900 border-gray-600 text-white focus:border-green-500",
                          formFieldLabel: "text-gray-300",
                          footerActionLink: "text-blue-400 hover:text-blue-300", // Changes "No account?" text to blue
                          footerActionText: "text-blue-400", // Changes the surrounding text to blue
                          formButtonPrimary: "bg-gradient-to-r from-green-500 to-purple-600 hover:from-green-600 hover:to-purple-700",
                          dividerLine: "bg-gray-600",
                          dividerText: "text-gray-400",
                          formFieldErrorText: "text-red-400",
                          identityPreviewText: "text-gray-300",
                          formResendCodeLink: "text-green-400 hover:text-green-300",
                          spinner: "text-green-400" // Changes loader color to green
                        }
                      }}
                      redirectUrl="/tool"
                    />
                  )}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 text-center"
              >
                <p className="text-sm text-gray-400">
                  By signing up, you agree to our{' '}
                  <a href="/terms-of-service" className="text-green-400 hover:text-green-300">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy-policy" className="text-green-400 hover:text-green-300">
                    Privacy Policy
                  </a>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthPage;
