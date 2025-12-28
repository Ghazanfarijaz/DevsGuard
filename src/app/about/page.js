import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/sections/AboutHero';
import AboutUs from '@/components/sections/AboutUs';
import StatsCards from '@/components/sections/StatsCards';
import OurMission from '@/components/sections/OurMission';
import AboutServices from '@/components/sections/AboutServices';
import Newsletter from '@/components/sections/Newsletter';
import CTA from '@/components/sections/CTA';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f8]">
      <Navbar currentPage="about" />
      
      {/* About Hero Section */}
      <AboutHero />
      
      {/* About Us Section */}
      <AboutUs />
      
      {/* Our Services Section */}
      <AboutServices />
      
      {/* Newsletter Section */}
      <Newsletter variant="fullwidth" />
      
      {/* CTA Section */}
      <CTA />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

