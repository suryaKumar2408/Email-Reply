import './Footer.css';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <span className="logo-icon">✉️</span>
                    <span className="gradient-text">MailCraft</span>
                </div>
                <p className="footer-text">
                    © {year} MailCraft. Built with ❤️ and AI.
                </p>
                <ul className="footer-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
