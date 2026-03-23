import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

function LandingPage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <HowItWorks />
            <Footer />
        </>
    );
}

export default LandingPage;
