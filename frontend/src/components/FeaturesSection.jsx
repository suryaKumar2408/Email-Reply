import { motion } from 'framer-motion';
import './FeaturesSection.css';

const features = [
    {
        icon: '🤖',
        title: 'AI-Powered Replies',
        desc: 'Leverage advanced AI models to understand context and generate human-like email responses that sound naturally yours.',
    },
    {
        icon: '🎨',
        title: 'Multiple Tones',
        desc: 'Choose from Professional, Casual, or Friendly tones to match the vibe of any conversation and audience.',
    },
    {
        icon: '⚡',
        title: 'Instant Results',
        desc: 'Get a polished reply in under 5 seconds. No more staring at a blank screen — just paste, click, and send.',
    },
];

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function FeaturesSection() {
    return (
        <section className="features" id="features">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Why Choose <span className="gradient-text">MailCraft</span>?
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                >
                    Everything you need to reply to emails faster, better, and with the
                    right tone — every single time.
                </motion.p>
            </div>

            <motion.div
                className="features-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
            >
                {features.map((f, i) => (
                    <motion.div className="feature-card" key={i} variants={item}>
                        <div className="feature-icon">{f.icon}</div>
                        <h3 className="feature-title">{f.title}</h3>
                        <p className="feature-desc">{f.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default FeaturesSection;
