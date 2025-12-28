import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden lg:pt-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[25px] overflow-hidden">
          {/* Background */}
          <div className="relative h-[300px] sm:h-[350px] lg:h-[368px] bg-[#0c456b]">
            {/* Right side image */}
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[723px] opacity-80">
              <Image
                src="/svgs/contact-bg.svg"
                alt="Contact Hero"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 723px"
              />
            </div>

            {/* Content - Left aligned */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-8 sm:px-12 lg:px-16 z-10">
              <h1 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-[48px] leading-normal text-left">
                Lets connect
                <br />
                and get started
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
