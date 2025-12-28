import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    column1: [
      { name: "Many", href: "#" },
      { name: "Accident Sometime", href: "#" },
      { name: "Some Us", href: "#" },
      { name: "USE", href: "#" },
      { name: "Simplye Us", href: "#" },
    ],
    column2: [
      { name: "When Looking", href: "#" },
      { name: "Many Desktops", href: "#" },
      { name: "Sometimes By Accident", href: "#" },
    ],
    column3: [
      {
        name: "Lorem Ipsum is simply dummy text of the printing and type.",
        href: "#",
      },
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[26.163px] font-bold mb-4 text-center lg:text-left">
              Lorem Ipsu
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
              Centuriesi
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
            <h3 className="text-[26.163px] font-bold mb-4">Establishe</h3>
            <p className="text-[18.837px] leading-[31.395px]">
              Lorem Ipsum is simply dummy text of the printing and type.
            </p>
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
            <div className="relative w-[22px] h-[22px]">
              <Image
                src="/svgs/twitter.svg"
                alt="Twitter"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[22px] h-[22px]">
              <Image
                src="/svgs/linkedin.svg"
                alt="LinkedIn"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[22px] h-[22px]">
              <Image
                src="/svgs/instagram.svg"
                alt="Instagram"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[22px] h-[22px]">
              <Image
                src="/svgs/facebook.svg"
                alt="Facebook"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
