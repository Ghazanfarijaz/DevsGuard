import Image from "next/image";
import Button from "../ui/Button";
import { heroContent } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden lg:pt-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[50px] overflow-hidden">
          {/* Background Image */}
          <div className="relative h-[400px] sm:h-[600px] lg:h-[826px] bg-gradient-to-br from-[#0c456b] to-[#235784]">
            <Image
              src={heroContent.backgroundImage}
              alt="Technology Solutions"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
            />
            {/* Light Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
            {/* Border Overlay */}
            <div
              className="absolute inset-0 border-2 border-black/30 rounded-[40px] pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24">
            <h1 className="font-rufina font-bold text-white text-4xl sm:text-5xl lg:text-[64px] leading-tight mb-6 max-w-2xl">
              Technology
              <br />
              solutions that
              <br />
              fuel your growth
            </h1>
            <Button
              href={heroContent.ctaLink}
              variant="primary"
              className="bg-[#0c456b] rounded-[50px] px-8 py-3 text-base sm:text-lg"
            >
              {heroContent.ctaText}
              <svg
                className="ml-2 w-4 h-4"
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

      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative w-[560px] h-[481px] opacity-20">
          <div className="absolute inset-0 rounded-full bg-[#78d5ea] blur-3xl" />
        </div>
      </div>
    </section>
  );
}
