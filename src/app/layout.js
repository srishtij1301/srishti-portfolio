import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import ClientWrapper from "./clientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//metadata
export const metadata = {
  title: "Portfolio App",
  description: "Generated by create next app",
};

// Viewport
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {

  return (
    <>
      <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ClientWrapper>
          <div className="container"> 
            {children}
          </div>
          <div className="footer">
            <p className="my-1 flex"> <span>Let&apos;s get Social - </span> <Link className="px-2" href="https://www.linkedin.com/in/srishtij1301/"> <FaLinkedin /></Link> 
            <Link href="https://github.com/srishtij1301"><FaGithub /></Link>
            <Link className="px-2" href="mailto:srishtij1301@gmail.com"><SiGmail /></Link></p>
           {/* <p>Designed & Developed by Srishti Jain - &#169;2025</p>  */}
           <p className="text-center">Copyright © 2025 Srishti Jain , Built with 💖 using Next Js & Tailwind</p>
            </div>
            </ClientWrapper>
      </body>
      </html>

    </>
  );
}
