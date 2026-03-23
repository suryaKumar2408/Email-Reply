import { motion } from 'framer-motion';
import './HowItWorks.css';

const steps = [
    {
        num: '1',
        icon: '📋',
        title: 'Paste Your Email',
        desc: 'Copy the email you received and paste it into the input field.',
    },
    {
        num: '2',
        icon: '🎯',
        title: 'Pick a Tone',
        desc: 'Choose Professional, Casual, or Friendly to match your style.',
    },
    {
        num: '3',
        icon: '🚀',
        title: 'Get Your Reply',
        desc: 'Click generate and receive a polished reply in seconds.',
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function HowItWorks() {
    return (
        <section className="how-it-works" id="how-it-works">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    How It <span className="gradient-text">Works</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                >
                    Three simple steps to the perfect email reply.
                </motion.p>
            </div>

            <motion.div
                className="steps-container"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
            >
                {steps.map((s, i) => (
                    <motion.div className="step-card" key={i} variants={item}>
                        <div className="step-number">{s.num}</div>
                        <div className="step-icon">{s.icon}</div>
                        <h3 className="step-title">{s.title}</h3>
                        <p className="step-desc">{s.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default HowItWorks;
