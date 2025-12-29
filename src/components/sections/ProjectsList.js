'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProjectModal from '../ui/ProjectModal';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description:
      'We designed and developed a scalable analytics platform that helps businesses track performance metrics in real time. Our focus was on speed, clarity, and long-term scalability, resulting in a system capable of handling high data volumes with minimal latency. The final product enabled the client to make faster, data-driven decisions and scale confidently as user demand grew.',
    image: 'http://localhost:3845/assets/752f2ba327108f0bd64d237955edcc559bde602b.png',
    bgGradient: 'bg-gradient-to-r from-[#1787d1] to-[#0c456b]',
  },
  {
    id: 2,
    title: 'Project 2',
    description:
      "We built a cross-platform mobile application that delivers personalized workout plans and progress tracking. By prioritizing user experience and performance, we ensured smooth navigation and fast load times across devices. The app launched successfully on both iOS and Android, helping the client rapidly grow their user base after release.",
    image: 'http://localhost:3845/assets/7edf6717e97b5eb8766752abed5ce758a396281b.png',
    bgGradient: 'bg-gradient-to-r from-[#1787d1] to-[#0c456b]',
  },
  {
    id: 3,
    title: 'Project 3',
    description:
      "We reimagined the client's dashboard to improve usability and reduce friction for everyday users. Through user research and iterative design, we simplified complex workflows into an intuitive interface. The redesign significantly improved engagement and reduced task completion time.\nDeliverables: UX Research, Wireframes, High-Fidelity UI",
    image: 'http://localhost:3845/assets/752f2ba327108f0bd64d237955edcc559bde602b.png',
    bgGradient: 'bg-gradient-to-r from-[#1787d1] to-[#0c456b]',
  },
];

export default function ProjectsList() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20 lg:space-y-32">
          {projects.map((project, index) => (
            <div key={project.id} className="relative">
              {/* Background Gradient Card - positioned behind image */}
              <div
                className={`absolute left-0 right-0 h-[367px] rounded-[25px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${project.bgGradient}`}
                style={{ top: index === 0 ? '55px' : '55px' }}
              />

              {/* Content Container */}
              <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Image Card - positioned above gradient */}
                <div className="relative w-full lg:w-[472px] h-[400px] lg:h-[478px] rounded-[50px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#88adcf] flex-shrink-0 z-10">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[#d9d9d9]" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 472px"
                    />
                  </div>
                </div>

                {/* Text Content - positioned to align with gradient card */}
                <div className="flex-1 text-white lg:pt-[86px] flex flex-col" style={{ maxHeight: '367px' }}>
                  <h2 className="font-inter font-bold text-3xl sm:text-4xl lg:text-[32px] mb-6 leading-normal flex-shrink-0">
                    {project.title}
                  </h2>
                  <div className="relative flex-1 mb-8 max-w-[621px] overflow-hidden">
                    {/* Fade-out gradient overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[rgba(23,135,209,1)] to-transparent pointer-events-none z-10" />
                    {/* Scrollable description */}
                    <div className="overflow-y-auto max-h-[200px] pr-2 custom-scrollbar" style={{ scrollbarWidth: 'thin' }}>
                      <p className="font-inter font-medium text-base sm:text-lg lg:text-[16.744px] leading-[31.395px]">
                        {project.description.split('\n').map((line, i, arr) => (
                          <span key={i}>
                            {line}
                            {i < arr.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleLearnMore(project)}
                    className="inline-flex items-center justify-center bg-white border border-[#0e4366] text-[#0c456b] text-[16px] font-extrabold font-inter px-9 py-5 rounded-[25px] shadow-[0px_4px_31px_0px_rgba(0,0,0,0.15)] hover:bg-gray-50 transition-colors cursor-pointer flex-shrink-0 self-start"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

