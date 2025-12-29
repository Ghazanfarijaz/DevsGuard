'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0); // Reset to first image when modal opens
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  // Use project images array, or fallback to single image if images array doesn't exist
  const projectImages = project.images || (project.image ? [project.image] : []);

  const fullDescription = `We designed and developed a scalable analytics platform that helps businesses track performance metrics in real time. Our focus was on speed, clarity, and long-term scalability, resulting in a system capable of handling high data volumes with minimal latency. The final product enabled the client to make faster, data-driven decisions and scale confidently as user demand grew.

We began by defining a clean system architecture focused on scalability and performance. A modular backend was built to handle data ingestion, processing, and reporting efficiently, while a responsive frontend translated complex data into clear, actionable visualizations. Security, performance optimization, and future extensibility were prioritized from the start to ensure long-term reliability.

Tech Stack: React, Node.js, PostgreSQL, AWS`;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[25px] w-[90vw] max-w-[1103px] h-[90vh] max-h-[772px] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 lg:top-8 lg:right-8 z-10 bg-[#0c456b] w-[45px] h-[45px] lg:w-[55px] lg:h-[51px] rounded-[30px] flex items-center justify-center hover:bg-[#235784] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5 lg:w-6 lg:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Carousel - Top on mobile/tablet, Left on desktop */}
        <div className="relative w-full lg:w-[400px] xl:w-[500px] h-[300px] sm:h-[350px] lg:h-full bg-[#88adcf] overflow-hidden flex-shrink-0 flex items-center justify-center">
          {/* Current Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="relative w-full h-full max-h-[280px] sm:max-h-[320px] lg:max-h-[600px] rounded-[50px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#88adcf]">
              <Image
                src={projectImages[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-[20px] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            aria-label="Previous image"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#0c456b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-[20px] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            aria-label="Next image"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#0c456b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {projectImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project Details - Bottom on mobile/tablet, Right on desktop */}
        <div className="flex-1 p-6 sm:p-8 lg:p-12 overflow-y-auto">
          <h2 className="font-inter font-bold text-[#293842] text-3xl sm:text-4xl lg:text-[32px] mb-8">
            {project.title}
          </h2>
          <div className="font-poppins font-medium text-[#293842] text-base sm:text-lg lg:text-[16.744px] leading-[31.395px] space-y-6">
            {fullDescription.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

