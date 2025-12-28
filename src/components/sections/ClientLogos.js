import Button from '../ui/Button';

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[#0c456b] text-2xl sm:text-3xl lg:text-[30px] font-black font-['Inter',sans-serif] mb-2">
            Trusted By{' '}
            <span className="text-[#319ac7]">20+</span> Happy Clients
            including these Fortune companies
          </h2>
          <div className="flex justify-center">
            <div className="h-[3px] w-[58px] bg-[rgba(12,69,107,0.76)]" />
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden py-8">
          <div className="flex items-center justify-center space-x-8 sm:space-x-12 lg:space-x-16 animate-scroll">
            {/* Client Logos - These would be actual logo images */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-24 h-12 sm:w-32 sm:h-16 lg:w-40 lg:h-20 bg-gray-200 rounded flex items-center justify-center"
              >
                <span className="text-gray-400 text-xs">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* More Button */}
        <div className="text-center mt-8">
          <Button variant="primary" className="px-9 py-5 text-[20px]">
            More
          </Button>
        </div>
      </div>
    </section>
  );
}

