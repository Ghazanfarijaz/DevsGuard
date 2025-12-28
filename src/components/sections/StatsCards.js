const stats = [
  {
    id: 1,
    label: 'Years',
    value: '11+',
  },
  {
    id: 2,
    label: 'Clients',
    value: '120+',
  },
  {
    id: 3,
    label: 'Projects',
    value: '250+',
  },
  {
    id: 4,
    label: 'Industry Awards',
    value: '15',
  },
];

export default function StatsCards() {
  return (
    <section className="py-16 lg:py-24 bg-[#f8f8f8]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#0c456b] rounded-[26px] p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-lg"
            >
              <p className="font-poppins font-extrabold text-white text-xl sm:text-2xl lg:text-[24px] mb-4">
                {stat.label}
              </p>
              <p className="font-inter font-black text-white text-4xl sm:text-5xl lg:text-[48px]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

