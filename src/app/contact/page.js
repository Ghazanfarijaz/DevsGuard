import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/sections/ContactHero';
import BuildWhatsNext from '@/components/sections/BuildWhatsNext';
import ContactForm from '@/components/sections/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar currentPage="contact" />
      
      {/* Contact Hero Section */}
      <ContactHero />
      
      {/* Build What's Next Section */}
      <BuildWhatsNext />
      
      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

