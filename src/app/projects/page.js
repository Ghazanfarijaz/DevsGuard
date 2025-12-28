import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectsHero from '@/components/sections/ProjectsHero';
import ProjectsList from '@/components/sections/ProjectsList';
import Newsletter from '@/components/sections/Newsletter';
import CTA from '@/components/sections/CTA';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white relative">
      <Navbar currentPage="projects" />
      
      {/* Projects Hero Section */}
      <ProjectsHero />
      
      {/* Full-width gradient background - starts from middle of hero, extends to newsletter */}
      <div className="relative">
        {/* Gradient background - one continuous gradient from middle of hero to newsletter */}
        <div
          className="absolute left-0 right-0 w-full bg-gradient-to-b from-[rgba(84,172,230,0.5)] to-[#0c456b]"
          style={{
            top: '-223.5px', // Half of hero height (447px / 2 = 223.5px) - negative to start from middle
            bottom: 0,
            zIndex: 0,
          }}
        />
        
        {/* Content sections with relative positioning */}
        <div className="relative z-10">
          {/* Projects List Section */}
          <ProjectsList />
          
          {/* Newsletter Section */}
          <Newsletter variant="fullwidth" />
        </div>
      </div>
      
      {/* CTA Section */}
      <CTA />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

