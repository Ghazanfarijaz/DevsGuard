import Image from "next/image";
import { stats } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-[#0c456b] text-5xl sm:text-6xl lg:text-[96px] font-bold font-poppins mb-12 lg:mb-16 text-center">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Benefits with Image */}
          <div className="relative">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[657px] rounded-[37px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <Image
                src="/svgs/why-choose-us-img.svg"
                alt="Why Choose Us"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Benefits List */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0c456b] to-transparent p-6 lg:p-8">
              <ul className="space-y-3 lg:space-y-4">
                {[
                  "Proven Expertise",
                  "Client-Focused Approach",
                  "End-to-End Services",
                  "Fast Delivery",
                  "Quality & Precision",
                ].map((benefit, index) => (
                  <li
                    key={index}
                    className="text-white text-xl sm:text-2xl lg:text-[32px] font-extrabold font-poppins"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            {/* Icon */}
            <div className="absolute top-4 left-4 w-24 h-24 lg:w-28 lg:h-28">
              <Image
                src="http://localhost:3845/assets/fc514b54acc302eae6053bfb7130df405663bcbc.svg"
                alt="Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-[#0c456b] rounded-[26px] p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-lg"
              >
                <p className="text-white text-xl sm:text-2xl lg:text-[32px] font-extrabold font-['Poppins',sans-serif] mb-2">
                  {stat.label}
                </p>
                <p className="text-white text-4xl sm:text-5xl lg:text-[64px] font-black font-inter">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
