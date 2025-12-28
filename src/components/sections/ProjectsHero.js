import Image from "next/image";

export default function ProjectsHero() {
  return (
    <section className="relative pt-24 pb-0 overflow-hidden lg:pt-28 z-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[25px] overflow-hidden">
          {/* Background Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[447px] z-10">
            <Image
              src="/svgs/projects-bg.svg"
              alt="Projects Background"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1244px"
            />
          </div>

          {/* Content - Centered */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
            <h1 className="font-poppins font-bold text-white text-4xl sm:text-5xl lg:text-[48px] leading-normal text-center">
              Our featured
              <br />
              Projects
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
