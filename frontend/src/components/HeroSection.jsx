import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className="hero">
            {/* Floating icons */}
            <span className="hero-float">✉️</span>
            <span className="hero-float">📧</span>
            <span className="hero-float">💬</span>
            <span className="hero-float">📨</span>
            <span className="hero-float">⚡</span>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <span className="badge-dot" />
                    AI-Powered Email Assistant
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                    Craft Perfect Email{' '}
                    <span className="highlight">Replies</span> in Seconds
                </motion.h1>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                >
                    Transform your email workflow with AI. Paste any email, choose your
                    tone, and get a polished reply instantly — powered by advanced AI
                    models.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <Link to="/generate" className="hero-btn-primary">
                        ✨ Start Writing
                    </Link>
                    <a href="#how-it-works" className="hero-btn-secondary">
                        See How It Works
                    </a>
                </motion.div>

                <motion.div
                    className="hero-stats"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.7 }}
                >
                    <div className="hero-stat">
                        <div className="stat-value">10K+</div>
                        <div className="stat-label">Emails Generated</div>
                    </div>
                    <div className="hero-stat">
                        <div className="stat-value">3</div>
                        <div className="stat-label">Tone Options</div>
                    </div>
                    <div className="hero-stat">
                        <div className="stat-value">&lt;5s</div>
                        <div className="stat-label">Average Response</div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default HeroSection;
