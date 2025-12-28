'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Card */}
        <div className="max-w-5xl mx-auto bg-[#0c456b] rounded-[35px] p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-[36px] font-bold font-poppins mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-[#faeded] text-lg sm:text-xl lg:text-[24px] font-medium font-poppins">
              Stay updated with our latest insights and news delivered straight to
              your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-[#f8f8f8] text-[#382222] text-[20px] font-medium font-poppins px-6 py-4 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#78d5ea]"
            />
            <button
              type="submit"
              className="bg-[#78d5ea] text-[#0c456b] text-[20px] font-medium font-poppins px-8 py-4 rounded-[20px] hover:bg-[#5fc5d8] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

