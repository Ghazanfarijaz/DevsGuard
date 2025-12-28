import Image from "next/image";

export default function ProjectsHero() {
  return (
    <section className="relative pt-24 pb-0 overflow-hidden lg:pt-28 z-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[25px] overflow-hidden">
          {/* Background Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[447px]">
            <Image
              src="/svgs/projects-bg.svg"
              alt="Projects Background"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1244px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
