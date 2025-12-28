import { approachSteps } from '@/lib/constants';

export default function OurApproach() {
  return (
    <section className="py-16 lg:py-24 bg-[#0c456b] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-white text-5xl sm:text-6xl lg:text-[96px] font-bold font-poppins mb-12 lg:mb-16 text-shadow text-center">
          Our Approach
        </h2>

        {/* Steps Timeline Container */}
        <div className="relative mt-8 lg:mt-12">
          <div className="space-y-16 lg:space-y-24">
            {approachSteps.map((step, index) => {
              const isLeft = step.align === 'left';
              
              return (
                <div key={step.number} className="relative">
                  {/* Vertical Bar - Left for left-aligned, Right for right-aligned */}
                  <div 
                    className={`hidden lg:block absolute top-0 bottom-0 w-[15px] bg-white ${
                      isLeft ? 'left-[170px]' : 'right-[170px]'
                    }`}
                  />

                  {/* Content Container - positioned left or right */}
                  <div
                    className={`relative mt-8 lg:mt-0 ${
                      isLeft 
                        ? 'lg:pl-[197px]' 
                        : 'lg:pr-[197px]'
                    }`}
                  >
                    <div className={`flex-1 ${isLeft ? 'lg:text-left' : 'lg:text-right'}`}>
                      {/* Heading with Number - Number at the corner of heading */}
                      <div className={`relative flex items-center gap-3 ${isLeft ? 'justify-start' : 'justify-end'}`}>
                        {isLeft && (
                          <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                            <span className="text-[#0c456b] text-2xl lg:text-[36px] font-bold font-inter">
                              {step.number}
                            </span>
                          </div>
                        )}
                        <h3 className="text-white text-2xl sm:text-3xl lg:text-[36px] font-bold font-poppins mb-0 whitespace-nowrap">
                          {step.title}
                        </h3>
                        {!isLeft && (
                          <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                            <span className="text-[#0c456b] text-2xl lg:text-[36px] font-bold font-inter">
                              {step.number}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Horizontal Progress Bar - BETWEEN heading and description */}
                      <div 
                        className={`hidden lg:block h-[15px] bg-white my-4 ${
                          isLeft ? 'w-[713px]' : 'w-[713px] ml-auto'
                        }`}
                      />
                      
                      {/* Description - BELOW the horizontal line */}
                      <p
                        className={`text-[#faeded] text-base sm:text-lg lg:text-[20px] font-bold font-poppins leading-relaxed max-w-[668px] ${
                          !isLeft ? 'lg:ml-auto' : ''
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

