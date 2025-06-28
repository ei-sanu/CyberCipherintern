import { motion } from 'framer-motion';

const TermsOfService = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto px-4 py-12"
        >
            <h1 className="text-3xl font-bold text-green-400 mb-8 mt-8">Terms of Service</h1>
            <div className="prose prose-invert prose-green">
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using CyberCipher, you accept and agree to be bound by these Terms of Service.</p>

                <h2>2. Use License</h2>
                <p>We grant you a limited, non-exclusive, non-transferable license to use our services.</p>

                <h2>3. Disclaimer</h2>
                <p>The services are provided "as is" without any warranties of any kind.</p>

                <h2>4. Limitations</h2>
                <p>We shall not be liable for any damages arising from the use of our services.</p>

                <p className="text-sm text-gray-400 mt-8">Last updated: June 28, 2025</p>
            </div>
        </motion.div>
    );
};

export default TermsOfService;
