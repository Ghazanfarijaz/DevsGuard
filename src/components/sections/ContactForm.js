"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useToast } from "@/components/ui/ToastContainer";

// Dynamically import Map component to avoid SSR issues
const Map = dynamic(() => import("../ui/Map"), { ssr: false });

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { showToast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Here you would make an actual API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      // });
      
      setIsSuccess(true);
      showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[489px_1fr] gap-8 lg:gap-12">
          {/* Find Us Card - Left Side */}
          <div className="bg-[#0c456b] rounded-[15px] p-8 lg:p-12 relative overflow-hidden">
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-[48px] mb-8">
              Find us
            </h2>

            {/* Interactive Map */}
            <div className="relative h-[136px] rounded-[13px] overflow-hidden mb-8">
              <Map center={[40.7128, -74.006]} zoom={13} />
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 mb-6">
              <div className="relative w-5 h-6 flex-shrink-0 mt-1">
                <Image
                  src="/svgs/location.svg"
                  alt="Location"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-poppins font-medium text-white text-base leading-[24px]">
                Adress lorem ispum geerate growth of aindependency la tiops pos
                hsads
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-8">
              <div className="relative w-[22px] h-[18px] flex-shrink-0 mt-1">
                <Image
                  src="/svgs/email.svg"
                  alt="Email"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-poppins font-medium text-white text-base">
                admin@123@gmail.com
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-[rgba(49,154,199,0.31)] rounded-[6px] flex items-center justify-center hover:bg-[rgba(49,154,199,0.5)] transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <div className="relative w-5 h-5">
                  <Image
                    src="/svgs/linkedin.svg"
                    alt="LinkedIn"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[rgba(49,154,199,0.31)] rounded-[6px] flex items-center justify-center hover:bg-[rgba(49,154,199,0.5)] transition-colors cursor-pointer"
                aria-label="Google"
              >
                <div className="relative w-5 h-5">
                  <Image
                    src="/svgs/google.svg"
                    alt="Google"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[rgba(49,154,199,0.31)] rounded-[6px] flex items-center justify-center hover:bg-[rgba(49,154,199,0.5)] transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <div className="relative w-5 h-5">
                  <Image
                    src="/svgs/facebook.svg"
                    alt="Facebook"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="bg-white">
            <div className="mb-8">
              <h2 className="font-poppins font-bold text-[#0c456b] text-3xl sm:text-4xl lg:text-[48px] mb-4 text-center lg:text-left">
                Get In Touch
              </h2>
              <p className="font-poppins font-medium text-[#293842] text-base lg:text-[16px] leading-relaxed">
                Feel free to get in touch with us, for any sort of queries
                regarding our service. We are 24/7 available to provide you with
                best in what you ask for.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Last Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-poppins font-extralight text-[#382222] text-[16px] mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={isSubmitting || isSuccess}
                    className="w-full h-[57px] bg-[rgba(0,0,0,0.05)] border border-[#aeaeb2] rounded-[20px] px-4 font-poppins font-extralight text-[#382222] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0c456b] disabled:opacity-60 disabled:cursor-not-allowed"
                    required
                  />
                </div>
                <div>
                  <label className="block font-poppins font-extralight text-[#382222] text-[16px] mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={isSubmitting || isSuccess}
                    className="w-full h-[57px] bg-[rgba(0,0,0,0.05)] border border-[#aeaeb2] rounded-[20px] px-4 font-poppins font-extralight text-[#382222] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0c456b] disabled:opacity-60 disabled:cursor-not-allowed"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block font-poppins font-extralight text-[#382222] text-[16px] mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting || isSuccess}
                  className="w-full h-[57px] bg-[rgba(0,0,0,0.05)] border border-[#aeaeb2] rounded-[20px] px-4 font-poppins font-extralight text-[#382222] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0c456b] disabled:opacity-60 disabled:cursor-not-allowed"
                  required
                />
              </div>

              {/* Phone and Service Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-poppins font-extralight text-[#382222] text-[16px] mb-2">
                    <span className="mr-2">+ 1</span>
                    000-000-0000
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting || isSuccess}
                    className="w-full h-[57px] bg-[rgba(0,0,0,0.05)] border border-[#aeaeb2] rounded-[20px] px-4 font-poppins font-extralight text-[#382222] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0c456b] disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="000-000-0000"
                    required
                  />
                </div>
                <div>
                  <label className="block font-poppins font-extralight text-[#382222] text-[16px] mb-2">
                    Service
                  </label>
                  <input
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={isSubmitting || isSuccess}
                    className="w-full h-[57px] bg-[rgba(0,0,0,0.05)] border border-[#aeaeb2] rounded-[20px] px-4 font-poppins font-extralight text-[#382222] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0c456b] disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-poppins font-extralight text-[#382222] text-[16px] mb-2">
                  How can we help
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  disabled={isSubmitting || isSuccess}
                  className="w-full h-[185px] bg-[rgba(0,0,0,0.05)] border border-[#aeaeb2] rounded-[20px] px-4 py-4 font-poppins font-extralight text-[#382222] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0c456b] resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`text-white font-poppins font-medium text-[16px] px-12 py-4 rounded-[25px] shadow-[0px_0px_14px_0px_rgba(0,0,0,0.12)] transition-all cursor-pointer flex items-center gap-2 relative overflow-hidden ${
                    isSubmitting
                      ? 'bg-[#0c456b] cursor-not-allowed'
                      : isSuccess
                      ? 'bg-green-500'
                      : 'bg-[#0e4366] hover:bg-[#0c456b] active:scale-95 active:shadow-inner'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
