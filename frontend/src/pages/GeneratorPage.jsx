import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    TextField,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    CircularProgress,
} from '@mui/material';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './GeneratorPage.css';

function GeneratorPage() {
    const [emailContent, setEmailContent] = useState('');
    const [tone, setTone] = useState('');
    const [generatedReply, setGeneratedReply] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        setError('');
        setGeneratedReply('');
        try {
            const response = await axios.post(
                'https://email-reply-2-0a3s.onrender.com/api/email/generate',
                { emailContent, tone }
            );
            setGeneratedReply(
                typeof response.data === 'string'
                    ? response.data
                    : JSON.stringify(response.data)
            );
        } catch (err) {
            setError('Failed to generate email reply. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedReply);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <Navbar />
            <div className="generator-page">
                <motion.div
                    className="generator-card"
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <div className="generator-header">
                        <h1>
                            <span className="gradient-text">✨ Email Reply Generator</span>
                        </h1>
                        <p>Paste the email you received and let AI craft the perfect reply.</p>
                    </div>

                    <TextField
                        fullWidth
                        multiline
                        rows={6}
                        variant="outlined"
                        label="Original Email Content"
                        placeholder="Paste the email you want to reply to..."
                        value={emailContent}
                        onChange={(e) => setEmailContent(e.target.value)}
                    />

                    <FormControl fullWidth>
                        <InputLabel>Tone (Optional)</InputLabel>
                        <Select
                            value={tone}
                            label="Tone (Optional)"
                            onChange={(e) => setTone(e.target.value)}
                        >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="professional">Professional</MenuItem>
                            <MenuItem value="casual">Casual</MenuItem>
                            <MenuItem value="friendly">Friendly</MenuItem>
                        </Select>
                    </FormControl>

                    <button
                        className="generate-btn"
                        onClick={handleSubmit}
                        disabled={!emailContent || loading}
                    >
                        {loading ? (
                            <CircularProgress size={24} sx={{ color: 'white' }} />
                        ) : (
                            '✨ Generate Reply'
                        )}
                    </button>

                    {error && <p className="error-text">{error}</p>}

                    <AnimatePresence>
                        {generatedReply && (
                            <motion.div
                                className="output-section"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                            >
                                <div className="output-header">
                                    <span className="output-title">
                                        ✅ Generated Reply
                                    </span>
                                    <button
                                        className={`copy-btn ${copied ? 'copied' : ''}`}
                                        onClick={handleCopy}
                                    >
                                        {copied ? '✓ Copied!' : '📋 Copy'}
                                    </button>
                                </div>

                                <TextField
                                    fullWidth
                                    multiline
                                    rows={6}
                                    variant="outlined"
                                    value={generatedReply}
                                    slotProps={{ input: { readOnly: true } }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </>
    );
}

export default GeneratorPage;
