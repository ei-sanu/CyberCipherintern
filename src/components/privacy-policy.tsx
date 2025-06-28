import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto px-4 py-12"
        >
            <h1 className="text-3xl font-bold text-green-400 mb-8">Privacy Policy</h1>
            <div className="prose prose-invert prose-green">
                <h2>1. Information We Collect</h2>
                <p>We collect information that you provide directly to us when using the CyberCipher tool.</p>

                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to provide and improve our services.</p>

                <h2>3. Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information.</p>

                <h2>4. Updates to This Policy</h2>
                <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated date.</p>

                <p className="text-sm text-gray-400 mt-8">Last updated: June 28, 2025</p>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicy;
