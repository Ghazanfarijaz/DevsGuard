import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden lg:pt-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[25px] overflow-hidden">
          <div className="relative h-[400px] sm:h-[500px] lg:h-[495px]">
            <Image
              src="/svgs/about-bg.svg"
              alt="About Hero"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1292px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
