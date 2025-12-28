import Image from 'next/image';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[554px] h-[550px] opacity-20">
          <div className="absolute inset-0 rounded-full bg-[#78d5ea] blur-3xl" />
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Card with Gradient Background */}
        <div className="max-w-5xl mx-auto relative">
          {/* Background Image/Pattern */}
          <div className="absolute inset-0 rounded-[50px] overflow-hidden">
            <Image
              src="http://localhost:3845/assets/105474216bb55bac1ce6125e0648b8bd7482365b.svg"
              alt="CTA Background"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#78d5ea] to-white rounded-[50px] opacity-90" />

          {/* Card Content */}
          <div className="relative bg-gradient-to-b from-[#78d5ea] to-white rounded-[50px] px-16 lg:px-24 py-24 lg:py-32 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
              {/* Text Content - Left Side */}
              <div className="flex-1 text-left">
                <p className="text-[#0c456b] text-2xl sm:text-3xl lg:text-[40px] font-bold font-poppins leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  indus.
                </p>
              </div>

              {/* Button - Right Side */}
              <div className="flex-shrink-0">
                <Button
                  href="/contact"
                  className="bg-[#235784] border border-[#0c456b] text-white text-[24px] font-bold font-inter px-8 py-4 rounded-[100px] hover:bg-[#1a4568] transition-colors inline-flex items-center gap-3"
                >
                  Use to touch with
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

