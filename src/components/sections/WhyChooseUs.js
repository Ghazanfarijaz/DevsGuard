import Image from "next/image";
import { stats, benefits } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-[#0c456b] text-5xl sm:text-6xl lg:text-[96px] font-bold font-poppins mb-12 lg:mb-16 text-center">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Benefits Card */}
          <div className="bg-[#0c456b] rounded-[37px] p-8 lg:p-12 flex flex-col items-center justify-center text-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] min-h-[400px] sm:min-h-[500px] lg:min-h-[657px]">
            {/* Icon - Centered at top */}
            <div className="relative w-24 h-24 lg:w-32 lg:h-32 mb-8 lg:mb-12">
              <Image
                src="/svgs/why-choose-us-img-new.svg"
                alt="Icon"
                fill
                className="object-contain"
              />
            </div>

            {/* Benefits List - Centered */}
            <ul className="space-y-4 lg:space-y-6 flex-1 flex flex-col justify-center">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="text-white text-xl sm:text-2xl lg:text-[32px] font-extrabold font-poppins"
                >
                  {benefit}
                </li>
              ))}
            </ul>
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
