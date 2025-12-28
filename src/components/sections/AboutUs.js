import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 lg:py-24 bg-[#f8f8f8]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Text Content and Our Mission */}
          <div className="flex flex-col gap-12">
            {/* About Us Section */}
            <div>
              <h2 className="font-poppins font-bold text-[#0c456b] text-3xl sm:text-4xl lg:text-[40px] mb-6">
                About us
              </h2>
              <div className="space-y-6 font-poppins font-semibold text-[#293842] text-lg sm:text-xl lg:text-[20px] leading-[31.602px]">
                <p>
                  We build technology with purpose, integrity, and impact that
                  can be measured. We partner with forward-thinking businesses
                  to turn complex challenges into digital advantages, combining
                  diverse global talent with deep technical and strategic
                  insight. With a team of 50+ experts across three continents,
                  we approach every project with the mindset of creating
                  solutions that drive real, meaningful results.
                </p>
                <p>
                  We started with a simple goal: give businesses clarity, not
                  just code. What began with two founders has grown into a 50+
                  team across 15 cities, built entirely through referrals and
                  the results we deliver. Our expanding global talent gives us
                  the depth to solve complex challenges for a wide range of
                  clients.
                </p>
              </div>
            </div>

            {/* Our Mission Section - fills space above stats cards */}
            <div>
              <h2 className="font-poppins font-bold text-[#0c456b] text-3xl sm:text-4xl lg:text-[40px] mb-6">
                Our Mission
              </h2>
              <p className="font-poppins font-semibold text-[#293842] text-lg sm:text-xl lg:text-[20px] leading-[31.602px]">
                We help businesses cut through digital complexity and turn
                technology into real strategic value. Our focus on clarity,
                direction, and execution ensures every tech decision strengthens
                your broader business goals and long-term vision.
              </p>
            </div>
          </div>

          {/* Right Side - Image and Stats Cards */}
          <div>
            {/* Image */}
            <div className="relative h-[300px] sm:h-[350px] lg:h-[362px] rounded-[37px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mb-6">
              <Image
                src="/svgs/about-us-img.svg"
                alt="About Us"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 579px"
              />
            </div>

            {/* Stats Cards - 2x2 grid, matching image width */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="bg-[#0c456b] rounded-[26px] p-6 flex flex-col items-center justify-center text-center shadow-lg">
                <p className="font-poppins font-extrabold text-white text-xl sm:text-2xl lg:text-[24px] mb-4">
                  Years
                </p>
                <p className="font-inter font-black text-white text-4xl sm:text-5xl lg:text-[48px]">
                  11+
                </p>
              </div>
              <div className="bg-[#0c456b] rounded-[26px] p-6 flex flex-col items-center justify-center text-center shadow-lg">
                <p className="font-poppins font-extrabold text-white text-xl sm:text-2xl lg:text-[24px] mb-4">
                  Clients
                </p>
                <p className="font-inter font-black text-white text-4xl sm:text-5xl lg:text-[48px]">
                  120+
                </p>
              </div>
              <div className="bg-[#0c456b] rounded-[26px] p-6 flex flex-col items-center justify-center text-center shadow-lg">
                <p className="font-poppins font-extrabold text-white text-xl sm:text-2xl lg:text-[24px] mb-4">
                  Projects
                </p>
                <p className="font-inter font-black text-white text-4xl sm:text-5xl lg:text-[48px]">
                  250+
                </p>
              </div>
              <div className="bg-[#0c456b] rounded-[26px] p-6 flex flex-col items-center justify-center text-center shadow-lg">
                <p className="font-poppins font-extrabold text-white text-xl sm:text-2xl lg:text-[24px] mb-4">
                  Industry Awards
                </p>
                <p className="font-inter font-black text-white text-4xl sm:text-5xl lg:text-[48px]">
                  15
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
