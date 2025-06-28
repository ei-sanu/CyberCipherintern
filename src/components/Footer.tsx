import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Shield } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
                CyberCipher
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advanced cybersecurity tools for encryption and decryption.
              Secure your messages with military-grade Caesar cipher technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-green-400">Quick Links</h3>
            <div className="space-y-2">

              {[
                { name: 'Home', href: '/' },
                { name: 'Caesar Tool', href: '/Tool' },
                { name: 'Contact', href: '/Contact' },
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms of Service', href: '/terms-of-service' }
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-green-400 transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-green-400">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-green-500/20 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </motion.a>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-xs text-gray-500">
                Stay updated with the latest cybersecurity trends and tools.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2024 CyberCipher. All rights reserved. | Built with ❤️ for cybersecurity enthusiasts.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
