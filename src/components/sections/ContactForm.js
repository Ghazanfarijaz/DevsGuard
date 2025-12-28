"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
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
                    className="w-full h-[57px] bg-[rgba(0,0,0,0.05)] border border-[#aeaeb2] rounded-[20px] px-4 font-poppins font-extralight text-[#382222] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0c456b]"
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
                    className="w-full h-[57px] bg-[rgba(0,0,0,0.05)] border border-[#aeaeb2] rounded-[20px] px-4 font-poppins font-extralight text-[#382222] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0c456b]"
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
                  className="w-full h-[57px] bg-[rgba(0,0,0,0.05)] border border-[#aeaeb2] rounded-[20px] px-4 font-poppins font-extralight text-[#382222] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0c456b]"
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
                    className="w-full h-[57px] bg-[rgba(0,0,0,0.05)] border border-[#aeaeb2] rounded-[20px] px-4 font-poppins font-extralight text-[#382222] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0c456b]"
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
                    className="w-full h-[57px] bg-[rgba(0,0,0,0.05)] border border-[#aeaeb2] rounded-[20px] px-4 font-poppins font-extralight text-[#382222] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0c456b]"
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
                  className="w-full h-[185px] bg-[rgba(0,0,0,0.05)] border border-[#aeaeb2] rounded-[20px] px-4 py-4 font-poppins font-extralight text-[#382222] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0c456b] resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#0e4366] text-white font-poppins font-medium text-[16px] px-12 py-4 rounded-[25px] shadow-[0px_0px_14px_0px_rgba(0,0,0,0.12)] hover:bg-[#0c456b] transition-colors cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
