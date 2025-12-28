import { Inter, Poppins, Rufina } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const rufina = Rufina({
  variable: "--font-rufina",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "DEVSGUARD - Technology Solutions That Fuel Your Growth",
  description:
    "DEVSGUARD provides comprehensive technology solutions including web development, cloud services, cybersecurity, AI automation, IT consulting, and DevOps infrastructure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${rufina.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
