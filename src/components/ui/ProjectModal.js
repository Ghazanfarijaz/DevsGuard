'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ProjectModal({ project, isOpen, onClose }) {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle scroll to update custom scrollbar
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const scrollableHeight = scrollHeight - clientHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  // Sample images for the gallery (you can replace with actual project images)
  const projectImages = [
    project.image,
    'http://localhost:3845/assets/7edf6717e97b5eb8766752abed5ce758a396281b.png',
    'http://localhost:3845/assets/752f2ba327108f0bd64d237955edcc559bde602b.png',
    'http://localhost:3845/assets/7edf6717e97b5eb8766752abed5ce758a396281b.png',
  ];

  const fullDescription = `We designed and developed a scalable analytics platform that helps businesses track performance metrics in real time. Our focus was on speed, clarity, and long-term scalability, resulting in a system capable of handling high data volumes with minimal latency. The final product enabled the client to make faster, data-driven decisions and scale confidently as user demand grew.

We began by defining a clean system architecture focused on scalability and performance. A modular backend was built to handle data ingestion, processing, and reporting efficiently, while a responsive frontend translated complex data into clear, actionable visualizations. Security, performance optimization, and future extensibility were prioritized from the start to ensure long-term reliability.

Tech Stack: React, Node.js, PostgreSQL, AWS`;

  // Calculate scrollbar thumb height and position
  const scrollbarHeight = 650; // Total scrollbar height
  const thumbHeight = scrollbarHeight * 0.4; // 40% of scrollbar height
  const thumbTop = (scrollbarHeight - thumbHeight) * (scrollProgress / 100);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[25px] w-[90vw] max-w-[1103px] h-[90vh] max-h-[772px] overflow-hidden shadow-2xl flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-10 bg-[#0c456b] w-[55px] h-[51px] rounded-[30px] flex items-center justify-center hover:bg-[#235784] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 text-white"
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

        {/* Left Side - Scrollable Image Gallery */}
        <div className="relative w-[336px] bg-[#88adcf] overflow-hidden flex-shrink-0">
          {/* Custom Scrollbar - Left side */}
          <div className="absolute left-[60px] top-[62px] bottom-[62px] w-[5px] z-20 pointer-events-none">
            {/* Scrollbar Track (white background) */}
            <div className="absolute inset-0 bg-white rounded-full" />
            {/* Scrollbar Thumb (blue, positioned based on scroll) */}
            <div
              className="absolute bg-[#0c456b] rounded-full transition-all duration-100"
              style={{
                top: `${thumbTop}px`,
                height: `${thumbHeight}px`,
                width: '100%',
              }}
            />
          </div>

          {/* Scrollable Images Container */}
          <div
            ref={scrollContainerRef}
            className="h-full overflow-y-auto custom-scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingLeft: '105px',
              paddingRight: '105px',
            }}
          >
            <div className="py-[60px] space-y-[49px]">
              {projectImages.map((img, index) => (
                <div
                  key={index}
                  className="relative h-[302px] rounded-[50px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#88adcf]"
                >
                  <Image
                    src={img}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="336px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Project Details */}
        <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
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

