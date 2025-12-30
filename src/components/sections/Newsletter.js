'use client';

import { useState } from 'react';
import { useToast } from '@/components/ui/ToastContainer';

export default function Newsletter({ variant = 'card' }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Here you would make an actual API call
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   body: JSON.stringify({ email }),
      // });
      
      setIsSuccess(true);
      showToast('Successfully subscribed to newsletter!', 'success');
      setEmail('');
      
      // Reset success state after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    } catch (error) {
      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Full-width variant for projects page
  if (variant === 'fullwidth') {
    return (
      <section className="relative py-16 lg:py-20 bg-[#0c456b]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-[36px] font-bold font-poppins mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-[#faeded] text-lg sm:text-xl lg:text-[24px] font-medium font-poppins max-w-4xl mx-auto">
              Stay updated with our latest insights and news delivered straight to
              your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              disabled={isSubmitting || isSuccess}
              className="bg-[#f8f8f8] text-[#382222] text-[20px] font-medium font-poppins px-6 py-4 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#78d5ea] w-full sm:w-[515px] disabled:opacity-60 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`text-[#0c456b] text-[20px] font-medium font-poppins px-8 py-4 rounded-[20px] transition-all whitespace-nowrap cursor-pointer w-full sm:w-[156px] ${
                isSubmitting
                  ? 'bg-[#5fc5d8] cursor-not-allowed'
                  : isSuccess
                  ? 'bg-green-500 text-white'
                  : 'bg-[#78d5ea] hover:bg-[#5fc5d8]'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </span>
              ) : isSuccess ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Subscribed!
                </span>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        </div>
      </section>
    );
  }

  // Card variant for home page
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
              disabled={isSubmitting || isSuccess}
              className="flex-1 bg-[#f8f8f8] text-[#382222] text-[20px] font-medium font-poppins px-6 py-4 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#78d5ea] disabled:opacity-60 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`text-[#0c456b] text-[20px] font-medium font-poppins px-8 py-4 rounded-[20px] transition-all whitespace-nowrap cursor-pointer ${
                isSubmitting
                  ? 'bg-[#5fc5d8] cursor-not-allowed'
                  : isSuccess
                  ? 'bg-green-500 text-white'
                  : 'bg-[#78d5ea] hover:bg-[#5fc5d8]'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </span>
              ) : isSuccess ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Subscribed!
                </span>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

