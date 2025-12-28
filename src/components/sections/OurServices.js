import { services } from '@/lib/constants';

const iconMap = {
  slack: '💻',
  chrome: '🔒',
  cloud: '☁️',
  database: '🤖',
  award: '💡',
  codesandbox: '⚙️',
};

export default function OurServices() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[#0c456b] text-5xl sm:text-6xl lg:text-[96px] font-bold font-poppins mb-4">
            Our Services
          </h2>
          <p className="text-[#0c456b] text-2xl sm:text-3xl lg:text-[36px] font-bold font-rufina text-shadow">
            What we offer
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#0c456b] rounded-[34px] p-6 lg:p-8 text-white hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 lg:w-[101px] lg:h-[102px] rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-4xl lg:text-5xl">
                    {iconMap[service.icon] || '📦'}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-[24px] font-extrabold font-inter mb-4 text-center">
                {service.title}
              </h3>

              {/* Features */}
              <ul className="space-y-2 text-center">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-base lg:text-[21.068px] leading-[31.602px] font-normal font-inter"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

