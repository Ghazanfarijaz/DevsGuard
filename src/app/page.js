import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ClientLogos from '@/components/sections/ClientLogos';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import OurApproach from '@/components/sections/OurApproach';
import OurServices from '@/components/sections/OurServices';
import Testimonials from '@/components/sections/Testimonials';
import Newsletter from '@/components/sections/Newsletter';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f8f8]">
      <Navbar currentPage="home" />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Client Logos Section */}
      <ClientLogos />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Our Approach Section */}
      <OurApproach />
      
      {/* Our Services Section */}
      <OurServices />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Newsletter Section */}
      <Newsletter />
      
      {/* CTA Section */}
      <CTA />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
