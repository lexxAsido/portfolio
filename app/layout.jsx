import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Asido | Personal Portfolio",
  description: "Asido is a versatile Fontend and mobile developer ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-700 text-gray-950 relative h-dvh`}>
        <div className="bg-[#f9d207] absolute top-[-6rem] -z-10 right-[11rem] h-[31rem] w-[50rem] rounded-full blur-[10rem] max-md:w-[68rem]"></div>
        <div className="bg-[#53f6f7] absolute top-[-6rem] -z-10 left-[-35rem] h-[31rem] w-[31rem] rounded-full blur-[10rem] sm:w-[68rem] md:left-[-30rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left:[-5rem]"></div>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
