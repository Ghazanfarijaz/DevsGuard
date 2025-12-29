'use client';

import { useState } from 'react';
import Image from 'next/image';
import { testimonials } from '@/lib/constants';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-[#0c456b]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="http://localhost:3845/assets/b44260d34ed01c79654578f10c71142e557be282.svg"
          alt="Background"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-white text-5xl sm:text-6xl lg:text-[96px] font-bold font-poppins mb-4 text-shadow">
            Testimonials
          </h2>
          <p className="text-white text-2xl sm:text-3xl lg:text-[36px] font-bold font-rufina text-shadow">
            Hear it from our clients
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-[20px] w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-[#0c456b]"
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
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-[20px] w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-[#0c456b]"
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

          {/* Testimonial Cards Container with Slide Animation */}
          <div className="relative overflow-hidden px-12 lg:px-20">
            <div 
              className="flex items-center justify-center gap-4 lg:gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(0)`,
              }}
            >
              {/* Left Card (Blurred) */}
              <div className="hidden lg:block flex-1 max-w-[253px] opacity-50 blur-sm transition-all duration-500">
                <div className="bg-[#638db4] rounded-[50px] p-6 h-[323px] flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length]?.image || 'http://localhost:3845/assets/95bb6d01e7fbb72c170ca0ca8ce9ebaf8175c33e.svg'}
                      alt={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length]?.author}
                      width={64}
                      height={64}
                      className="object-cover rounded-full transition-opacity duration-500"
                    />
                  </div>
                  <p className="text-white text-xs line-clamp-6 transition-opacity duration-500">
                    {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length]?.text}
                  </p>
                </div>
              </div>

              {/* Center Card (Active) - Slides in/out */}
              <div 
                className="flex-1 max-w-[401px] transition-all duration-500 ease-in-out"
                style={{
                  transform: isTransitioning ? 'translateX(0) scale(0.95)' : 'translateX(0) scale(1)',
                  opacity: isTransitioning ? 0.7 : 1,
                }}
              >
                <div className="bg-[#638db4] rounded-[50px] p-6 lg:p-8 h-[400px] lg:h-[510px] flex flex-col items-center">
                  <div 
                    className="relative w-24 h-24 lg:w-[124px] lg:h-[124px] rounded-full mb-4 bg-white p-1 flex items-center justify-center overflow-hidden flex-shrink-0 transition-all duration-500"
                    style={{
                      transform: isTransitioning ? 'scale(0.9)' : 'scale(1)',
                    }}
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].author}
                        fill
                        className="object-cover transition-opacity duration-500"
                      />
                    </div>
                  </div>
                  {/* Author Name */}
                  <h3 
                    className="text-white text-base lg:text-[18px] font-bold font-inter mb-4 flex-shrink-0 transition-all duration-500"
                    style={{
                      opacity: isTransitioning ? 0 : 1,
                      transform: isTransitioning ? 'translateY(-10px)' : 'translateY(0)',
                    }}
                  >
                    {testimonials[currentIndex].author}
                  </h3>
                  {/* Scrollable Text */}
                  <div 
                    className="flex-1 w-full overflow-y-auto pr-3 testimonial-scrollbar transition-all duration-500"
                    style={{
                      opacity: isTransitioning ? 0 : 1,
                      transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
                    }}
                  >
                    <p className="text-white text-sm lg:text-[21.068px] leading-[31.602px] font-medium font-inter">
                      {testimonials[currentIndex].text}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Card (Blurred) */}
              <div className="hidden lg:block flex-1 max-w-[253px] opacity-50 blur-sm transition-all duration-500">
                <div className="bg-[#638db4] rounded-[50px] p-6 h-[323px] flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={testimonials[(currentIndex + 1) % testimonials.length]?.image || 'http://localhost:3845/assets/95bb6d01e7fbb72c170ca0ca8ce9ebaf8175c33e.svg'}
                      alt={testimonials[(currentIndex + 1) % testimonials.length]?.author}
                      width={64}
                      height={64}
                      className="object-cover rounded-full transition-opacity duration-500"
                    />
                  </div>
                  <p className="text-white text-xs line-clamp-6 transition-opacity duration-500">
                    {testimonials[(currentIndex + 1) % testimonials.length]?.text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 w-5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex ? 'bg-[#51aec5] w-8' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

