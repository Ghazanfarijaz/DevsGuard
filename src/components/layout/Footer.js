import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    column1: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Services", href: "/#services" },
      { name: "Contact", href: "/contact" },
    ],
    column2: [
      { name: "Web Development", href: "/#services" },
      { name: "Mobile Apps", href: "/#services" },
      { name: "Cloud Solutions", href: "/#services" },
      { name: "UI/UX Design", href: "/#services" },
    ],
    column3: [
      { name: "Our Team", href: "/about" },
      { name: "Why Choose Us", href: "/#why-choose-us" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "Blog", href: "/blog" },
    ],
  };

  return (
    <footer className="bg-[#0c456b] text-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/devslogo.svg"
                  alt="DevsGuard Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[32px] font-medium">
                DEVS <span className="font-black">GUARD</span>
              </span>
            </div>
            <p className="text-[16.744px] leading-[31.395px] text-white/90">
              Leading software development company delivering innovative solutions 
              for businesses worldwide. We transform ideas into digital excellence.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[26.163px] font-bold mb-4 text-center lg:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[16.744px] leading-[31.395px]">
              {footerLinks.column1.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-[#78d5ea] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[26.163px] font-bold mb-4 text-center lg:text-left">
              Resources
            </h3>
            <ul className="space-y-2 text-[16.744px] leading-[31.395px]">
              {footerLinks.column2.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-[#78d5ea] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-[26.163px] font-bold mb-4">Get In Touch</h3>
            <p className="text-[18.837px] leading-[31.395px] mb-4">
              Ready to start your next project? Let's discuss how we can help 
              bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#78d5ea] text-[#0c456b] px-6 py-2 rounded-lg font-semibold hover:bg-[#51aec5] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[16.744px] text-white/80">
            © {new Date().getFullYear()} DevsGuard. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com/devsguard"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Follow us on Twitter"
            >
              <div className="relative w-[22px] h-[22px]">
                <Image
                  src="/svgs/twitter.svg"
                  alt="Twitter"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
            <a
              href="https://linkedin.com/company/devsguard"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Follow us on LinkedIn"
            >
              <div className="relative w-[22px] h-[22px]">
                <Image
                  src="/svgs/linkedin.svg"
                  alt="LinkedIn"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
            <a
              href="https://instagram.com/devsguard"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Follow us on Instagram"
            >
              <div className="relative w-[22px] h-[22px]">
                <Image
                  src="/svgs/instagram.svg"
                  alt="Instagram"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
            <a
              href="https://facebook.com/devsguard"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Follow us on Facebook"
            >
              <div className="relative w-[22px] h-[22px]">
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
      </div>
    </footer>
  );
}
